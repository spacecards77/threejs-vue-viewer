import * as THREE from 'three';
import {MOUSE, Vector2, Vector3} from 'three';
import type {SceneService} from "../../services/SceneService.ts";

const STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };

export class ModelNavigationService {
    private sceneService: SceneService;

    // Speeds
    private rotationSpeed: number = 0.002;
    public zoomSpeed: number = 0.004;
    public panSpeed: number = 0.5;

    // State management
    private state: number = STATE.NONE;
    private keyState: number = STATE.NONE;
    private previousMousePosition = {x: 0, y: 0};

    // Mouse button configuration
    public mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE; } = {
        LEFT: MOUSE.ROTATE,
        MIDDLE: MOUSE.PAN,
        RIGHT: MOUSE.DOLLY,
    };

    // Keyboard configuration (keys for ROTATE, ZOOM, PAN)
    public keys: string[] = ['ControlLeft;ControlRight', '', ''];

    // Disable flags
    public noRotate: boolean = false;
    public noZoom: boolean = false;
    public noPan: boolean = false;

    // Alignment settings
    public desiredUp: Vector3 = new Vector3(0, 0, -1);
    public maxAngleToStartAlign: number = Math.PI / 10;
    public maxAlignAngle: number = Math.PI / 500;

    // Rotation axis configuration (set by CameraViewService when changing views)
    // Эти векторы используются как ОПОРНЫЕ для динамического вычисления осей вращения
    // mouseXMoveRotationAxis - вертикальная ось (для движения мыши влево/вправо)
    public mouseXMoveRotationAxis: Vector3 = new Vector3(0, 0, -1);
    // mouseYMoveRotationAxis - резервная горизонтальная ось (для движения мыши вверх/вниз)
    public mouseYMoveRotationAxis: Vector3 = new Vector3(1, 0, 0);

    // Zoom state
    private zoomStart: Vector2 = new Vector2();
    private zoomEnd: Vector2 = new Vector2();

    // Pan state
    private panStart: Vector2 = new Vector2();
    private panEnd: Vector2 = new Vector2();

    // Bound event handlers
    private boundOnMouseDown: (event: MouseEvent) => void;
    private boundOnMouseMove: (event: MouseEvent) => void;
    private boundOnMouseUp: () => void;
    private boundOnMouseLeave: () => void;
    private boundOnMouseWheel: (event: WheelEvent) => void;
    private boundOnKeyDown: (event: KeyboardEvent) => void;
    private boundOnKeyUp: () => void;

    constructor(sceneService: SceneService) {
        this.sceneService = sceneService;

        // Bind event handlers once
        this.boundOnMouseDown = this.onMouseDown.bind(this);
        this.boundOnMouseMove = this.onMouseMove.bind(this);
        this.boundOnMouseUp = this.onMouseUp.bind(this);
        this.boundOnMouseLeave = this.onMouseLeave.bind(this);
        this.boundOnMouseWheel = this.onMouseWheel.bind(this);
        this.boundOnKeyDown = this.onKeyDown.bind(this);
        this.boundOnKeyUp = this.onKeyUp.bind(this);

        this.setupEventListeners();
    }

    /**
     * Dispose of event listeners
     */
    public dispose(): void {
        const domElement = this.sceneService.rendererService.domElement;
        domElement.removeEventListener('mousedown', this.boundOnMouseDown);
        domElement.removeEventListener('mousemove', this.boundOnMouseMove);
        domElement.removeEventListener('mouseup', this.boundOnMouseUp);
        domElement.removeEventListener('mouseleave', this.boundOnMouseLeave);
        domElement.removeEventListener('wheel', this.boundOnMouseWheel);
        window.removeEventListener('keydown', this.boundOnKeyDown);
        window.removeEventListener('keyup', this.boundOnKeyUp);
    }

    private onMouseDown(event: MouseEvent): void {
        // Determine action from mouse button configuration
        let mouseAction;
        switch (event.button) {
            case 0:
                mouseAction = this.mouseButtons.LEFT;
                break;
            case 1:
                mouseAction = this.mouseButtons.MIDDLE;
                break;
            case 2:
                mouseAction = this.mouseButtons.RIGHT;
                break;
            default:
                mouseAction = -1;
        }

        // Set state based on mouse button
        switch (mouseAction) {
            case MOUSE.DOLLY:
                if (!this.noZoom) {
                    this.state = STATE.ZOOM;
                }
                break;
            case MOUSE.ROTATE:
                if (!this.noRotate) {
                    this.state = STATE.ROTATE;
                }
                break;
            case MOUSE.PAN:
                if (!this.noPan) {
                    this.state = STATE.PAN;
                }
                break;
            default:
                this.state = STATE.NONE;
        }

        // Compute effective state: keyState overrides state
        const effectiveState = (this.keyState !== STATE.NONE) ? this.keyState : this.state;

        // Initialize state-specific values based on effective state
        if (effectiveState === STATE.ROTATE && !this.noRotate) {
            // Rotation initialization if needed
        } else if (effectiveState === STATE.ZOOM && !this.noZoom) {
            this.zoomStart.set(event.clientX, event.clientY);
            this.zoomEnd.copy(this.zoomStart);
        } else if (effectiveState === STATE.PAN && !this.noPan) {
            this.panStart.set(event.clientX, event.clientY);
            this.panEnd.copy(this.panStart);
        }

        this.previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    private onMouseMove(event: MouseEvent): void {
        if (this.state === STATE.NONE) return;

        const deltaX = event.clientX - this.previousMousePosition.x;
        const deltaY = event.clientY - this.previousMousePosition.y;

        // Compute effective state: keyState overrides state
        const effectiveState = (this.keyState !== STATE.NONE) ? this.keyState : this.state;

        if (effectiveState === STATE.ROTATE && !this.noRotate) {
            this.rotateObject(deltaX, deltaY);
            this.alignObjectUpVector();
        } else if (effectiveState === STATE.ZOOM && !this.noZoom) {
            this.zoomEnd.set(event.clientX, event.clientY);
            this.zoomModel();
        } else if (effectiveState === STATE.PAN && !this.noPan) {
            this.panEnd.set(event.clientX, event.clientY);
            this.panModel();
        }

        this.previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }

    private onMouseUp(): void {
        this.state = STATE.NONE;
    }

    private onMouseLeave(): void {
        this.state = STATE.NONE;
    }

    private onKeyDown(event: KeyboardEvent): void {
        // Don't set keyState if it's already set
        if (this.keyState !== STATE.NONE) {
            return;
        }

        // Check which key was pressed and set corresponding state
        if (this.isKeyMatch(event.code, this.keys[STATE.ROTATE]) && !this.noRotate) {
            this.keyState = STATE.ROTATE;
        } else if (this.isKeyMatch(event.code, this.keys[STATE.ZOOM]) && !this.noZoom) {
            this.keyState = STATE.ZOOM;
        } else if (this.isKeyMatch(event.code, this.keys[STATE.PAN]) && !this.noPan) {
            this.keyState = STATE.PAN;
        }
    }

    /**
     * Check if the pressed key matches the configured key(s)
     * Supports multiple keys separated by semicolons (e.g., 'ControlLeft;ControlRight')
     * @param pressedKey - The key code that was pressed
     * @param configuredKeys - The configured key(s) string, can contain multiple keys separated by ';'
     * @returns true if the pressed key matches any of the configured keys
     */
    private isKeyMatch(pressedKey: string, configuredKeys: string | undefined): boolean {
        if (!configuredKeys) {
            return false;
        }

        // Split by semicolon and check if any key matches
        const keys = configuredKeys.split(';').map(k => k.trim());
        return keys.includes(pressedKey);
    }

    private onKeyUp(): void {
        // Reset keyState when any key is released
        this.keyState = STATE.NONE;
    }

    private onMouseWheel(event: WheelEvent): void {
        if (this.noZoom) return;

        event.preventDefault();
        event.stopPropagation();

        // Adjust zoom based on wheel delta mode
        // Accumulate changes in zoomStart to create a delta from zoomEnd
        // Using larger multipliers to compensate for the small zoomSpeed (0.001)
        switch (event.deltaMode) {
            case 2:
                // Zoom in pages
                this.zoomStart.y -= event.deltaY * 30;
                break;
            case 1:
                // Zoom in lines
                this.zoomStart.y -= event.deltaY * 12;
                break;
            default:
                // undefined, 0, assume pixels
                this.zoomStart.y -= event.deltaY * 0.3;
                break;
        }

        this.zoomModel();
    }

    private setupEventListeners(): void {
        const domElement = this.sceneService.rendererService.domElement;
        domElement.addEventListener('mousedown', this.boundOnMouseDown);
        domElement.addEventListener('mousemove', this.boundOnMouseMove);
        domElement.addEventListener('mouseup', this.boundOnMouseUp);
        domElement.addEventListener('mouseleave', this.boundOnMouseLeave);
        domElement.addEventListener('wheel', this.boundOnMouseWheel, {passive: false});
        window.addEventListener('keydown', this.boundOnKeyDown);
        window.addEventListener('keyup', this.boundOnKeyUp);
    }

    private rotateObject(deltaX: number, deltaY: number): void {
        if (!this.sceneService.geometryView)
            return;

        const objectWorldPosition = new Vector3();
        this.sceneService.geometryView.getWorldPosition(objectWorldPosition);

        // РЕШЕНИЕ GIMBAL LOCK: вычисляем оси вращения динамически на основе текущего положения камеры
        const cameraWorldPosition = new Vector3();
        this.sceneService.mainCamera.getWorldPosition(cameraWorldPosition);

        // Вектор от объекта к камере (направление взгляда)
        const viewDirection = new Vector3().subVectors(cameraWorldPosition, objectWorldPosition).normalize();

        // Ось вращения для движения мыши по X (вертикальная ось)
        // Используем mouseXMoveRotationAxis как опорный вектор "вверх"
        const verticalRotationAxis = this.mouseXMoveRotationAxis.clone().normalize();

        // Ось вращения для движения мыши по Y (горизонтальная ось)
        // Вычисляем перпендикуляр к направлению взгляда и вертикальной оси
        const horizontalRotationAxis = new Vector3().crossVectors(verticalRotationAxis, viewDirection).normalize();

        // Проверяем, не вырождены ли оси (это может произойти, когда viewDirection параллелен verticalRotationAxis)
        if (horizontalRotationAxis.length() < 0.001) {
            // В этом случае используем mouseYMoveRotationAxis как резервный вариант
            horizontalRotationAxis.copy(this.mouseYMoveRotationAxis).normalize();
        }

        if (deltaX !== 0) {
            const rotationAngleY = deltaX * this.rotationSpeed;
            this.rotateAroundWorldAxis(verticalRotationAxis, rotationAngleY, objectWorldPosition);
        }

        if (deltaY !== 0) {
            const rotationAngleX = deltaY * this.rotationSpeed;
            this.rotateAroundWorldAxis(horizontalRotationAxis, rotationAngleX, objectWorldPosition);
        }
    }

    /**
     * Rotate an object around a world axis
     * @param axis - The world axis to rotate around (must be normalized)
     * @param angle - The angle to rotate in radians
     * @param point - The point through which the axis passes
     */
    private rotateAroundWorldAxis(axis: Vector3, angle: number, point: Vector3): void {
        if (!this.sceneService.geometryView)
            return;

        // Create a quaternion representing the rotation
        const quaternion = new THREE.Quaternion();
        quaternion.setFromAxisAngle(axis, angle);

        // Get the object's world position
        const objectWorldPosition = new Vector3();
        this.sceneService.geometryView.getWorldPosition(objectWorldPosition);

        // Calculate the vector from the rotation point to the object
        const offset = objectWorldPosition.sub(point);

        // Apply the rotation to the offset
        offset.applyQuaternion(quaternion);

        // Update object position
        const newPosition = new Vector3().addVectors(point, offset);

        if (this.sceneService.geometryView.parent) {
            // Convert world position to local position
            const parentWorldMatrix = new THREE.Matrix4();
            parentWorldMatrix.copy(this.sceneService.geometryView.parent.matrixWorld);
            const inverseParentMatrix = new THREE.Matrix4();
            inverseParentMatrix.copy(parentWorldMatrix).invert();
            newPosition.applyMatrix4(inverseParentMatrix);
        }

        this.sceneService.geometryView.position.copy(newPosition);

        // Apply the rotation to the object's orientation
        this.sceneService.geometryView.quaternion.multiplyQuaternions(quaternion, this.sceneService.geometryView.quaternion);
    }

    /**
     * Zoom the camera based on mouse movement
     * Handles PerspectiveCamera and OrthographicCamera differently
     */
    /*private zoomCamera(): void {
        const factor = 1.0 + (this.zoomEnd.y - this.zoomStart.y) * this.zoomSpeed;

        if (factor !== 1.0 && factor > 0.0) {
            if ((this.camera as PerspectiveCamera).isPerspectiveCamera) {
                // For perspective camera: move camera position along eye vector
                const cameraWorldPosition = new Vector3();
                this.camera.getWorldPosition(cameraWorldPosition);

                const objectWorldPosition = new Vector3();
                this.geometryView.Parent.getWorldPosition(objectWorldPosition);

                // Calculate direction from camera to object
                const direction = new Vector3().subVectors(objectWorldPosition, cameraWorldPosition);

                // Zoom by moving camera along this direction
                const zoomDelta = direction.multiplyScalar(1 - factor);
                this.camera.position.add(zoomDelta);

            } else if ((this.camera as OrthographicCamera).isOrthographicCamera) {
                // For orthographic camera: adjust zoom property
                const orthoCamera = this.camera as OrthographicCamera;
                orthoCamera.zoom = orthoCamera.zoom / factor;
                orthoCamera.updateProjectionMatrix();

            } else {
                console.warn('ModelViewer: Unsupported camera type');
            }

            // Reset the zoom delta
            // Update zoomStart.y to match zoomEnd.y to consume the delta
            this.zoomStart.y = this.zoomEnd.y;
        }
    }*/

    private alignObjectUpVector(): void {
        if (!this.sceneService.geometryView)
            return;
        // Get world positions
        const cameraWorldPosition = new Vector3();
        this.sceneService.mainCamera.getWorldPosition(cameraWorldPosition);

        const objectWorldPosition = new Vector3();
        this.sceneService.geometryView.getWorldPosition(objectWorldPosition);

        // Calculate the axis from object to camera (rotation axis)
        const objectToCamera = new Vector3().subVectors(cameraWorldPosition, objectWorldPosition);
        const distance = objectToCamera.length();

        if (distance < 0.001) return; // Camera too close to object

        objectToCamera.normalize();

        // Get object's current up vector in world space
        const currentObjectUp = this.desiredUp.clone();
        currentObjectUp.applyQuaternion(this.sceneService.geometryView.quaternion);
        currentObjectUp.normalize();

        // Calculate angle between current up and desired up
        const cosTheta = THREE.MathUtils.clamp(currentObjectUp.dot(this.desiredUp), -1, 1);
        const angleBetweenUps = Math.acos(cosTheta);
        if (angleBetweenUps > this.maxAngleToStartAlign) {
            return;
        }

        // Project both up vectors onto the plane perpendicular to objectToCamera
        const projectedCurrentUp = currentObjectUp.clone().sub(
            objectToCamera.clone().multiplyScalar(currentObjectUp.dot(objectToCamera))
        ).normalize();

        const projectedDesiredUp = this.desiredUp.clone().sub(
            objectToCamera.clone().multiplyScalar(this.desiredUp.dot(objectToCamera))
        ).normalize();

        // Check if projections are valid
        if (projectedCurrentUp.length() < 0.001 || projectedDesiredUp.length() < 0.001) {
            return; // Up vectors are parallel to the view axis
        }

        // Calculate the angle between projected up vectors
        const cosAngle = THREE.MathUtils.clamp(projectedCurrentUp.dot(projectedDesiredUp), -1, 1);
        const angle = Math.min(this.maxAlignAngle, Math.acos(cosAngle));

        // Determine rotation direction using cross product
        const cross = new Vector3().crossVectors(projectedCurrentUp, projectedDesiredUp);
        const sign = Math.sign(cross.dot(objectToCamera));

        // Create rotation quaternion around the objectToCamera axis
        const rotationQuaternion = new THREE.Quaternion();
        rotationQuaternion.setFromAxisAngle(objectToCamera, angle * sign);

        // Apply the rotation to the object's orientation
        this.sceneService.geometryView.quaternion.multiplyQuaternions(rotationQuaternion, this.sceneService.geometryView.quaternion);
    }

    private zoomModel(): void {
        if (!this.sceneService.geometryView)
            return;

        const factor = 1.0 + (this.zoomEnd.y - this.zoomStart.y) * this.zoomSpeed;

        if (factor !== 1.0 && factor > 0.0) {
            this.sceneService.geometryView.setScaleExceptCoordinateAxes(1 / factor);

            // Reset the zoom delta
            // Update zoomStart.y to match zoomEnd.y to consume the delta
            this.zoomStart.y = this.zoomEnd.y;
        }
    }

    /**
     * Pan the camera based on mouse movement
     */
    private panModel(): void {
        if (!this.sceneService.geometryView)
            return;

        const deltaX = this.panEnd.x - this.panStart.x;
        const deltaY = this.panEnd.y - this.panStart.y;

        if (deltaX !== 0 || deltaY !== 0) {
            // Get camera world position
            const cameraWorldPosition = new Vector3();
            this.sceneService.mainCamera.getWorldPosition(cameraWorldPosition);

            // Get object world position
            const objectWorldPosition = new Vector3();
            this.sceneService.geometryView.getWorldPosition(objectWorldPosition);

            // Calculate distance for scaling
            const distance = cameraWorldPosition.distanceTo(objectWorldPosition);

            // Get camera right vector (perpendicular to camera direction and up)
            const cameraDirection = new Vector3().subVectors(objectWorldPosition, cameraWorldPosition).normalize();
            const cameraRight = new Vector3().crossVectors(cameraDirection, this.sceneService.mainCamera.up).normalize();
            const cameraUp = this.sceneService.mainCamera.up.clone().normalize();

            // Scale pan movement by distance and panSpeed
            const panScale = distance * this.panSpeed * 0.001;

            // Calculate pan offset
            const panOffset = new Vector3();
            panOffset.add(cameraRight.multiplyScalar(-deltaX * panScale));
            panOffset.add(cameraUp.multiplyScalar(deltaY * panScale));

            // Apply pan to both camera and object
            //this.camera.position.add(panOffset);
            this.sceneService.geometryView.position.add(panOffset.multiplyScalar(-1));
        }

        this.panStart.copy(this.panEnd);
    }
}

