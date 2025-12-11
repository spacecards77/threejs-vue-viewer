import {CameraView} from "./CameraView.ts";
import type {IGeometry} from "../../types/model/IGeometry.ts";
import {type OrthographicCamera, type PerspectiveCamera, Vector3} from "three";
import {CameraViewParameters} from "./CameraViewParameters.ts";
import {AssertUtils} from "../../utils/assert/AssertUtils.ts";

export class CameraViewService {
    private readonly mainPerspectiveCamera: PerspectiveCamera;
    private readonly mainOrthographicCamera: OrthographicCamera;
    private readonly separateAxesCamera: OrthographicCamera;
    private readonly cameraViewParameters: Map<CameraView, CameraViewParameters> = new Map<CameraView, CameraViewParameters>([
        [CameraView.Isometric, new CameraViewParameters(new Vector3(1, 1, -1), new Vector3(0, 0, -1))],

        [CameraView.XDirection, new CameraViewParameters(new Vector3(-1, 0, 0), new Vector3(0, 0, 1))],
        [CameraView.YDirection, new CameraViewParameters(new Vector3(0, -1, 0), new Vector3(0, 0, -1))],
        [CameraView.ZDirection, new CameraViewParameters(new Vector3(0, 0, -1), new Vector3(-1, 0, 0))],

        [CameraView.ReverseXDirection, new CameraViewParameters(new Vector3(1, 0, 0), new Vector3(0, 0, -1))],
        [CameraView.ReverseYDirection, new CameraViewParameters(new Vector3(0, 1, 0), new Vector3(0, 0, -1))],
        [CameraView.ReverseZDirection, new CameraViewParameters(new Vector3(0, 0, 1), new Vector3(1, 0, 0))],
    ]);


    constructor(mainPerspectiveCamera: PerspectiveCamera, mainOrthographicCamera: OrthographicCamera, separateAxesCamera: OrthographicCamera) {
        this.mainPerspectiveCamera = mainPerspectiveCamera;
        this.mainOrthographicCamera = mainOrthographicCamera;
        this.separateAxesCamera = separateAxesCamera;
    }

    public setCameraView(cameraView: CameraView, geometry: IGeometry): void {
        AssertUtils.isTrue(this.cameraViewParameters.has(cameraView),
            'Camera view parameters not found for camera view: {0}', cameraView);

        const center = geometry.getCenter();
        const cameraViewParameter = this.cameraViewParameters.get(cameraView);
        const maxRadius = geometry.getMaxRadius();
        const requiredDistance = this.calculateRequiredDistance(maxRadius) * 1.1;

        const cameraPositionOffset = cameraViewParameter!.backward.clone().normalize().multiplyScalar(requiredDistance);
        const cameraPosition = center.clone().add(cameraPositionOffset);
        const cameraUp = cameraViewParameter!.up.clone().normalize();

        this.mainPerspectiveCamera.position.copy(cameraPosition);
        this.mainPerspectiveCamera.up = cameraUp;
        this.mainPerspectiveCamera.lookAt(center);
        this.mainPerspectiveCamera.updateMatrixWorld(true);
        this.mainPerspectiveCamera.updateProjectionMatrix();

        this.mainOrthographicCamera.position.copy(cameraPosition);
        this.mainOrthographicCamera.up = cameraUp;
        this.mainOrthographicCamera.lookAt(center);
        this.setFrustumSizeForOrthographicCamera(this.mainOrthographicCamera, maxRadius);
        this.mainOrthographicCamera.updateMatrixWorld(true);
        this.mainOrthographicCamera.updateProjectionMatrix();

        this.separateAxesCamera.position.copy(cameraPosition.clone().add(cameraPositionOffset.clone().multiplyScalar(5)));
        this.separateAxesCamera.up = cameraUp;
        this.separateAxesCamera.lookAt(center);
        this.setFrustumSizeForOrthographicCamera(this.separateAxesCamera, maxRadius);
        this.separateAxesCamera.updateMatrixWorld(true);
        this.separateAxesCamera.updateProjectionMatrix();
    }

    private calculateRequiredDistance(maxRadius: number) {
        const fovRadians = (this.mainPerspectiveCamera.fov * Math.PI) / 180;

        const distanceForVerticalFOV = maxRadius / Math.tan(fovRadians / 2);
        const distanceForHorizontalFOV = (maxRadius / this.mainPerspectiveCamera.aspect) / Math.tan(fovRadians / 2);

        return Math.max(distanceForVerticalFOV, distanceForHorizontalFOV);
    }

    private setFrustumSizeForOrthographicCamera(orthographicCamera: OrthographicCamera, radius: number) {
        const k = radius / orthographicCamera.top;
        orthographicCamera.left *= k;
        orthographicCamera.right *= k;
        orthographicCamera.top *= k;
        orthographicCamera.bottom *= k;
    }
}