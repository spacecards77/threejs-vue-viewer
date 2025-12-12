import {Text} from 'troika-three-text';
import {Line2} from 'three/addons/lines/Line2.js';
import type {Camera, Material} from 'three';
import * as THREE from 'three';

export class TextService {
    private backgroundPlanes: THREE.Mesh[] = [];

    public addTextToLine(line: Line2, text: string) {
        const textMesh = new Text();
        textMesh.text = text;
        textMesh.fontSize = 0.5;
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
        line.add(backgroundMesh);
        this.backgroundPlanes.push(backgroundMesh);
    }

    public beforeRender(camera: Camera) {
        for (const backgroundMesh of this.backgroundPlanes) {
            // Компенсируем родительское вращение, чтобы фон всегда смотрел в камеру
            if (backgroundMesh.parent) {
                // Получаем мировой quaternion родителя
                const parentWorldQuaternion = backgroundMesh.parent.getWorldQuaternion(backgroundMesh.quaternion.clone());
                // Инвертируем его
                const inverseParentQuaternion = parentWorldQuaternion.invert();
                // Применяем инвертированный quaternion родителя, а затем quaternion камеры
                backgroundMesh.quaternion.copy(inverseParentQuaternion).multiply(camera.quaternion);
            } else {
                // Если нет родителя, просто копируем quaternion камеры
                backgroundMesh.quaternion.copy(camera.quaternion);
            }

            // Текст будет вращаться вместе с фоном, так как является дочерним элементом
        }
    }
}