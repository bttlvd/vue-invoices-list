<template>
  <button v-on="$listeners" @keyup.enter="$emit('click')">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  --color-button-primary: var(--color-dark);
  --color-button-border: var(--color-border);
  --color-background: var(--color-background);

  height: 25px;
  color: var(--color-button-primary);
  background: var(--color-background);
  border: 2px solid var(--color-button-border);
  border-radius: none;
  box-shadow: 2px 2px 0 1px var(--color-button-primary);

  &:active {
    color: var(--color-button-primary);
    box-shadow: 1px 1px 0 1px var(--color-button-primary);
  }

  &:focus {
    outline: none;
    box-shadow: 1px 1px 2px 0 var(--color-button-primary);
  }
}
</style>
