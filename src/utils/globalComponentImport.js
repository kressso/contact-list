import Vue from 'vue';

const requireComponent = require.context(
    // The relative path of the components folder
    '@/components',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /Cl[a-zA-Z0-9]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(function(fileName) {
    // Get component config
    let baseComponentConfig = requireComponent(fileName);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;

    // Get component name
    const baseComponentName =
        baseComponentConfig.name ||
        fileName.replace(/^.+\//, '').replace(/\.\w+$/, '');

    // Register component globally
    Vue.component(baseComponentName, baseComponentConfig);
});

export default requireComponent;