import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: {
    namespaced: true,

    lastproducts: [
      {
        img: "https://m.media-amazon.com/images/I/71zfVsNWIvL._AC_UL320_.jpg",
        title: "Soockes",
        rating: "4.5",
        price: "15.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/81rudYhYAmL._AC_UL320_.jpg",
        title: "colorfull hoodie",
        rating: "4.5",
        price: "60.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/71M4HugZQuL._AC_UL320_.jpg",
        title: "Winter Hoodie",
        rating: "3.5",
        price: "80.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/81JiVkedBXL._AC_UY218_.jpg",
        title: "Gtx 1650 Supper",
        rating: "4.5",
        price: "100.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/619qYoiy5GL._MCnd_AC_UL320_.jpg",
        title: "female Dress ",
        rating: "4.5",
        price: "80.00",
      },
      {
        img: "https://m.media-amazon.com/images/I/71IDhvyAvpL._AC_UY218_.jpg",
        title: "BenQ U 144HZ ",
        rating: "4.00",
        price: "200.92",
      },
    ],
  },
  getters: {
    lastproducts(state) {
      return state.lastproducts;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
