<template>
  <v-app class="grey lighten-4">
    <v-main>
      <navBar />
      <v-container>
        <transition name="switchTab" mode="out-in" apear>
          <router-view />
        </transition>
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

<style scoped>
.switchTab-leave-active {
  animation: leave 1s ease-in-out;
}
.switchTab-enter-active {
  animation: leave reverse 1s ease-in-out;
}
@keyframes leave {
  0% {
    transform: scale(1);
    opacity: 1;
    width: 800px;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
    width: 0px;
  }
}
</style>
