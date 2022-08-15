import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    products(state) {
      return state.products;
    },
    lastproducts(state) {
      return state.lastproducts;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
