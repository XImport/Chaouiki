import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EE092A", // red accent
        secondary: "#FCFCFC", // bg white
        accent: "#EE092A", // red accent
        bg: "#0E0E0E", // dark grey
        mainbg: "#F1F1F1",
      },
    },
  },
});
