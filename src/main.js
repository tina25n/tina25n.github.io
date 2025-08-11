import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// for tsparticles
const app = createApp(App);

//list of icons https://pictogrammers.com/library/mdi/
app.use(router);
app.use(vuetify, {
  iconfont: "mdi",
});
app.mount("#app");
