<template>
  <div>
    <div>
      <NavBar />
      <SubNavBarVue />
    </div>

    <ProductsVue :products="products" :title="'Top Products'" />
    <div class="mt-6">
      <ProductsVue :products="lastproducts" :title="title2" />
    </div>
    <div>
      <JamboTron :title="`Why You Should Consider Us ?`" />
    </div>
    <Footervue />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubNavBarVue from "@/components/SubNavBar.vue";
import ProductsVue from "@/components/ProductsVue.vue";
import Footervue from "@/components/FooterVue.vue";
import JamboTron from "@/components/JamboTron.vue";
export default {
  name: "HelloWorld",
  components: {
    NavBar,
    SubNavBarVue,
    ProductsVue,
    JamboTron,
    Footervue,
  },
  data: () => {
    return {
      title1: "Top Products",
      title2: "Main Products",

      items: ["default", "absolute", "fixed"],
      padless: false,
      variant: "default",
    };
  },

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
