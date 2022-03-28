<template>
  <input v-bind="$props" v-model="proxyValue" />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "Input",
  props: {
    value: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
  },
  computed: {
    proxyValue: {
      get(): string | number {
        return this.value;
      },
      set(e: InputEvent) {
        this.$emit("input", e);
      },
    },
  },
  methods: {
    focus() {
      (this.$el as HTMLInputElement).focus();
    },
  },
});
</script>

<style lang="scss" scoped>
input {
  --color-input-primary: var(--color-dark);
  --color-input-text: var(--color-text);
  --color-input-border: var(--color-border);

  padding: 3px;
  border: 2px solid var(--color-input-border);
  border-radius: 0;

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px var(--color-input-primary);
  }

  &::placeholder {
    color: var(--color-input-text);
  }
}
</style>
