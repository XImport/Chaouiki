<template>
  <div>
    <NavBar />
    <SubNavBarVue />
    <ProductsVue :products="products" :title="'Top Products'" />
    <div class="mt-6">
      <ProductsVue :products="lastproducts" :title="title2" />
    </div>

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <!-- <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubNavBarVue from "@/components/SubNavBar.vue";
import ProductsVue from "@/components/ProductsVue.vue";

export default {
  name: "HelloWorld",
  components: {
    NavBar,
    SubNavBarVue,
    ProductsVue,
  },
  data: () => ({ title1: "Top Products" }, { title2: "Main Products" }),
  computed: {
    products() {
      return this.$store.getters.products;
    },
    lastproducts() {
      return this.$store.getters.lastproducts;
    },
  },
};
</script>
