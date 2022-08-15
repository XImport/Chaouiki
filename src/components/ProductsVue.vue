<template>
  <div>
    <v-container
      class="container1"
      white
      fill-height
      grid-list-md
      text-xs-center
    >
      <v-card class="d-flex mb-6" color="grey lighten-2" flat tile> </v-card>

      <div class="d-flex" color="grey lighten-2" flat tile>
        <h1 class="pa-2" outlined tile>{{ title }}</h1>
      </div>
      <v-btn class="pa-2 ml-auto white"><v-icon>mdi-arrow-right</v-icon></v-btn>
    </v-container>
    <v-container
      class="container1"
      white
      fill-height
      grid-list-md
      text-xs-center
    >
      <v-row no-gutters>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          sm="2"
        >
          <v-card :loading="loading" class="my-2" max-width="240" hover>
            <v-img height="240" width="240" :src="product.img"></v-img>

            <v-card-title>{{ product.title }}</v-card-title>

            <v-card-text>
              <v-row align="left" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">{{ product.rating }}</div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                $ {{ product.price }}
                <span>
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon class="red--text">mdi-cart-plus</v-icon>
                  </v-btn></span
                >
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <!-- <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve" block>
                <v-icon>mdi-plus</v-icon>

                Add To Card
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["products", "title"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.container1 {
  max-width: 86%;
  margin-left: 13%;
}

.v-btn {
  box-shadow: none;
}
</style>
