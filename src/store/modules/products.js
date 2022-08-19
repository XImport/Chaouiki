import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    namespaced: true,

    products: [
      {
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80",
        title: "red Dress",
        rating: "4.5",
        price: "55.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/71cU+PWlelL._AC_UL320_.jpg",
        title: "red Watch",
        rating: "4.5",
        price: "55.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/61PHxpfpOOL._AC_UL320_.jpg",
        title: "Gaming Chair",
        rating: "3.5",
        price: "300.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/81CFOwoLVlL._AC_UL320_.jpg",
        title: "Computer Windows 11",
        rating: "4.5",
        price: "100.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/71sRvPjIaGL._AC_UL320_.jpg",
        title: "females Makeup ",
        rating: "4.5",
        price: "80.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/81aqqbb9FiS._AC_UL320_.jpg",
        title: "FRSHANIAH ",
        rating: "4.00",
        price: "31.92",
      },
    ],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
