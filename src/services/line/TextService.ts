import {Text} from 'troika-three-text';
import {Line2} from 'three/addons/lines/Line2.js';
import * as THREE from 'three';
import {type Camera, type Group, type Object3D, type Vector3} from 'three';
import type {GeometryView} from "../../types/view/GeometryView.ts";
import {config} from "../../types/config.ts";

export class TextService {
    private textGroups: Group[] = [];
    private parents: Object3D[] = [];

    private varPositionVector: Vector3 = new THREE.Vector3();

    public addTextToLine(geometryView: GeometryView, line: Line2, text: string) {
        // Создаем общую группу для текста и фоновой плашки
        const textGroup = new THREE.Group();

        const textMesh = new Text();
        textMesh.text = text;
        textMesh.fontSize = 1;
        textMesh.color = 0xffffff;
        textMesh.anchorX = 'center';
        textMesh.anchorY = 'middle';

        //textMesh.renderOrder = config.rendering.textRenderOrder;
        textMesh.layers.set(config.rendering.textLayer);

        // Создаем фоновую плашку
        const backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial({
                color: 0x000000,
                //depthTest: false,
            })
        );
        //backgroundMesh.renderOrder = config.rendering.textRenderOrder;
        backgroundMesh.layers.set(config.rendering.textLayer);

        textGroup.add(backgroundMesh);
        textGroup.add(textMesh);

        textMesh.sync(() => {
            // Устанавливаем depthTest на материале после его создания
            /*if (textMesh.material) {
                const material = textMesh.material as Material;
                material.depthTest = false;
            }*/

            // Обновляем размер фоновой плашки в соответствии с размером текста
            const bounds = textMesh.geometry.boundingBox;
            if (bounds) {
                const width = bounds.max.x - bounds.min.x;
                const height = bounds.max.y - bounds.min.y;
                const paddingPrc = 1.2; // Отступы вокруг текста
                backgroundMesh.scale.set(width * paddingPrc, height * paddingPrc, 1);
            }
        });

        // Текст становится дочерним элементом фоновой плашки
        geometryView.addToConstantGroup(textGroup);

        this.textGroups.push(textGroup);
        this.parents.push(line);
    }

    public onCameraChange(camera: Camera) {
        for (const backgroundMesh of this.textGroups) {
            backgroundMesh.quaternion.copy(camera.quaternion);
        }
    }

    public beforeRender() {
        for (let i = 0; i < this.textGroups.length; ++i) {
            const textGroup = this.textGroups[i]!;
            const parent = this.parents[i]!;

            this.updatePosition(textGroup, parent);
        }
    }

    private updatePosition(textGroup: Group, parent: Object3D) {
        textGroup.position.copy(parent.getWorldPosition(this.varPositionVector));
    }
}