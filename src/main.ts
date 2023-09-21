import { createPinia } from "pinia";
import { createApp } from "vue";

import { clickOutside } from "@/directives/v-click-outside";
import { focusDirective } from "@/directives/v-focus";

import "@/styles/index.scss";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.directive("focus", focusDirective);
app.directive("click-outside", clickOutside);
app.use(pinia);

app.mount("#app");
