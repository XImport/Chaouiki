<template>
  <div>
    <v-container class="container1 mt-6" white fill-height text-xs-center>
      <div class="text-center" flat tile>
        <h1 class="pa-2 text-center" outlined tile>{{ title }}</h1>
        <v-divider class="mx-4"></v-divider>

        <p class="mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non animi
          ipsum dignissimos optio odit,<br /><a
            ><strong class="blue--text"> learn More</strong></a
          >
        </p>
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <div v-for="(btn, index) in btns" :key="index" cols="12" sm="4">
              <v-btn :class="`${btn.class} mx-2`"
                ><v-icon>{{ btn.icon }}</v-icon
                >{{ btn.title }}</v-btn
              >
            </div>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      btns: [
        { title: "TOP CATEGORIES", class: "blue darken-1", icon: "mdi-menu" },
        {
          title: "#ELECTRONICS",
          class: "orange lighten-1",
          icon: "mdi-elevator",
        },
        {
          title: "#BEAUTY",
          class: "teal accent-3",
          icon: "mdi-toothbrush-electric",
        },
        { title: "#FASHIONS", class: "red darken-1", icon: "mdi-curtains" },
      ],
    };
  },
};
</script>

<style scoped>
.container1 {
  max-width: 86%;
  margin-left: 13%;
  justify-content: center;
}

.v-btn {
  box-shadow: none;
}
</style>
