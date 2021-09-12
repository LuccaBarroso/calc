<template>
  <div>
    <v-navigation-drawer app v-model="drawer" dark>
      <routerLinks class="d-flex flex-column align-center pt-4" />
    </v-navigation-drawer>
    <nav>
      <v-app-bar dark app>
        <v-toolbar-title>Calculators<span>VUE</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- links for big screens -->
        <routerLinks class="mr-2 d-none d-lg-block" />
        <!-- icon for drawers -->
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-lg-none"
        ></v-app-bar-nav-icon>
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
import routerLinks from "./router-links.vue";
export default {
  components: { routerLinks },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style></style>
