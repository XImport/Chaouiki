<template>
  <div>
    <v-app-bar dense dark color="bg">
      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <v-spacer></v-spacer>
      <div v-for="(link, index) in links" :key="index">
        <v-btn class="ml-2 bg"> {{ link.text }} </v-btn>
      </div>
    </v-app-bar>
    <v-app-bar dense dark id="secondbar" color="bg">
      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->
      <img
        class="mr-12 mb-12"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Incarnate_Word_Cardinals_logo.svg/640px-Incarnate_Word_Cardinals_logo.svg.png
        "
        height="90"
      />
      <v-spacer></v-spacer>
      <v-container>
        <v-text-field
          outlined
          append-icon="mdi-magnify"
          label="Search Here"
        ></v-text-field>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "My Account" },
        { text: "Wish List" },
        { text: "My Carte" },
        { text: "Checkout" },
        { text: "Login" },
      ],
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 40%;
  margin-bottom: 25px;
}

#secondbar {
  padding: 40px;
}

.v-btn {
  box-shadow: none;
  transition: all 0.4 ease-out;
}

.v-btn:hover {
  color: red;
}
</style>
