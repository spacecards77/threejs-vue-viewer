import {Group, Object3D, type Quaternion, type Scene, type Vector3} from "three";
import {config} from "../config.ts";

export class GeometryView {
    private readonly parentGroup: Group;
    public readonly CoordinateBegin: Object3D;
    private readonly startPosition: Vector3;
    private readonly startQuaternion: Quaternion;
    private readonly startScale: Vector3;

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

        this.startPosition = this.position.clone();
        this.startQuaternion = this.quaternion.clone();
        this.startScale = this.scale.clone();
    }

    public restoreStarting() {
        this.position.copy(this.startPosition);
        this.quaternion.copy(this.startQuaternion);
        this.scale.copy(this.startScale);
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