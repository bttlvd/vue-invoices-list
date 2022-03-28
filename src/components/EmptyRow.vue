<template>
  <div class="container">
    <Cell v-for="i in 5" :key="i" />
  </div>
</template>

<script>
import Cell from "./Cell.vue";

export default {
  name: "EmptyRow",
  components: {
    Cell,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: contents;

  ::v-deep > * {
    height: 30px;
  }
}
</style>
