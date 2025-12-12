import {Text} from 'troika-three-text';
import {Line2} from 'three/addons/lines/Line2.js';
import type {Camera, Material} from 'three';

export class TextService {
    private textMeshes: Text[] = [];

    public addTextToLine(line: Line2, text: string) {
        const textMesh = new Text();
        textMesh.text = text;
        textMesh.fontSize = 0.5;
        textMesh.color = 0xffffff;
        textMesh.anchorX = 'center';
        textMesh.anchorY = 'middle';

        textMesh.renderOrder = 999;

        textMesh.sync(() => {
            // Устанавливаем depthTest на материале после его создания
            if (textMesh.material) {
                const material = textMesh.material as Material;
                material.depthTest = false;
            }
        });

        line.add(textMesh);
        this.textMeshes.push(textMesh);
    }

    public beforeRender(camera: Camera) {
        for (const textMesh of this.textMeshes) {
            // Компенсируем родительское вращение, чтобы текст всегда смотрел в камеру
            if (textMesh.parent) {
                // Получаем мировой quaternion родителя
                const parentWorldQuaternion = textMesh.parent.getWorldQuaternion(textMesh.quaternion.clone());
                // Инвертируем его
                const inverseParentQuaternion = parentWorldQuaternion.invert();
                // Применяем инвертированный quaternion родителя, а затем quaternion камеры
                textMesh.quaternion.copy(inverseParentQuaternion).multiply(camera.quaternion);
            } else {
                // Если нет родителя, просто копируем quaternion камеры
                textMesh.quaternion.copy(camera.quaternion);
            }
        }
    }
}