import {CameraView} from "./CameraView.ts";
import type {IGeometry} from "../../types/model/IGeometry.ts";
import {type OrthographicCamera, type PerspectiveCamera, Vector3} from "three";

export class CameraViewService {
    private readonly mainPerspectiveCamera: PerspectiveCamera;
    private readonly mainOrthographicCamera: OrthographicCamera;
    private readonly uiCamera: OrthographicCamera;


    constructor(mainPerspectiveCamera: PerspectiveCamera, mainOrthographicCamera: OrthographicCamera, uiCamera: OrthographicCamera) {
        this.mainPerspectiveCamera = mainPerspectiveCamera;
        this.mainOrthographicCamera = mainOrthographicCamera;
        this.uiCamera = uiCamera;
    }

    public setCameraView(cameraView: CameraView, geometry: IGeometry): void {
        if (cameraView != CameraView.ReverseYDirection)
            return;

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

        this.uiCamera.position.copy(this.mainOrthographicCamera.position);
        this.uiCamera.quaternion.copy(this.mainOrthographicCamera.quaternion);
        this.uiCamera.updateProjectionMatrix();
        this.uiCamera.updateMatrixWorld(true);
    }
}