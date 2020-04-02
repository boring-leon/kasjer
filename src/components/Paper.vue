<template>
  <div>
    <img
      v-for="paper in papers"
      :key="paper"
      :src="require(`../assets/paper/${paper}zl.jpg`)"
      @click="$emit('onClick', paper)"
    />
  </div>
</template>

<script>
export default {
  name: "Paper",
  data() {
    return {
      papers: [10, 20, 50, 100, 200, 500]
    };
  }
};
</script>
<style scoped>
@media (max-width: 754px) {
  img{
    width: 150,75px;
    height: 75.75px;
  }
}
</style>