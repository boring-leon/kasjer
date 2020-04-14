<template>
  <header>
    <h1>Reszta {{ remainingChange.toFixed(2) }}zł</h1>
  </header>
</template>

<script>
export default {
  name: "Order",
  beforeMount() {
    this.$parent.$on("newGameStarted", () => {
      this.clearOrder();
      this.buildOrder();
    });

    this.buildOrder();
  },

  methods: {
    buildOrder() {
      this.setPrice();
      this.setGivenSum();
      this.saveInitialChange();
    },
    clearOrder() {
      this.$store.commit("clearState");
    },

    setPrice() {
      const integer = this.getRandomNumber({ max: 499, min: 1 });
      const decimalPoint = this.getRandomNumber({ max: 100, min: 1 }) / 100;
      this.price = integer + decimalPoint;
    },

    setGivenSum() {
      this.givenSum = this.getRandomNumber({ max: 500, min: this.price });
    },

    saveInitialChange() {
      const change = Math.round((this.givenSum - this.price) * 100) / 100;
      this.$parent.initalChange = change;
      this.$store.commit("addChange", change);
    },

    getRandomNumber({ max, min }) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },

  computed: {
    remainingChange() {
      return this.$store.state.changeToReceive;
    }
  }
};
</script>

<style scoped>
h1 {
  display: inline-block;
  margin-bottom: 0;
  padding: 0;
  font-size: 1.7em;
}
</style>