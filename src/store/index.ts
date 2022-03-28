import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import { nanoid } from "nanoid";

import { FormInvoice, Invoice } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [] as Array<Invoice>,
    deletable: {} as Record<string, boolean>,
  },
  mutations: {
    addInvoice: (state, formData: Required<FormInvoice>) =>
      state.invoices.push({ id: nanoid(), ...formData }),
    removeInvoices: (state) => {
      state.invoices = state.invoices.filter(({ id }) => !state.deletable[id]);
      state.deletable = {};
    },
    setDeletable: (state, id: string) =>
      Vue.set(state.deletable, id, !state.deletable[id]),
    fillDeletable: (state, value) =>
      state.invoices.forEach(({ id }) => Vue.set(state.deletable, id, value)),
  },
  getters: {
    total: (state) =>
      state.invoices.reduce(
        (sum, { quantity, price }) => (sum += quantity * price),
        0
      ),
  },
  plugins: [
    createPersistedState({
      paths: ["invoices"],
    }),
  ],
});
