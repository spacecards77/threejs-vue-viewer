import * as THREE from 'three';
import {type Camera, OrthographicCamera, PerspectiveCamera, Vector3} from 'three';
import {DrawService} from "./DrawService.ts";
import type {IGeometry} from "../types/model/IGeometry.ts";
import {ModelViewer} from "../types/controls/ModelViewer.ts";
import {AssertUtils} from "../utils/assert/AssertUtils.ts";
import type {GeometryView} from "../types/view/GeometryView.ts";
import {RenderService} from './RenderService.ts';

export class SceneService {
    public readonly drawService: DrawService;
    readonly mainScene: THREE.Scene;
    mainCamera!: Camera;
    readonly uiScene: THREE.Scene;
    readonly uiCamera: OrthographicCamera;

    private rendererService!: RenderService;
    private frustumSize = 40;

    canvasElement!: HTMLElement | null;
    width: number = 0;
    height: number = 0;
    geometryView: GeometryView | null = null;
    private isMainPerspective: boolean = false;
    private readonly mainOrthographicCamera: OrthographicCamera;
    private readonly mainPerspectiveCamera: PerspectiveCamera;

    constructor(canvasElement: HTMLElement) {
        this.canvasElement = canvasElement;
        this.updateSizeForContainer();

        this.mainScene = this.createMainScene();

        this.mainPerspectiveCamera = this.createPerspectiveCamera();
        this.mainOrthographicCamera = this.createOrthographicCamera();
        this.prepareMainCamera();

        this.uiScene = this.createUiScene();
        this.uiCamera = this.createOrthographicCamera();

        this.drawService = this.createDrawService();

        this.rendererService = new RenderService(this);

        this.setupEventListeners();
    }

    private prepareMainCamera() {
        this.mainCamera = this.isMainPerspective ? this.mainPerspectiveCamera : this.mainOrthographicCamera;
    }

    public prepareModelViewer(geometry: IGeometry) {
        AssertUtils.isNotNull(geometry.GeometryView, 'SceneService: GeometryView is null.');

        this.geometryView = geometry.GeometryView;
        new ModelViewer(this.geometryView!, this.rendererService.domElement, this.mainCamera);
    }

    public setupCameras(geometry: IGeometry) {
        const center = geometry.getCenter();

        this.mainPerspectiveCamera.position.set(center.x, center.y + 50, center.z - 10);
        this.mainPerspectiveCamera.up = new Vector3(0, 0, -1);
        this.mainPerspectiveCamera.lookAt(center);
        this.mainPerspectiveCamera.updateProjectionMatrix();
        this.mainPerspectiveCamera.updateMatrixWorld(true);

        this.mainOrthographicCamera.position.set(center.x, center.y + 50, center.z - 10);
        this.mainOrthographicCamera.up = new Vector3(0, 0, -1);
        this.mainOrthographicCamera.lookAt(center);
        this.mainOrthographicCamera.updateProjectionMatrix();
        this.mainOrthographicCamera.updateMatrixWorld(true);

        this.uiCamera.position.copy(this.mainCamera.position);
        this.uiCamera.quaternion.copy(this.mainCamera.quaternion);
        this.uiCamera.updateProjectionMatrix();
        this.uiCamera.updateMatrixWorld(true);
    }

    private updateSizeForContainer(): void {
        AssertUtils.isNotNull(this.canvasElement, 'SceneService: canvasElement is null.');

        this.width = this.canvasElement?.clientWidth ?? 0;
        this.height = this.canvasElement?.clientHeight ?? 0;
    }

    private createMainScene(): THREE.Scene {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        /*if (config.debugMode) {
            const axesHelper = new THREE.AxesHelper(5);
            scene.add(axesHelper);
        }*/

        return scene;
    }

    private createUiScene(): THREE.Scene {
        return new THREE.Scene();
    }

    private createPerspectiveCamera(): PerspectiveCamera {
        const aspect = this.width / this.height;

        return new PerspectiveCamera(
            45,         // fov
            aspect,     // aspect
            0.1,        // near
            1000        // far
        );
    }

    private createOrthographicCamera(): OrthographicCamera {
        const aspect = this.width / this.height;

        return new OrthographicCamera(
            this.frustumSize * aspect / -2, // left
            this.frustumSize * aspect / 2,  // right
            this.frustumSize / 2,           // top
            this.frustumSize / -2,          // bottom
            0.1,                       // near
            1000                        // far
        );
    }

    /*
      //Поддержка широкоформатных экранов с высоким DPI
      private updateRendererPixelRatioAndSize(): void {
        if (!this.renderer) return;
        // cap devicePixelRatio for performance (2 is a reasonable default cap)
        const capped = Math.min(window.devicePixelRatio || 1, 2);
        this.renderer.setPixelRatio(capped);
        //this.renderer.setSize(this.width, this.height);
    }*/

    private setupEventListeners(): void {
        window.addEventListener('resize', () => {
            this.updateSizeForContainer();

            const aspect = this.width / this.height;
            this.mainOrthographicCamera.left = this.frustumSize * aspect / -2;
            this.mainOrthographicCamera.right = this.frustumSize * aspect / 2;
            this.mainOrthographicCamera.top = this.frustumSize / 2;
            this.mainOrthographicCamera.bottom = this.frustumSize / -2;
            this.mainOrthographicCamera.updateProjectionMatrix();

            this.mainPerspectiveCamera.aspect = aspect;
            this.mainPerspectiveCamera.updateProjectionMatrix();

            this.uiCamera.left = this.frustumSize * aspect / -2;
            this.uiCamera.right = this.frustumSize * aspect / 2;
            this.uiCamera.top = this.frustumSize / 2;
            this.uiCamera.bottom = this.frustumSize / -2;
            this.uiCamera.updateProjectionMatrix();

            this.rendererService.setSize(this.width, this.height);
        });
    }

    createDrawService() {
        return new DrawService(this.mainScene, this.uiScene, () => this.mainCamera, this.uiCamera);
    }

    dispose() {
        this.rendererService.dispose();
    }

    setMainCamera(isMainPerspective: boolean) {
        this.isMainPerspective = isMainPerspective;
        this.prepareMainCamera();
    }
}
