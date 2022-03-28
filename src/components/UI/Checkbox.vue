<template>
  <label class="checkbox">
    <input
      v-bind="$props"
      v-model="proxyValue"
      type="checkbox"
      @focus="scrollIntoView"
      @keyup.enter="proxyValue = !proxyValue"
    />
    <svg
      v-show="proxyValue"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
    </svg>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Checkbox",
  props: {
    value: {
      type: Boolean,
      default: undefined,
    },
  },
  computed: {
    proxyValue: {
      get(): boolean {
        return this.value;
      },
      set(e: InputEvent) {
        this.$emit("input", e);
      },
    },
  },
  methods: {
    scrollIntoView(e: FocusEvent) {
      (e.target as HTMLInputElement).scrollIntoView({ block: "center" });
    },
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  --color-checkbox-border: var(--color-border);
  --color-checkbox-check: var(--color-dark);

  position: relative;
  width: 10px;
  height: 10px;
  margin: 5px;
  border: 1px solid var(--color-checkbox-border);

  &:focus-within {
    box-shadow: 0 0 1px 1px var(--color-checkbox-border);
  }

  input {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  svg {
    position: absolute;
    top: -5px;
    left: -1px;
    width: 15px !important;
    height: 15px !important;
    fill: var(--color-checkbox-check);
  }
}
</style>
