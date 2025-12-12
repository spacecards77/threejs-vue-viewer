export const config = {
    // Path to a JSON file placed in the `public/` folder to autoload on startup.
    autoLoadJson: '/threejs-vue-viewer/modelBig.json',
    debugMode: true,

    coordinateAxes: {
        length: 1.5,
        lineWidth: 3,
        widgetSize: 200,
        widgetMargin: 0,
    },

    rendering: {
        nodeRenderOrder: 900,
        separateAxesLayer: 1,
        textLayer: 2,
    },

    standardMaxRadius: 20
};
