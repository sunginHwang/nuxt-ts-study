import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

// @ts-ignore
const store = () => new Vuex.Store({modules});
console.log(store());

export default store;
