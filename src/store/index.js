import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import Topproducts from "./modules/Topproducts";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { products, Topproducts },
});
