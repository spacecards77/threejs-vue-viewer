import {Group, Object3D, type Quaternion, type Scene, Vector3} from "three";
import {config} from "../config.ts";

export class GeometryView {
    private readonly parentGroup: Group;
    public readonly CoordinateBegin: Group;
    private startPosition: Vector3;
    private startQuaternion: Quaternion;
    private startScale: Vector3;
    private scene: Scene;

    constructor(scene: Scene, center: Vector3) {
        this.scene = scene;
        this.parentGroup = new Group();
        this.scene.add(this.parentGroup);
        if (config.debugMode)
            this.parentGroup.name = 'GroupParent';

        this.CoordinateBegin = new Group();
        const coordinateBeginPosition = new Vector3();
        this.CoordinateBegin.position.copy(coordinateBeginPosition.clone().sub(center));
        if (config.debugMode)
            this.CoordinateBegin.name = "CoordinateBegin";
        this.parentGroup.add(this.CoordinateBegin);

        this.startPosition = this.position.clone();
        this.startQuaternion = this.quaternion.clone();
        this.startScale = this.scale.clone();
    }

    public storeStarting() {
        this.startPosition = this.position.clone();
        this.startQuaternion = this.quaternion.clone();
        this.startScale = this.scale.clone();
    }

    public restoreStarting() {
        this.position.copy(this.startPosition);
        this.quaternion.copy(this.startQuaternion);
        this.scale.copy(this.startScale);
    }

    get position(): Vector3 {
        return this.parentGroup.position;
    }

    get quaternion(): Quaternion {
        return this.parentGroup.quaternion;
    }

    public setScaleExceptCoordinateAxes(factor: number) {
        this.scale.multiplyScalar(factor);
        this.CoordinateBegin.scale.multiplyScalar(1 / factor);
    }

    get scale(): Vector3 {
        return this.parentGroup.scale;
    }

    get parent(): Object3D | null {
        return this.parentGroup.parent;
    }

    add(object: Object3D) {
        this.parentGroup.add(object);
    }

    remove(object: Object3D) {
        this.parentGroup.remove(object);
    }

    getWorldPosition(target: Vector3) {
        return this.parentGroup.getWorldPosition(target);
    }

    dispose() {
        // Рекурсивно очищаем все дочерние объекты
        this.parentGroup.traverse((object) => {
            if (object !== this.parentGroup && object !== this.CoordinateBegin) {
                // Очищаем геометрию
                if ('geometry' in object && object.geometry) {
                    (object.geometry as any).dispose();
                }

                // Очищаем материалы
                if ('material' in object && object.material) {
                    const material = object.material as any;
                    if (Array.isArray(material)) {
                        material.forEach(m => m.dispose());
                    } else {
                        material.dispose();
                    }
                }
            }
        });

        this.scene.remove(this.parentGroup);
    }
}