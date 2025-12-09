import type {GeometryView} from "../view/GeometryView.ts";
import type {Vector3} from "three";

export interface IGeometry {
    GeometryView: GeometryView | null;

    getCenter(): Vector3;

    getSize(): Vector3;
}

