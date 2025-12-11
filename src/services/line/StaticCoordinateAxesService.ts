import {LineService} from "./LineService.ts";
import {type Quaternion} from "three";

export class StaticCoordinateAxesService extends LineService {
    updateCoordinateAxes(coordinateBeginGlobalQuaternion: Quaternion) {
        this.geometryView.coordinateBegin.quaternion.copy(coordinateBeginGlobalQuaternion);
    }
}