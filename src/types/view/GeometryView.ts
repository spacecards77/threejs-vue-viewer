import {Group, Object3D, type Quaternion, type Scene, type Vector3} from "three";
import {config} from "../config.ts";

export class GeometryView {
    private readonly parentGroup: Group;
    public readonly CoordinateBegin: Object3D;

    constructor(scene: Scene, center: Vector3) {
        this.parentGroup = new Group();
        scene.add(this.parentGroup);
        if (config.debugMode)
            this.parentGroup.name = 'GroupParent';

        this.CoordinateBegin = new Object3D();
        this.CoordinateBegin.position.copy(center.clone().multiplyScalar(-1));
        this.CoordinateBegin.visible = false;
        if (config.debugMode)
            this.CoordinateBegin.name = "CoordinateBegin";
        this.parentGroup.add(this.CoordinateBegin);
    }

    get position(): Vector3 {
        return this.parentGroup.position;
    }

    get quaternion(): Quaternion {
        return this.parentGroup.quaternion;
    }

    get scale(): Vector3 {
        return this.parentGroup.scale;
    }

    get parent(): Object3D | null {
        return this.parentGroup.parent;
    }

    public clear() {
        this.parentGroup.remove(this.CoordinateBegin);
    }

    add(object: Object3D) {
        this.parentGroup.add(object);
    }

    remove(object: Object3D) {
        this.parentGroup.remove(object);
    }

    getWorldPosition(target: Vector3) {
        return this.parentGroup.getWorldPosition(target);
    }
}