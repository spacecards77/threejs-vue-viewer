import * as THREE from 'three';
import {Color, type Object3D, Vector3} from 'three';
import {Line2} from 'three/addons/lines/Line2.js';
import {LineMaterial} from "three/addons/lines/LineMaterial.js";
import {LineGeometry} from "three/addons/lines/LineGeometry.js";
import {config} from "../../types/config.ts";
import {GeometryView} from "../../types/view/GeometryView.ts";

export class LineService {
    private coneRadius: number = 0.15;
    private coneHeight: number = 0.5;

    public drawNode(geometryView: GeometryView, position: Vector3,
                    options: { color?: THREE.Color | number, size: number }
    ) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute([
                position.x - geometryView.position.x,
                position.y - geometryView.position.y,
                position.z - geometryView.position.z],
            3));

        const material = new THREE.PointsMaterial({
            color: options.color || 0xff0000,
            size: options.size,
            sizeAttenuation: false, // ВАЖНО: false отключает уменьшение от дистанции
            // --- ВАЖНЫЕ НАСТРОЙКИ ДЛЯ ОТРИСОВКИ ПОВЕРХ ВСЕГО ---
            depthTest: false,   // Отключаем проверку глубины (рисуем сквозь стены)
            depthWrite: false,  // Не записываем этот объект в буфер глубины (хорошая практика для UI)
        });

        const dot = new THREE.Points(geometry, material);

        // чтобы объект рисовался после всех остальных объектов сцены
        dot.renderOrder = config.rendering.nodeRenderOrder;

        // Если не отключить frustumCulled, объект может исчезнуть,
        // когда его "настоящий" центр выйдет за пределы камеры,
        // хотя сам квадрат все еще должен быть виден.
        dot.frustumCulled = false;

        geometryView.add(dot);
    }

    public drawLine(geometryView: GeometryView, start: Vector3, end: Vector3,
                    options?: {
                        color?: THREE.Color | number,
                        linewidth?: number,
                        parent?: Object3D
                    }
    ): Line2 {
        //OPTIMIZE: Reuse materials and geometries where possible
        const material = new LineMaterial({
            linewidth: options?.linewidth || 2,
            vertexColors: true,
        });

        // Calculate the midpoint in world coordinates
        const lineCenter = new Vector3().addVectors(start, end).multiplyScalar(0.5);

        // Position the line at the midpoint (relative to geometryView)
        const lineCenterRelative = lineCenter.clone().sub(geometryView.position);

        // Make geometry points relative to the line's position (which is at the midpoint)
        const p1 = start.clone().sub(lineCenter);
        const p2 = end.clone().sub(lineCenter);

        const geometry = new LineGeometry().setFromPoints([p1, p2]);
        // LineGeometry.setColors expects an array of RGB float values per vertex
        // (r, g, b) for each vertex. For two vertices we must supply 6 floats.
        const col = new Color(options?.color ?? 0x0000ff);
        geometry.setColors([col.r, col.g, col.b, col.r, col.g, col.b]);
        const line = new Line2(geometry, material);

        // Set the line's position to the midpoint
        line.position.copy(lineCenterRelative);

        if (config.debugMode)
            line.name = 'Line' + '(' + lineCenter.x.toFixed(2) + ','
                + lineCenter.y.toFixed(2)
                + ',' + lineCenter.z.toFixed(2) + ')';

        if (options?.parent) {
            options.parent.add(line);
        } else {
            geometryView.add(line);
        }

        return line;
    }

    drawArrow(geometryView: GeometryView, start: Vector3, end: Vector3,
              options?: {
                  color?: THREE.Color | number,
                  linewidth?: number,
                  parent?: Object3D,
                  kSizeFactor?: number
              }
    ) {
        // Calculate total length and direction
        const direction = new Vector3().subVectors(end, start);
        //const totalLength = direction.length();
        direction.normalize();

        // Calculate the new end point for the line (shortened by cone height)
        //const lineEnd = start.clone().add(direction.clone().multiplyScalar(totalLength - this.coneHeight));
        // Draw the line from start to lineEnd
        this.drawLine(geometryView, start, end, options);

        const kSizeFactor = options?.kSizeFactor ?? 1;
        const coneRadius = this.coneRadius * kSizeFactor;
        const coneHeight = this.coneHeight * kSizeFactor;
        const coneGeometry = new THREE.ConeGeometry(coneRadius, coneHeight, 16);
        const col = new Color(options?.color ?? 0x0000ff);
        const coneMaterial = new THREE.MeshBasicMaterial({color: col});
        const cone = new THREE.Mesh(coneGeometry, coneMaterial);

        // Position the cone at the end point
        // Cone's default orientation is pointing up (Y+), so we need to align it with direction
        const conePosition = end.clone().sub(geometryView.position);
        cone.position.copy(conePosition);

        // Align cone with the direction vector
        // Create a quaternion to rotate from default up (0,1,0) to our direction
        const up = new Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction);
        cone.setRotationFromQuaternion(quaternion);

        if (config.debugMode)
            cone.name = 'ArrowCone' + '(' + end.x.toFixed(2) + ','
                + end.y.toFixed(2)
                + ',' + end.z.toFixed(2) + ')';

        if (options?.parent) {
            options.parent.add(cone);
        } else {
            geometryView.add(cone);
        }
    }

    public drawCoordinateAxes(geometryView: GeometryView, kSizeFactor: number) {
        const start = new Vector3().sub(geometryView.coordinateBegin.position);
        const coordinateBegin = geometryView.coordinateBegin;
        let linewidth = config.coordinateAxes.lineWidth;
        let length = config.coordinateAxes.length * kSizeFactor;
        this.drawArrow(geometryView, start, new Vector3(start.x + length, start.y, start.z),
            {color: 0xBA0000, linewidth: linewidth, parent: coordinateBegin, kSizeFactor: kSizeFactor}); // X - Red
        this.drawArrow(geometryView, start, new Vector3(start.x, start.y + length, start.z),
            {color: 0x00C500, linewidth: linewidth, parent: coordinateBegin, kSizeFactor: kSizeFactor}); // Y - Green
        this.drawArrow(geometryView, start, new Vector3(start.x, start.y, start.z + length),
            {color: 0x00FFFF, linewidth: linewidth, parent: coordinateBegin, kSizeFactor: kSizeFactor}); // Z - Blue
    }
}
