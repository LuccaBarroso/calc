<template>
  <div class="routerLinks">
    <router-link class="mb-4" to="/">
      <v-btn color="primary"> Home </v-btn>
    </router-link>
    <router-link to="/calculator" class="pl-2 mb-4">
      <v-btn color="primary"> Calculator </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
