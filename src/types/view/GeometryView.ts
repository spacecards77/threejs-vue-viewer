import {Group, Object3D, type Quaternion, type Scene, Vector3} from "three";
import {config} from "../config.ts";

export class GeometryView {
    private readonly parentGroup: Group;
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

    remove(object: Object3D) {
        this.parentGroup.remove(object);
    }

    getWorldPosition(target: Vector3) {
        return this.parentGroup.getWorldPosition(target);
    }

    dispose(doRemoveFromScene: boolean) {
        // Рекурсивно очищаем все дочерние объекты
        this.parentGroup.traverse((object) => {
            if (object !== this.parentGroup && object !== this.coordinateBegin) {
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
        });

        // Удаляем все дочерние объекты из coordinateBegin
        while (this.coordinateBegin.children.length > 0) {
            const child = this.coordinateBegin.children[0];
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

        if (doRemoveFromScene) {
            this.parentGroup.remove(this.coordinateBegin)
            this.scene.remove(this.parentGroup);
        }
    }

    addToConstantGroup(object: Object3D) {
        this.scene.add(object); //TODO: сделать группу для константных объектов и очистку этой группы
    }
}