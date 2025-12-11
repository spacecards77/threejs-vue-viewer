import {CameraView} from "./CameraView.ts";
import type {IGeometry} from "../../types/model/IGeometry.ts";
import {CameraViewParameters} from "./CameraViewParameters.ts";
import {AssertUtils} from "../../utils/assert/AssertUtils.ts";
import type {SceneService} from "../SceneService.ts";
import {type OrthographicCamera, Vector3} from "three";

export class CameraViewService {
    private readonly cameraViewParameters: Map<CameraView, CameraViewParameters> = new Map<CameraView, CameraViewParameters>([
        [CameraView.Isometric, new CameraViewParameters(new Vector3(1, 1, -1), new Vector3(0, 0, -1))],

        [CameraView.XDirection, new CameraViewParameters(new Vector3(-1, 0, 0), new Vector3(0, 0, -1))],
        [CameraView.YDirection, new CameraViewParameters(new Vector3(0, -1, 0), new Vector3(0, 0, -1))],
        [CameraView.ZDirection, new CameraViewParameters(new Vector3(0, 0, -1), new Vector3(0, -1, 0))],

        [CameraView.ReverseXDirection, new CameraViewParameters(new Vector3(1, 0, 0), new Vector3(0, 0, -1))],
        [CameraView.ReverseYDirection, new CameraViewParameters(new Vector3(0, 1, 0), new Vector3(0, 0, -1))],
        [CameraView.ReverseZDirection, new CameraViewParameters(new Vector3(0, 0, 1), new Vector3(0, 1, 0))],
    ]);
    private readonly sceneService: SceneService;


    constructor(sceneService: SceneService) {
        this.sceneService = sceneService;
    }

    public setCameraView(cameraView: CameraView, geometry: IGeometry): void {
        AssertUtils.isTrue(this.cameraViewParameters.has(cameraView),
            'Camera view parameters not found for camera view: {0}', cameraView);

        const center = geometry.getCenter();
        const cameraViewParameter = this.cameraViewParameters.get(cameraView);
        if (!cameraViewParameter) {
            return;
        }

        const maxRadius = geometry.getMaxRadius();
        const requiredDistance = this.calculateRequiredDistance(maxRadius) * 1.1;

        const cameraPositionOffset = cameraViewParameter!.backward.clone().normalize().multiplyScalar(requiredDistance);
        const cameraPosition = center.clone().add(cameraPositionOffset);
        const cameraUp = cameraViewParameter!.up.clone().normalize();

        const mainPerspectiveCamera = this.sceneService.mainPerspectiveCamera;
        mainPerspectiveCamera.position.copy(cameraPosition);
        mainPerspectiveCamera.up = cameraUp;
        mainPerspectiveCamera.lookAt(center);
        mainPerspectiveCamera.updateMatrixWorld(true);
        mainPerspectiveCamera.updateProjectionMatrix();

        const mainOrthographicCamera = this.sceneService.mainOrthographicCamera;
        mainOrthographicCamera.position.copy(cameraPosition);
        mainOrthographicCamera.up = cameraUp;
        mainOrthographicCamera.lookAt(center);
        this.setFrustumSizeForOrthographicCamera(mainOrthographicCamera, maxRadius);
        mainOrthographicCamera.updateMatrixWorld(true);
        mainOrthographicCamera.updateProjectionMatrix();

        const separateAxesCamera = this.sceneService.separateAxesCamera;
        separateAxesCamera.position.copy(cameraPosition.clone().add(cameraPositionOffset.clone().multiplyScalar(5)));
        separateAxesCamera.up = cameraUp;
        separateAxesCamera.lookAt(center);
        this.setFrustumSizeForOrthographicCamera(separateAxesCamera, maxRadius);
        separateAxesCamera.updateMatrixWorld(true);
        separateAxesCamera.updateProjectionMatrix();

        this.sceneService.modelNavigationService.mouseXMoveRotationAxis = cameraViewParameter.up.clone();
        this.sceneService.modelNavigationService.mouseYMoveRotationAxis = cameraViewParameter.backward.clone().cross(cameraViewParameter!.up).normalize();
    }

    private calculateRequiredDistance(maxRadius: number) {
        const mainPerspectiveCamera = this.sceneService.mainPerspectiveCamera;

        const fovRadians = (mainPerspectiveCamera.fov * Math.PI) / 180;

        const distanceForVerticalFOV = maxRadius / Math.tan(fovRadians / 2);
        const distanceForHorizontalFOV = (maxRadius / mainPerspectiveCamera.aspect) / Math.tan(fovRadians / 2);

        return Math.max(distanceForVerticalFOV, distanceForHorizontalFOV);
    }

    private setFrustumSizeForOrthographicCamera(orthographicCamera: OrthographicCamera, radius: number) {
        const aspect = Math.abs(orthographicCamera.left / orthographicCamera.top);
        orthographicCamera.left = -radius * aspect;
        orthographicCamera.right = radius * aspect;
        orthographicCamera.top = radius;
        orthographicCamera.bottom = -radius;
    }
}