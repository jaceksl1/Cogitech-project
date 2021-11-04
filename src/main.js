import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { VBTogglePlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(VBTogglePlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
