import {SceneService} from '../services/SceneService.ts';
import {Construction} from "./model";
import type {DrawService} from "../services/DrawService.ts";
import {config} from './config.ts';
import {AutoLoadJsonService} from '../services/AutoLoadJsonService.ts';
import {LoadJsonFileMenuItem} from "./controls/menu/LoadJsonFileMenuItem.ts";
import {CameraView} from "../services/camera/CameraView.ts";
import type {CameraViewService} from "../services/camera/CameraViewService.ts";

export class Viewer {
    private readonly sceneService: SceneService;
    private readonly drawService: DrawService;
    private readonly cameraViewService: CameraViewService;

    private construction: Construction | null = null;
    private loadJsonFileMenuItem: LoadJsonFileMenuItem;

    constructor(canvasElement: HTMLElement) {
        this.sceneService = new SceneService(canvasElement);
        this.drawService = this.sceneService.drawService;
        this.cameraViewService = this.sceneService.cameraViewService;
        this.loadJsonFileMenuItem = new LoadJsonFileMenuItem(this.handleConstructionLoaded);

        const path = config.debugMode ? config.autoLoadJson?.trim() : '';
        if (path) {
            const auto = new AutoLoadJsonService(this.handleConstructionLoaded);
            void auto.tryAutoload(path);
        }
    }

    public loadJsonFile(file: File): void {
        this.loadJsonFileMenuItem.loadFile(file);
    }

    public setMainCamera(isMainPerspective: boolean): void {
        this.sceneService.setMainCamera(isMainPerspective);
        /*if (this.construction)
            this.processConstruction(this.construction);*/
    }

    public setCameraView(cameraView: CameraView): void {
        if (this.construction) {
            this.cameraViewService.setCameraView(cameraView, this.construction.geometry);
        }
    }

    private handleConstructionLoaded = (construction: Construction): void => {
        if (construction) {
            this.processConstruction(construction);
        } else {
            this.construction = null;
        }
    };

    private processConstruction(construction: Construction) {
        this.construction = construction;

        //должно быть до отрисовки Ui, чтобы привязать статические оси к позиции на экране
        this.cameraViewService.setCameraView(CameraView.ReverseYDirection, this.construction.geometry);

        this.drawService.addConstructionToScene(this.construction);

        this.sceneService.prepareModelViewer(construction.geometry);
    }

    // Очистка при уходе со страницы
    dispose() {
        this.sceneService.dispose();
    }
}
