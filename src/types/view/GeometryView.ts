import {Group, Object3D, type Quaternion, type Scene, Vector3} from "three";
import {config} from "../config.ts";
import {Text} from 'troika-three-text';

export class GeometryView {
    private readonly parentGroup: Group;
    private readonly constantGroup: Group;
    public readonly coordinateBegin: Group;
    private startPosition: Vector3;
    private startQuaternion: Quaternion;
    private startScaleFactor: number;
    private scene: Scene;

    constructor(scene: Scene, center: Vector3) {
        this.scene = scene;

        this.parentGroup = new Group();
        this.scene.add(this.parentGroup);
        if (config.debugMode)
            this.parentGroup.name = 'GroupParent';

        this.constantGroup = new Group();
        this.scene.add(this.constantGroup);
        if (config.debugMode)
            this.constantGroup.name = 'ConstantGroup';

        this.coordinateBegin = new Group();
        const coordinateBeginPosition = new Vector3();
        this.coordinateBegin.position.copy(coordinateBeginPosition.clone().sub(center));
        if (config.debugMode)
            this.coordinateBegin.name = "CoordinateBegin";
        this.parentGroup.add(this.coordinateBegin);

        this.startPosition = this.position.clone();
        this.startQuaternion = this.quaternion.clone();
        this.startScaleFactor = 1;
    }

    //private, т.к. масштабирование должно идти через setScaleExceptCoordinateAxes
    private get scale(): Vector3 {
        return this.parentGroup.scale;
    }

    public storeStarting() {
        this.startPosition = this.position.clone();
        this.startQuaternion = this.quaternion.clone();
        this.startScaleFactor = 1;
    }

    get position(): Vector3 {
        return this.parentGroup.position;
    }

    get quaternion(): Quaternion {
        return this.parentGroup.quaternion;
    }

    public setScaleExceptCoordinateAxes(factor: number) {
        this.scale.multiplyScalar(factor);
        this.coordinateBegin.scale.multiplyScalar(1 / factor);
    }

    public restoreStarting() {
        this.position.copy(this.startPosition);
        this.quaternion.copy(this.startQuaternion);
        this.setScaleExceptCoordinateAxes(this.startScaleFactor);
    }

    get parent(): Object3D | null {
        return this.parentGroup.parent;
    }

    add(object: Object3D) {
        this.parentGroup.add(object);
    }

    getWorldPosition(target: Vector3) {
        return this.parentGroup.getWorldPosition(target);
    }

    dispose(doRemoveFromScene: boolean) {
        // Рекурсивно очищаем все дочерние объекты
        this.parentGroup.traverse((object) => {
            if (object !== this.parentGroup && object !== this.coordinateBegin) {
                this.disposeObject(object);
            }
        });

        this.constantGroup.traverse((object) => {
            if (object !== this.constantGroup) {
                this.disposeObject(object);
            }
        });

        // Удаляем все дочерние объекты из coordinateBegin
        const coordinateBeginChildren = [...this.coordinateBegin.children];
        for (const child of coordinateBeginChildren) {
            if (child) {
                this.coordinateBegin.remove(child);
            }
        }

        // Удаляем все дочерние объекты из parentGroup, но НЕ удаляем this.coordinateBegin
        const parentChildren = [...this.parentGroup.children];
        for (const child of parentChildren) {
            if (child && child !== this.coordinateBegin) {
                this.parentGroup.remove(child);
            }
        }

        const constantChildren = [...this.constantGroup.children];
        for (const child of constantChildren) {
            if (child) {
                this.constantGroup.remove(child);
            }
        }

        if (doRemoveFromScene) {
            this.parentGroup.remove(this.coordinateBegin)
            this.scene.remove(this.parentGroup);
            this.scene.remove(this.constantGroup);
        }
    }

    addToConstantGroup(object: Object3D) {
        this.constantGroup.add(object);
    }

    private disposeObject(object: Object3D) {
        if (object instanceof Text) {
            object.dispose();
            return;
        }

        // Очищаем геометрию
        if ('geometry' in object && object.geometry) {
            (object.geometry as any).dispose();
        }

        // Очищаем материалы
        if ('material' in object && object.material) {
            const material = object.material as any;
            if (Array.isArray(material)) {
                material.forEach(m => m.dispose());
            } else {
                material.dispose();
            }
        }
    }
}