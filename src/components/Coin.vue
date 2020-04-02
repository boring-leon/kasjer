<template>
  <div>
    <img
      v-for="coin in coins.slice(0,3)"
      :key="coin"
      :src="require(`../assets/coin/${coin}zl.jpg`)"
      @click="$emit('onClick', coin)"
    />
    <div></div>
    <img
      v-for="coin in coins"
      :key="coin + 1000"
      :src="require(`../assets/coin/${coin}gr.jpg`)"
      @click="$emit('onClick', coin * 0.01)"
      class = "coin-minor"
    />
  </div>
</template>

<script>
export default {
  name: "Coin",
  data() {
    return {
      coins: [1, 2, 5, 10, 20, 50]
    };
  }
};
</script>
<style scoped>
@media (max-width: 754px) {
  img {
    width: 63px;
    height: 63px;
  }
  .coin-minor{
    width: 51px;
    height: 51px;
  }
}
</style>