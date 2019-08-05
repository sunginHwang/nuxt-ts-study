import camelCase from 'lodash/camelCase';

// @ts-ignore
const requireModule: any = require.context('.', true, /^(?!.\/index).*.js$/);

const modules: object = {};

requireModule.keys().forEach((filename) => {
  const moduleName: string = camelCase(filename.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = { namespaced: true, ...requireModule(filename) };
});

export default modules;
