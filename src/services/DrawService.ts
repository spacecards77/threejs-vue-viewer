import * as THREE from 'three';
import {Construction, Geometry} from '../types/model';
import {config} from "../types/config.ts";
import type {SceneService} from "./SceneService.ts";
import {MainLineService} from "./line/MainLineService.ts";
import {GeometryView} from "../types/view/GeometryView.ts";
import {TextService} from "./line/TextService.ts";

export class DrawService {
    private readonly sceneService: SceneService;
    private readonly mainLineService: MainLineService;
    private readonly textService: TextService;

    constructor(sceneService: SceneService) {
        this.sceneService = sceneService;
        this.mainLineService = new MainLineService();
        this.textService = new TextService();
    }

    //ARCHITECTURE: Разделить на DrawGeometry и DrawUi
    addConstructionToScene(construction: Construction): GeometryView {
        const geometryView = this.addGeometryToScene(construction.geometry);

        this.addUiToScene(construction.geometry, geometryView);

        return geometryView;
    }

    private addGeometryToScene(geometry: Geometry) {
        const center = geometry.getCenter();

        const geometryView = new GeometryView(this.sceneService.mainScene, center);
        geometryView.position.copy(center);
        this.drawMembers(geometry, geometryView);
        this.drawNodes(geometry, geometryView);

        if (config.debugMode)
            console.log(`Model displayed: ${geometry.members.length} members drawn`);

        geometryView.storeStarting();

        return geometryView;
    }

    private drawMembers(geometry: Geometry, geometryView: GeometryView) {
        for (const member of geometry.members) {
            const n1 = geometry.idToNode.get(member.node1Id);
            const n2 = geometry.idToNode.get(member.node2Id);
            if (!n1 || !n2) {
                if (!n1) console.warn(`Invalid Node1Id for member ${member.id}: Node1Id=${member.node1Id}`);
                if (!n2) console.warn(`Invalid Node2Id for member ${member.id}: Node2Id=${member.node2Id}`);
                continue;
            }
            const p1 = new THREE.Vector3(n1.x, n1.y, n1.z);
            const p2 = new THREE.Vector3(n2.x, n2.y, n2.z);
            const line = this.mainLineService.drawLine(geometryView, p1, p2, {color: 0x99CCCC});
            this.textService.addTextToLine(line, member.id.toString());
        }
    }

    private drawNodes(geometry: Geometry, geometryView: GeometryView) {
        for (const node of geometry.nodes) {
            const position = new THREE.Vector3(node.x, node.y, node.z);
            this.mainLineService.drawSquare(geometryView, position, {color: 0xFF0000, size: 3});
        }
    }

    private addUiToScene(geometry: Geometry, geometryView: GeometryView) {
        const maxRadius = geometry.getMaxRadius();
        this.mainLineService.drawCoordinateAxes(geometryView, maxRadius / config.standardMaxRadius);
        geometryView.coordinateBegin.traverse(
            child => child.layers.enable(config.coordinateAxes.connectedAxesLayer));
    }

    beforeRender() {
        this.textService.beforeRender(this.sceneService.mainCamera);
    }
}

