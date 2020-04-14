<template>
  <p class="timer">Minęło {{ time }}s</p>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      time: 0,
      windowInterval: null
    };
  },
  beforeMount() {
    this.$parent.$on("newGameStarted", () => {
      this.clearTimer();
      this.initTimer();
    });
  },

  mounted() {
    this.clearTimer();
    this.initTimer();
  },
  methods: {
    clearTimer() {
      clearInterval(this.windowInterval);
      this.time = 0;
      this.$parent.time = 0;
    },
    initTimer() {
      const vm = this;
      this.windowInterval = setInterval(() => {
        vm.time++;
        vm.$parent.time = vm.time;
      }, 1000);
    }
  }
};
</script>
<style scoped>
p {
  font-size: 2rem;
  bottom: 30px;
  right: 46%;
  position: absolute;
}

@media (max-width: 754px) {
  p {
    position: static;
  }
}
</style>