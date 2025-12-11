import * as THREE from "three";
import {Vector3} from "three";
import type {SceneService} from "./SceneService.ts";
import {AssertUtils} from "../utils/assert/AssertUtils.ts";
import {config} from "../types/config.ts";

export class RenderService {
    private renderer!: THREE.WebGLRenderer;
    private sceneService: SceneService;
    private animationId: number = 0;
    private coordinateAxesPosition: Vector3 = new Vector3();
    private screenPos: Vector3 = new Vector3();

    constructor(sceneService: SceneService
    ) {
        this.sceneService = sceneService;

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(this.sceneService.width, this.sceneService.height);

        AssertUtils.isNotNull(this.sceneService.canvasElement, 'RendererService: canvasContainer is null.');
        this.sceneService.canvasElement?.appendChild(this.renderer.domElement);

        this.prepareAndStartRender();
    }

    public get domElement(): HTMLCanvasElement {
        return this.renderer.domElement;
    }

    public setSize(width: number, height: number): void {
        this.renderer.setSize(width, height);
    }

    private prepareAndStartRender(): void {
        this.renderer.autoClear = false;
        //this.renderer.setScissorTest(true);

        const animate = () => {
            this.animationId = requestAnimationFrame(animate);

            this.renderer.clear();

            this.renderMain();

            this.renderer.clearDepth();

            this.renderStaticAxes();
        };

        animate();
    }

    private renderMain() {
        this.renderer.setViewport(0, 0, this.sceneService.width, this.sceneService.height);
        this.renderer.setScissorTest(false);

        this.sceneService.mainCamera.layers.set(0);

        this.renderer.render(this.sceneService.mainScene, this.sceneService.mainCamera);
    }

    private renderStaticAxes() {
        this.setStaticAxesCameraViewOffset();

        const widgetMargin = config.coordinateAxes.widgetMargin;
        const widgetSize = config.coordinateAxes.widgetSize;
        this.renderer.setViewport(widgetMargin, widgetMargin, widgetSize, widgetSize);
        this.renderer.setScissor(widgetMargin, widgetMargin, widgetSize, widgetSize);
        this.renderer.setScissorTest(true);

        this.sceneService.staticAxesCamera.layers.set(config.coordinateAxes.connectedAxesLayer);

        this.renderer.render(this.sceneService.mainScene, this.sceneService.staticAxesCamera);
    }

    private setStaticAxesCameraViewOffset() {
        this.sceneService.geometryView.CoordinateBegin.getWorldPosition(this.coordinateAxesPosition);
        this.sceneService.staticAxesCamera.clearViewOffset();
        this.screenPos.copy(this.coordinateAxesPosition).project(this.sceneService.staticAxesCamera);
        // Переводим из NDC (-1..+1) в пиксельные координаты экрана (0..width)
        const x = (this.screenPos.x * 0.5 + 0.5) * this.sceneService.width;
        const y = (-(this.screenPos.y * 0.5) + 0.5) * this.sceneService.height; // Y инвертирован в WebGL относительно CSS

        // Вычисляем смещение для setViewOffset

        const viewX = x - config.coordinateAxes.widgetSize / 2;
        const viewY = y - config.coordinateAxes.widgetSize / 2;

        this.sceneService.staticAxesCamera.setViewOffset(this.sceneService.width, this.sceneService.height,
            viewX, viewY, config.coordinateAxes.widgetSize, config.coordinateAxes.widgetSize);
    }

    dispose() {
        cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
    }
}
