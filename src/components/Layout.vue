<template>
  <section class="invoices">
    <h1 class="heading">Vue Invoice Calc</h1>
    <Form class="form" />
    <Table class="table" />
    <Footer class="footer" />
  </section>
</template>

<script>
import Form from "./Form.vue";
import Table from "./Table.vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    Form,
    Table,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.invoices {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 630px;

  .form {
    margin-bottom: 15px;
  }

  .footer {
    margin-top: 10px;
  }
}
</style>
