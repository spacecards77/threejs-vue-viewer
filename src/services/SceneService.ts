import * as THREE from 'three';
import {type Camera, OrthographicCamera, PerspectiveCamera} from 'three';
import {DrawService} from "./DrawService.ts";
import {ModelNavigationService} from "../types/controls/ModelNavigationService.ts";
import {AssertUtils} from "../utils/assert/AssertUtils.ts";
import type {GeometryView} from "../types/view/GeometryView.ts";
import {RenderService} from './RenderService.ts';
import {CameraViewService} from "./camera/CameraViewService.ts";
import {config} from "../types/config.ts";

export class SceneService {
    public readonly drawService: DrawService;
    public readonly cameraViewService: CameraViewService;
    public readonly modelNavigationService: ModelNavigationService;

    public readonly mainScene: THREE.Scene;
    mainCamera!: Camera;
    public readonly staticAxesCamera: OrthographicCamera;

    rendererService!: RenderService;
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
        this.mainOrthographicCamera = this.createOrthographicCamera(this.frustumSize);
        this.prepareMainCamera();

        this.staticAxesCamera = this.createOrthographicCamera(this.frustumSize);
        this.staticAxesCamera.layers.set(config.coordinateAxes.connectedAxesLayer);

        this.drawService = new DrawService(this);
        this.cameraViewService = new CameraViewService(this.mainPerspectiveCamera, this.mainOrthographicCamera, this.staticAxesCamera);

        this.rendererService = new RenderService(this);
        this.modelNavigationService = new ModelNavigationService(this);

        this.setupEventListeners();
    }

    private prepareMainCamera() {
        this.mainCamera = this.isMainPerspective ? this.mainPerspectiveCamera : this.mainOrthographicCamera;
    }

    public setGeometryView(geometryView: GeometryView) {
        this.geometryView = geometryView;
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
    private createPerspectiveCamera(): PerspectiveCamera {
        const aspect = this.width / this.height;

        return new PerspectiveCamera(
            45,         // fov
            aspect,     // aspect
            0.1,        // near
            1000        // far
        );
    }

    private createOrthographicCamera(frustumSize: number, nonStandardAspect?: number): OrthographicCamera {
        const aspect = nonStandardAspect ?? this.width / this.height;

        return new OrthographicCamera(
            frustumSize * aspect / -2, // left
            frustumSize * aspect / 2,  // right
            frustumSize / 2,           // top
            frustumSize / -2,          // bottom
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

            this.staticAxesCamera.left = this.frustumSize * aspect / -2;
            this.staticAxesCamera.right = this.frustumSize * aspect / 2;
            this.staticAxesCamera.top = this.frustumSize / 2;
            this.staticAxesCamera.bottom = this.frustumSize / -2;
            this.staticAxesCamera.updateProjectionMatrix();

            this.rendererService.setSize(this.width, this.height);
        });
    }

    dispose() {
        this.modelNavigationService.dispose();
        this.rendererService.dispose();
    }

    setMainCamera(isMainPerspective: boolean) {
        this.isMainPerspective = isMainPerspective;
        this.prepareMainCamera();
    }
}
