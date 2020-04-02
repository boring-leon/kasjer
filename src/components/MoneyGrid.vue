<template>
  <div>
    <Coin @onClick="pushChangeTransaction" />
    <Paper @onClick="pushChangeTransaction" style="margin-top:40px;" />
  </div>
</template>

<script>
import Coin from "./Coin";
import Paper from "./Paper";
import { uuid } from "vue-uuid";

export default {
  name: "MoneyGrid",
  components: {
    Coin,
    Paper
  },
  methods: {
    pushChangeTransaction(amount) {
      this.$store.dispatch("addChangeTransaction", {
        amount: amount,
        id: uuid.v4()
      });
    }
  }
};
</script>