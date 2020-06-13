<template>
  <div>
    <h1>Udało ci się wydać resztę {{ $parent.initialChange }}zł w {{ $parent.time}}s</h1>
    <br />
    <h1>
      banknoty: {{ paperTransactions.length }}
      <br />
      monety: {{ coinTransactions.length }}
      <br />
    </h1>
  </div>
</template>

<script>
export default {
  name: "WinView",
  computed: {
    transactions() {
      return this.$store.state.changeTransactions;
    },
    paperTransactions() {
      return this.transactions.filter(t => t.amount >= 10);
    },
    coinTransactions() {
      return this.transactions.filter(t => t.amount < 10);
    }
  }
};
</script>