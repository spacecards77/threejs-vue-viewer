import type {Vector3} from "three";

export interface IGeometry {
    getCenter(): Vector3;

    getBox(): Vector3;

    getMaxRadius(): number;
}
