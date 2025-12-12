import {Member} from './Member';
import {Node} from './Node';
import type {IGeometry} from './IGeometry';
import {Vector3} from "three";

export interface GeometryJSON {
    //ARCHITECTURE: use exact type
    Members: any[];
    Nodes: any[];
}

export class Geometry implements IGeometry {
    public readonly idToNode: Map<number, Node>;
    public readonly members: Member[];
    public readonly nodes: Node[];
    private readonly center: Vector3;
    private readonly box: Vector3;
    private readonly maxRadius: number;

    constructor(members: Member[], nodes: Node[]) {
        this.members = members;
        this.nodes = nodes;
        this.idToNode = new Map<number, Node>(nodes.map(n => [n.id, n]));

        const params = Geometry.computeParameters(nodes);
        this.center = params.center;
        this.box = params.box;
        this.maxRadius = params.maxRadius;
    }

    static fromJSON(json: GeometryJSON): Geometry {
        const nodes = (json.Nodes || []).map(n => Node.fromJSON(n));
        const members = (json.Members || []).map(m => Member.fromJSON(m));
        return new Geometry(members, nodes);
    }

    public getCenter(): Vector3 {
        return this.center;
    }

    // compute parameters from nodes; kept static so assignments occur in constructor
    private static computeParameters(nodes: Node[]): { center: Vector3; box: Vector3; maxRadius: number } {
        if (!nodes || nodes.length === 0) {
            const zero = new Vector3(0, 0, 0);
            return {center: zero, box: zero, maxRadius: 0};
        }

        const minX = Math.min(...nodes.map(n => n.x));
        const maxX = Math.max(...nodes.map(n => n.x));
        const minY = Math.min(...nodes.map(n => n.y));
        const maxY = Math.max(...nodes.map(n => n.y));
        const minZ = Math.min(...nodes.map(n => n.z));
        const maxZ = Math.max(...nodes.map(n => n.z));

        const center = new Vector3(
            (minX + maxX) / 2,
            (minY + maxY) / 2,
            (minZ + maxZ) / 2,
        );

        const box = new Vector3(
            maxX - minX,
            maxY - minY,
            maxZ - minZ,
        );

        const maxRadius = Math.hypot(box.x, box.y, box.z) / 2;

        return {center, box, maxRadius};
    }

    public getBox(): Vector3 {
        return this.box;
    }

    public getMaxRadius(): number {
        return this.maxRadius;
    }
}
