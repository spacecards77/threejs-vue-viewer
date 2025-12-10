import {CameraView} from "./CameraView.ts";
import type {IGeometry} from "../../types/model/IGeometry.ts";
import {type OrthographicCamera, type PerspectiveCamera, Vector3} from "three";
import {CameraViewParameters} from "./CameraViewParameters.ts";
import {AssertUtils} from "../../utils/assert/AssertUtils.ts";

export class CameraViewService {
    private readonly mainPerspectiveCamera: PerspectiveCamera;
    private readonly mainOrthographicCamera: OrthographicCamera;
    private readonly staticAxesCamera: OrthographicCamera;
    private readonly cameraViewParameters: Map<CameraView, CameraViewParameters> = new Map<CameraView, CameraViewParameters>([
        [CameraView.Isometric, new CameraViewParameters(new Vector3(1, 1, -1), new Vector3(0, 0, -1))],
        [CameraView.ReverseYDirection, new CameraViewParameters(new Vector3(0, 1, 0), new Vector3(0, 0, -1))],
    ]);


    constructor(mainPerspectiveCamera: PerspectiveCamera, mainOrthographicCamera: OrthographicCamera, staticAxesCamera: OrthographicCamera) {
        this.mainPerspectiveCamera = mainPerspectiveCamera;
        this.mainOrthographicCamera = mainOrthographicCamera;
        this.staticAxesCamera = staticAxesCamera;
    }

    public setCameraView(cameraView: CameraView, geometry: IGeometry): void {
        AssertUtils.isTrue(this.cameraViewParameters.has(cameraView),
            'Camera view parameters not found for camera view: {0}', cameraView);

        const center = geometry.getCenter();
        const size = geometry.getSize();
        const cameraDistance = Math.max(size.x, size.y, size.z) * 1.5;
        const cameraPositionOffset = this.cameraViewParameters.get(cameraView)!.backward.clone().normalize().multiplyScalar(cameraDistance);
        const cameraPosition = center.clone().add(cameraPositionOffset);
        const cameraUp = this.cameraViewParameters.get(cameraView)!.up.clone().normalize();

        this.mainPerspectiveCamera.position.copy(cameraPosition);
        this.mainPerspectiveCamera.up = cameraUp;
        this.mainPerspectiveCamera.lookAt(center);
        this.mainPerspectiveCamera.updateProjectionMatrix();
        this.mainPerspectiveCamera.updateMatrixWorld(true);

        this.mainOrthographicCamera.position.copy(cameraPosition);
        this.mainOrthographicCamera.up = cameraUp;
        this.mainOrthographicCamera.lookAt(center);
        this.mainOrthographicCamera.updateProjectionMatrix();
        this.mainOrthographicCamera.updateMatrixWorld(true);

        const staticAxesPosition = new Vector3();
        this.staticAxesCamera.position.copy(staticAxesPosition.clone().add(cameraPositionOffset));
        this.staticAxesCamera.up = cameraUp;
        this.staticAxesCamera.lookAt(staticAxesPosition);
        this.staticAxesCamera.updateProjectionMatrix();
        this.staticAxesCamera.updateMatrixWorld(true);
    }
}