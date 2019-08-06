import camelCase from 'lodash/camelCase';

const requireModule: any = require.context('.', true, /^(?!.\/index).*.ts$/);
const modules: any = {};

requireModule.keys().forEach((filename) => {
    const moduleName: string = camelCase(filename.replace(/(\.\/|\.ts)/g, ''));
    modules[moduleName] = {namespaced: true, ...requireModule(filename)};
});

export default modules;
