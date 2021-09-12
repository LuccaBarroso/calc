<template>
  <v-card
    elevation="24"
    class="mx-auto my-8 pa-8 pb-4"
    width="800px"
    outlined
    shaped
  >
    <v-form>
      <v-text-field
        type="number"
        v-model.number="totalPrice"
        label="Total Price"
      />
      <v-slider
        v-model="percentage"
        :hint="percentage + '%'"
        inverse-label
        max="100"
        min="0"
        persistent-hint
        label="Percentage"
      ></v-slider>
    </v-form>
    <v-divider class="pt-11"></v-divider>
    <v-item-group>
      <v-row>
        <v-col cols="6">
          <div>Price with discount:</div>
          <div>{{ (totalPrice - newDiscount).toFixed(2) }}</div>
        </v-col>
        <v-col cols="6">
          <div>Total discounted:</div>
          <div>{{ newDiscount.toFixed(2) }}</div>
        </v-col>
      </v-row>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      percentage: 0,
      totalPrice: 0,
    };
  },
  computed: {
    newDiscount() {
      return (this.totalPrice * this.percentage) / 100;
    },
  },
};
</script>

<style></style>
