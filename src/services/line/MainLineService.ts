import {LineService} from "./LineService.ts";
import {Vector3} from "three";

export class MainLineService extends LineService {
    private length = 1.5;
    private lineWidth = 3;

    public drawCoordinateAxesConnected() {
        const coordinateBegin = this.geometryView.CoordinateBegin;
        const start = new Vector3().sub(coordinateBegin.position);
        this.drawArrow(start, new Vector3(start.x + this.length, start.y, start.z),
            {color: 0xBA0000, linewidth: this.lineWidth, parent: coordinateBegin}); // X - Red
        this.drawArrow(start, new Vector3(start.x, start.y + this.length, start.z),
            {color: 0x00C500, linewidth: this.lineWidth, parent: coordinateBegin}); // Y - Green
        this.drawArrow(start, new Vector3(start.x, start.y, start.z + this.length),
            {color: 0x00FFFF, linewidth: this.lineWidth, parent: coordinateBegin}); // Z - Blue
    }
}