import {Text} from 'troika-three-text';
import {Line2} from 'three/addons/lines/Line2.js';
import type {Material} from 'three';

export class TextService {
    public addTextToLine(line: Line2, text: string) {
        const textMesh = new Text();
        textMesh.text = text;
        textMesh.fontSize = 0.5;
        textMesh.color = 0xffffff;
        textMesh.anchorX = 'center';
        textMesh.anchorY = 'middle';

        textMesh.renderOrder = 999;

        /*textMesh.onBeforeRender = function(renderer, scene, camera) {
            textMesh.lookAt(camera.position);
        };*/

        textMesh.sync(() => {
            // Устанавливаем depthTest на материале после его создания
            if (textMesh.material) {
                const material = textMesh.material as Material;
                material.depthTest = false;
            }
        });

        line.add(textMesh);
    }
}