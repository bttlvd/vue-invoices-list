<template>
  <form :class="{ 'invoice-form': true, valid }" @submit.prevent>
    <Input
      ref="nameInput"
      v-model="invoice.product_name"
      placeholder="Product name"
      class="name"
    />
    <Input v-model="invoice.price" placeholder="Price" class="price" />
    <Input v-model="invoice.quantity" placeholder="Qty" class="quantity" />
    <Button class="add" label="Add" @click="addInvoice" />
  </form>
</template>

<script lang="ts">
import Vue from "vue";

import Button from "./UI/Button.vue";
import Input from "./UI/Input.vue";

import { isValid } from "@/store/utils";
import { FormInvoice } from "../store/types";

interface Data {
  invoice: FormInvoice;
  valid: boolean;
}

const invoice: FormInvoice = {
  product_name: undefined,
  price: undefined,
  quantity: undefined,
};

export default Vue.extend({
  name: "Form",
  components: {
    Input,
    Button,
  },
  data(): Data {
    return {
      invoice: { ...invoice },
      valid: true,
    };
  },
  methods: {
    addInvoice() {
      if (!isValid(this.invoice)) {
        this.valid = false;

        /**
         * used one-time watcher to prevent watching
         * any changes in "invoice" when "valid" variable is true
         */
        const unwatch = this.$watch(
          () => this.invoice,
          () => {
            this.valid = true;
            unwatch();
          },
          { deep: true }
        );

        return;
      }
      this.$store.commit("addInvoice", this.invoice);
      this.invoice = { ...invoice };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.$refs.nameInput as any).focus();
    },
  },
});
</script>

<style lang="scss" scoped>
.invoice-form {
  display: flex;
  align-items: center;

  .name {
    flex: 1;
  }

  .price,
  .quantity {
    width: 60px;
    margin-left: 15px;
  }

  .add {
    margin-left: 40px;
  }

  &:not(.valid) {
    input {
      border-color: var(--color-error);
    }
  }
}
</style>
