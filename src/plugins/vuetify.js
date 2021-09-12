import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#FF7F11",
        secondary: "#FF1B1C",
        background: "#E2E8CE",
      },
      light: {
        primary: "#FF7F11",
        secondary: "#FF1B1C",
        background: "#E2E8CE",
      },
    },
  },
});
