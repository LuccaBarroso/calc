<template>
  <v-card
    elevation="24"
    class="mx-auto my-8 pa-8"
    width="800px"
    outlined
    shaped
  >
    <v-form>
      <v-text-field
        type="number"
        v-model.number="initialPatrimony"
        label="Initial Patrimony"
      ></v-text-field>
      <v-text-field
        type="number"
        v-model.number="amount"
        label="Amount Invested Monthly"
      ></v-text-field>
      <v-text-field
        type="number"
        v-model.number="incomePercentage"
        label="Monthly Investment Income Percentage"
      ></v-text-field>
      <v-checkbox
        v-model="reinvest"
        label="Reinvest All Invested Profit"
      ></v-checkbox>
    </v-form>

    <v-divider></v-divider>

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">Year</th>
          <th class="text-center">Month</th>
          <th class="text-center">
            Monthly Investment <br />
            Profit
          </th>
          <th class="text-center">Patrimony</th>
          <th class="text-center">Patrimony If didn't invest</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in investmentResult" :key="item.month">
          <td class="text-center">{{ item.year }}</td>
          <td class="text-center">{{ item.month }}</td>
          <td class="text-center">{{ item.income.toFixed(2) }}</td>
          <td class="text-center">{{ item.patrimony.toFixed(2) }}</td>
          <td class="text-center">{{ item.patrimonyNot.toFixed(2) }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      initialPatrimony: 0,
      amount: 1000,
      incomePercentage: 0.5,
      reinvest: true,
    };
  },
  computed: {
    investmentResult() {
      const array = [];
      let patrimony = this.initialPatrimony;
      let patrimonyNot = this.initialPatrimony;

      for (let i = 0; i < 241; i++) {
        const curItem = {};

        curItem.month = parseInt(i);
        curItem.income = (patrimony * this.incomePercentage) / 100;
        curItem.patrimony = patrimony;
        curItem.patrimonyNot = patrimonyNot;

        patrimony += this.amount;
        patrimonyNot += this.amount;
        if (this.reinvest) patrimony += curItem.income;

        if (i % 12 === 0 || i < 2) {
          curItem.year = i % 12 == 0 ? i / 12 : 0;
          array.push(curItem);
        }
      }
      return array;
    },
  },
  methods: {},
};
</script>

<style></style>
