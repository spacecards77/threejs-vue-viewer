export const config = {
    // Path to a JSON file placed in the `public/` folder to autoload on startup.
    autoLoadJson: '/threejs-vue-viewer/modelBig.json',
    debugMode: true,

    coordinateAxes: {
        length: 1.5,
        lineWidth: 3,
        widgetSize: 200,
        widgetMargin: 0,
        connectedAxesLayer: 1,
    },

    rendering: {
        nodeRenderOrder: 800,
        textRenderOrder: 900,
        textLayer: 1,
    },

    standardMaxRadius: 20
};
