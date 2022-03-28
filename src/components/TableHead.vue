<template>
  <div class="container">
    <Cell>
      <Checkbox v-model="proxyValue" :disabled="!hasInvoices" />
    </Cell>
    <Cell>
      <span> Product name </span>
    </Cell>
    <Cell>
      <span> Price </span>
    </Cell>
    <Cell>
      <span> Qta </span>
    </Cell>
    <Cell>
      <span> Sum </span>
    </Cell>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import Cell from "./Cell.vue";
import Checkbox from "./UI/Checkbox.vue";

import { Invoice } from "@/store/types";

export default Vue.extend({
  name: "TableHead",
  components: {
    Cell,
    Checkbox,
  },
  props: {
    invoices: {
      type: Array as PropType<Array<Invoice>>,
      required: true,
    },
  },
  computed: {
    proxyValue: {
      get(): boolean {
        return (
          this.invoices.every(({ id }) => this.$store.state.deletable[id]) &&
          this.hasInvoices
        );
      },
      set() {
        this.$store.commit("fillDeletable", !this.proxyValue);
      },
    },
    hasInvoices(): boolean {
      return this.invoices.length > 0;
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: contents;
  align-self: start;
  background: var(--color-grey-dark);

  ::v-deep > * {
    position: sticky;
    top: 0;
    z-index: 1;
    height: 20px;
  }
}
</style>
