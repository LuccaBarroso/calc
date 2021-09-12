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
            <v-btn class="calcBtn pa-10" name="seven" @click="addDigit(7)"
              >7</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10 " name="eight" @click="addDigit(8)"
              >8</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn  pa-10" name="nine" @click="addDigit(9)"
              >9</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn
              class="calcBtn pa-10"
              name="sum"
              color="primary"
              @click="operation('sum')"
              >+</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10" name="four" @click="addDigit(4)"
              >4</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10 " name="five" @click="addDigit(5)"
              >5</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10" name="six" @click="addDigit(6)"
              >6</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn
              class="calcBtn pa-10"
              name="sub"
              color="primary"
              @click="operation('subtract')"
              >-</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10" name="one" @click="addDigit(1)"
              >1</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10 " name="two" @click="addDigit(2)"
              >2</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10" name="three" @click="addDigit(3)"
              >3</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn
              class="calcBtn  pa-10"
              name="sub"
              color="primary"
              @click="operation('divide')"
              >/</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-btn
              class="calcBtn pa-10 secondary"
              name="ac"
              @click="cancelOperation"
              >AC</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn class="calcBtn pa-10 " name="zero" @click="addDigit(0)"
              >0</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn
              class="calcBtn  pa-10"
              name="multi"
              color="primary"
              @click="operation('multiply')"
              >*</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn
              class="calcBtn pa-10"
              color="secondary"
              width="100%"
              name="equals"
              @click="calculateValue"
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
      auxN: -1,
      nextOperation: "none",
    };
  },
  methods: {
    addDigit(digit) {
      this.NumInput = this.NumInput * 10 + digit;
    },
    cancelOperation() {
      this.NumInput = 0;
      this.auxN = -1;
      this.nextOperation = "none";
    },
    calculateValue() {
      if (this.nextOperation != "none") {
        if (this.nextOperation == "multiply") {
          this.NumInput = this.auxN * this.NumInput;
        }
        if (this.nextOperation == "divide") {
          this.NumInput = this.auxN / this.NumInput;
        }
        if (this.nextOperation == "sum") {
          this.NumInput = this.auxN + this.NumInput;
        }
        if (this.nextOperation == "subtract") {
          this.NumInput = this.auxN - this.NumInput;
        }
      }
      this.auxN = -1;
      this.nextOperation = "none";
    },
    operation(curOperation) {
      if (this.auxN > 0) {
        this.calculateValue();
      } else {
        this.auxN = this.NumInput;
        this.NumInput = 0;
      }
      this.nextOperation = curOperation;
    },
  },
};
</script>

<style scoped>
.calcBtn {
  width: 100%;
  font-size: 40px;
}
</style>
