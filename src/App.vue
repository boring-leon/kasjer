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

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 98%;
}
#app {
  text-align: center;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  position: relative;
}
img {
  cursor: pointer;
  margin-right: 5px;
  opacity: 0.5;
}

img:hover {
  opacity: 1;
}

button {
  margin-top: 30px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 18px 48px 16px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  background-color: #1aa34a;
  bottom: 2px;
  right: 43%;
  position: absolute;
}
hr {
  -moz-border-bottom-colors: none;
  -moz-border-image: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  border-color: #eeeeee -moz-use-text-color #ffffff;
  border-style: solid none;
  border-width: 1px 0;
  margin: 18px 0;
}

ul {
  list-style-type: disc;
  padding: 0;
}
li {
  cursor: pointer;
  font-size: 15px;
  display: inline-block;
  margin: 0 10px;
}

@media (max-width: 754px) {
  button {
    position: static;
  }
}
</style>