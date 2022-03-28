<template functional>
  <div class="cell">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Cell",
  functional: true,
};
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 3px;
  background: inherit;
}
</style>
