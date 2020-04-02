<template>
  <p class="timer">Minęło {{ time }}s</p>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      time: 0
    };
  },
  mounted(){
    const vm = this;
    setInterval(() => { 
        vm.$parent.time = vm.time++; 
    }, 1000);
  }
};
</script>
<style scoped>
p{
    font-size: 2rem;
    bottom: 30px;
    right: 46%;
    position: absolute;
}

@media (max-width: 754px) {
  p{
    position: static;
  }
}
</style>