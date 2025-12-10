import * as THREE from "three";
import {Vector3} from "three";
import type {SceneService} from "./SceneService.ts";
import {AssertUtils} from "../utils/assert/AssertUtils.ts";
import {config} from "../types/config.ts";

export class RenderService {
    private renderer!: THREE.WebGLRenderer;
    private sceneService: SceneService;
    private animationId: number = 0;
    private coordinateBeginGlobalPosition: Vector3 = new Vector3();

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
        this.renderer.setScissorTest(true);

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
        this.renderer.setScissor(0, 0, this.sceneService.width, this.sceneService.height);
        this.renderer.render(this.sceneService.mainScene, this.sceneService.mainCamera);
    }

    private renderStaticAxes() {
        const geometryView = this.sceneService.geometryView;
        if (geometryView) {
            const widgetMargin = config.coordinateAxes.widgetMargin;
            const widgetSize = config.coordinateAxes.widgetSize;
            geometryView.CoordinateBegin.getWorldPosition(this.coordinateBeginGlobalPosition)
            this.sceneService.staticAxesCamera.lookAt(this.coordinateBeginGlobalPosition);

            this.renderer.setViewport(widgetMargin, widgetMargin, widgetSize, widgetSize);
            this.renderer.setScissor(widgetMargin, widgetMargin, widgetSize, widgetSize);
            this.renderer.render(this.sceneService.mainScene, this.sceneService.staticAxesCamera);
        }
    }

    dispose() {
        cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
    }
}
