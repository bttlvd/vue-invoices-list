<template>
  <div class="container">
    <Cell>
      <Checkbox v-model="proxyValue" />
    </Cell>
    <Cell>
      <span :title="invoice.product_name">{{ invoice.product_name }}</span>
    </Cell>
    <Cell>
      <span :title="invoice.price">${{ invoice.price }}</span>
    </Cell>
    <Cell>
      <span :title="invoice.quantity">{{ invoice.quantity }}</span>
    </Cell>
    <Cell>
      <span :title="total">${{ total }}</span>
    </Cell>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import Cell from "./Cell.vue";

import Checkbox from "./UI/Checkbox.vue";

import { Invoice } from "@/store/types";

export default Vue.extend({
  name: "TableRow",
  components: {
    Cell,
    Checkbox,
  },
  props: {
    invoice: {
      type: Object as PropType<Invoice>,
      required: true,
    },
  },
  computed: {
    total(): number {
      return this.invoice.price * this.invoice.quantity;
    },
    proxyValue: {
      get(): boolean {
        return this.$store.state.deletable[this.invoice.id];
      },
      set() {
        this.$store.commit("setDeletable", this.invoice.id);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: contents;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
