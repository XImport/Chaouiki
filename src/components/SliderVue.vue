<template>
  <v-carousel
    v-model="model"
    hide-delimiter-background
    show-arrows-on-hover
    progress-color="pink"
    touch
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img
        :src="item.src"
        containclass="d-block mx-auto"
        max-width="100%"
        max-height="100%"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    items: [
      {
        src: "https://images.unsplash.com/photo-1581068506097-9eb0677b95af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1548801133-da353ebb1d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      },
    ],
  }),
};
</script>
<style scoped>
.img-carousel {
  background-size: cover !important;
  margin: auto !important;
  display: block !important;
  height: auto !important;
  max-width: 100% !important;
}
</style>
