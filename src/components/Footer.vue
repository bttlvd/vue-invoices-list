<template>
  <div class="footer">
    <Button label="Delete" @click="$store.commit('removeInvoices')" />
    <div class="total">
      <span class="total-label">Total:</span>
      <span class="total-value">${{ total }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Button from "./UI/Button.vue";

export default Vue.extend({
  name: "Footer",
  components: {
    Button,
  },
  computed: {
    total(): number {
      return this.$store.getters.total;
    },
  },
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .total-value {
    margin: 0 40px 0 80px;
  }
}
</style>
