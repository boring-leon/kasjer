<template>
  <div v-if="changes.length > 0">
    <h2>Ostatnio wydano</h2>
    <img
      :src="require('../assets/' + assetPath)"
      @dblclick="$store.dispatch('removeChangeTransaction', freshChange)"
    />
    <br />
    <small>Naciśnij dwukrotnie aby usunąć</small>
  </div>
</template>

<script>
export default {
  name: "ChangeRecord",
  computed: {
    changes() {
      return this.$store.state.changeTransactions;
    },
    freshChange() {
      return this.changes[this.changes.length - 1];
    },
    assetPath() {
      if (this.freshChange.amount < 1) {
        return `coin/${this.freshChange.amount * 100}gr.jpg`;
      } else if (this.freshChange.amount >= 1 && this.freshChange.amount < 10) {
        return `coin/${this.freshChange.amount}zl.jpg`;
      } else {
        return `paper/${this.freshChange.amount}zl.jpg`;
      }
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
  padding-bottom: 0;
}
h2 i {
  font-size: 1.5rem;
  cursor: pointer;
}
h2 > i :hover {
  color: red;
  text-decoration: line-through;
}
</style>