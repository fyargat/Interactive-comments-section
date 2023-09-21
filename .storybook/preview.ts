import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";

import "../src/styles/index.scss";

import { clickOutside } from "../src/directives/v-click-outside";
import { focusDirective } from "../src/directives/v-focus";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

setup((app) => {
  const pinia = createPinia();

  app.directive("focus", focusDirective);
  app.directive("click-outside", clickOutside);
  app.use(pinia);
});

export default preview;
