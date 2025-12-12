import {Text} from 'troika-three-text';
import {Line2} from 'three/addons/lines/Line2.js';
import * as THREE from 'three';
import {type Camera, type Material, type Mesh, type Object3D, type Vector3} from 'three';
import type {GeometryView} from "../../types/view/GeometryView.ts";

export class TextService {
    private backgroundPlanes: Mesh[] = [];
    private parents: Object3D[] = [];

    private varPositionVector: Vector3 = new THREE.Vector3();

    public addTextToLine(geometryView: GeometryView, line: Line2, text: string) {
        const textMesh = new Text();
        textMesh.text = text;
        textMesh.fontSize = 1;
        textMesh.color = 0xffffff;
        textMesh.anchorX = 'center';
        textMesh.anchorY = 'middle';

        textMesh.renderOrder = 999;

        // Создаем фоновую плашку
        const backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial({
                color: 0x000000,
                depthTest: false,
                opacity: 0
            })
        );
        backgroundMesh.position.copy(line.getWorldPosition(this.varPositionVector));
        backgroundMesh.renderOrder = 998; // Рисуем фон перед текстом

        textMesh.sync(() => {
            // Устанавливаем depthTest на материале после его создания
            if (textMesh.material) {
                const material = textMesh.material as Material;
                material.depthTest = false;
            }

            // Обновляем размер фоновой плашки в соответствии с размером текста
            const bounds = textMesh.geometry.boundingBox;
            if (bounds) {
                const width = bounds.max.x - bounds.min.x;
                const height = bounds.max.y - bounds.min.y;
                const padding = 0.1; // Добавляем небольшой отступ
                backgroundMesh.scale.set(width + padding, height + padding, 1);
            }
        });

        // Текст становится дочерним элементом фоновой плашки
        backgroundMesh.add(textMesh);
        geometryView.addToConstantGroup(backgroundMesh);

        this.backgroundPlanes.push(backgroundMesh);
        this.parents.push(line);
    }

    public onCameraChange(camera: Camera) {
        for (const backgroundMesh of this.backgroundPlanes) {
            backgroundMesh.quaternion.copy(camera.quaternion);
        }
    }

    public beforeRender(camera: Camera) {
        for (let i = 0; i < this.backgroundPlanes.length; ++i) {
            const backgroundMesh = this.backgroundPlanes[i]!;
            const parent = this.parents[i]!;

            this.updatePosition(backgroundMesh, parent);
        }
    }

    private updatePosition(backgroundMesh: Mesh, parent: Object3D) {
        backgroundMesh.position.copy(parent.getWorldPosition(this.varPositionVector));
    }
}