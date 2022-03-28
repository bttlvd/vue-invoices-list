import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import * as Sentry from "@sentry/vue";

import "./assets/style/general.scss";

Vue.config.productionTip = false;

Sentry.init({
  Vue,
  // dsn: 'place for your ad',
  tracesSampleRate: 1.0,
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
