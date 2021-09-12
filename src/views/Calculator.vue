<template>
  <div>
    <v-card
      elevation="24"
      class="mx-auto my-8 pa-8"
      width="800px"
      outlined
      shaped
    >
      <v-text-field
        class="font-weight-thins py-2 display-1 "
        v-model.number="NumInput"
        hide-details
        single-line
        type="number"
      />
      <!-- btns -->
      <v-container class="fill">
        <v-row>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="seven">7</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10 " name="eight">8</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="nine">9</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="sum" color="primary">+</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="four">4</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10 " name="five">5</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="six">6</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="sub" color="primary">-</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="one">1</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10 " name="two">2</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="three">3</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="sub" color="primary">/</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10 secondary" name="ac">AC</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10 " name="zero">0</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="multi" color="primary">*</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              class="calcBtn pa-10"
              color="secondary"
              width="100%"
              name="equals"
              >=</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      NumInput: 0,
    };
  },
};
</script>

<style scoped>
.calcBtn {
  width: 100%;
  font-size: 40px;
}
</style>
