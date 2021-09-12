<template>
  <v-app class="grey lighten-4">
    <v-main>
      <navBar />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/nav-bar.vue";
export default {
  name: "App",
  components: { navBar },
  data() {
    return {
      drawer: false,
      smallerScreen: false,
    };
  },
  methods: {},
};
</script>
