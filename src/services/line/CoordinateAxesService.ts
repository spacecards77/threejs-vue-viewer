import {LineService} from "./LineService.ts";
import {Camera, Group, type Quaternion, Scene, Vector3} from "three";

export class CoordinateAxesService extends LineService {
    private readonly uiCamera: Camera;
    private readonly getMainCamera: () => Camera;
    get mainCamera(): Camera {
        return this.getMainCamera();
    }

    length = 1.5;
    lineWidth = 3;


    constructor(scene: Scene, center: Vector3, getMainCamera:() => Camera, uiCamera: Camera) {
        super(scene, center);

        this.getMainCamera = getMainCamera;
        this.uiCamera = uiCamera;
    }

    public drawCoordinateAxesConnected(centerPosition: Vector3, coordinateBegin: Group) {

        this.geometryView.position.copy(centerPosition);

        const start = new Vector3().add(centerPosition);
        //coordinateBegin.getWorldPosition(start);
        this.drawArrow(start, new Vector3(start.x + this.length, start.y, start.z),
            {color: 0xBA0000, linewidth: this.lineWidth, parent: coordinateBegin}); // X - Red
        this.drawArrow(start, new Vector3(start.x, start.y + this.length, start.z),
            {color: 0x00C500, linewidth: this.lineWidth, parent: coordinateBegin}); // Y - Green
        this.drawArrow(start, new Vector3(start.x, start.y, start.z + this.length),
            {color: 0x00FFFF, linewidth: this.lineWidth, parent: coordinateBegin}); // Z - Blue
    }

    public drawCoordinateAxesStatic(axesPosition: Vector3) {
        const coordinateBegin = new Group();
        const centerPosition = axesPosition.unproject(this.uiCamera);
        this.drawCoordinateAxesConnected(centerPosition, coordinateBegin);
    }

    updateCoordinateAxes(parentQuaternion: Quaternion, coordinateBeginPosition: Vector3) {
        this.geometryView.quaternion.copy(parentQuaternion);

        if (coordinateBeginPosition) {
            const position = coordinateBeginPosition.clone();
            position.project(this.mainCamera);
            position.unproject(this.uiCamera);
            this.geometryView.position.copy(position);
        }
    }
}