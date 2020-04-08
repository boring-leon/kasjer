<template>
  <div id="app">
    <template v-if="!won">
      <Order />
      <hr />
      <ChangeRecord />
      <hr />
      <MoneyGrid style="margin-top: 15px;" />
      <Timer />
    </template>
    <template v-else>
      <WinView />
    </template>
    <button @click="reload">Nowe losowanie</button>
  </div>
</template>

<script>
import Order from "./components/Order";
import MoneyGrid from "./components/MoneyGrid";
import ChangeRecord from "./components/ChangeRecord";
import Timer from "./components/Timer";
import WinView from "./views/Win";

export default {
  name: "App",
  components: { Order, MoneyGrid, ChangeRecord, Timer, WinView },

  methods: {
    reload() {
      location.reload();
    },

    setPosition(selector, pos) {
      document.querySelector(selector).style.position = pos;
    },
    setElementsDynamicPosition(arr) {
      if (arr.length > 5) {
        this.setPosition("button", "static");
        this.setPosition(".timer", "static");
      }
    }
  },
  watch: {
    "$store.state.changeTransactions": {
      handler: function(arr) {
        this.setElementsDynamicPosition(arr);
      }
    }
  },
  computed: {
    won() {
      return (
        this.$store.state.changeToReceive == 0 &&
        this.$store.state.changeTransactions.length > 0
      );
    }
  }
};
</script>
