<template>
  <div class="grid-table">
    <TableHead class="grid-table__head" :invoices="invoicesList" />
    <TableRow
      v-for="item in invoicesList"
      :key="item.id"
      class="grid-table__line"
      :invoice="item"
    />
    <template v-if="invoicesList.length < 8">
      <EmptyRow
        v-for="idx in 8 - invoicesList.length"
        :key="idx"
        class="grid-table__line"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";
import EmptyRow from "./EmptyRow.vue";

import { Invoice } from "@/store/types";

export default Vue.extend({
  name: "Table",
  components: {
    TableHead,
    TableRow,
    EmptyRow,
  },
  computed: {
    invoicesList(): Invoice[] {
      return this.$store.state.invoices;
    },
  },
});
</script>

<style lang="scss" scoped>
.grid-table {
  position: relative;
  display: grid;
  flex: 1;
  grid-template-rows: 20px repeat(auto-fill, 30px);
  grid-template-columns:
    minmax(30px, 70px) minmax(100px, 2fr) minmax(50px, 1fr) minmax(40px, 1fr)
    minmax(60px, 1fr);
  height: 260px;
  max-height: 260px;
  overflow: auto;
  border: 2px solid var(--color-border);

  &__line {
    background: var(--color-white);

    &:nth-child(2n) {
      background: var(--color-grey-primary);
    }
  }

  .empty {
    display: contents;
  }

  ::v-deep .cell {
    border-right: 1px solid var(--color-border);
    border-left: 1px solid var(--color-border);

    &:nth-child(5n) {
      border-right: none;
    }

    &:nth-child(5n + 1) {
      border-left: none;
    }
  }
}
</style>
