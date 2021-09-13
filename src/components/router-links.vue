<template>
  <div class="routerLinks">
    <router-link to="/calculator" class="pl-2 mb-4">
      <v-btn color="primary"> Calculator </v-btn>
    </router-link>
    <router-link to="/investments" class="pl-2 mb-4">
      <v-btn color="primary"> Investments </v-btn>
    </router-link>
    <router-link to="/discount" class="pl-2 mb-4">
      <v-btn color="primary"> Discount </v-btn>
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
