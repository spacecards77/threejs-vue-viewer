declare module 'troika-three-text' {
    import {Color, Material, Mesh, Vector4} from 'three';

    export class Text extends Mesh {
        // Text content
        text: string;

        // Anchoring
        anchorX: number | string; // numeric, percentage string like '25%', or 'left'|'center'|'right'
        anchorY: number | string; // numeric, percentage string, or 'top'|'top-baseline'|'middle'|'bottom'|'bottom-baseline'

        // Font properties
        font: string | null;
        unicodeFontsURL: string | null;
        fontSize: number;
        fontWeight: number | 'normal' | 'bold';
        fontStyle: 'normal' | 'italic';
        lang: string | null;

        // Layout
        letterSpacing: number;
        lineHeight: number | string;
        maxWidth: number;
        overflowWrap: 'normal' | 'break-word';
        whiteSpace: 'normal' | 'nowrap';
        textAlign: 'left' | 'right' | 'center' | 'justify';
        textIndent: number;
        direction: 'auto' | 'ltr' | 'rtl';

        // Appearance
        color: number | Color | string;
        colorRanges: Array<{ start: number, end: number, color: number | Color | string }> | null;

        // Curved text
        curveRadius: number;

        // Advanced
        clipRect: Vector4 | null;
        depthOffset: number;
        glyphGeometryDetail: number;
        sdfGlyphSize: number | null;
        orientation: string;

        // Material
        material: Material | Material[];

        // Methods
        sync(callback?: () => void): void;

        dispose(): void;
    }
}
