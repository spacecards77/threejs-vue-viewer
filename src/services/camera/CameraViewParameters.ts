import type {Vector3} from "three";

export class CameraViewParameters {
    public readonly backward: Vector3;
    public readonly up: Vector3;

    constructor(backward: Vector3, up: Vector3) {
        this.backward = backward;
        this.up = up;
    }
}