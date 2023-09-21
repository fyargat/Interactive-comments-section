import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/vue3";

import PrimaryButton from "./PrimaryButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "UI/PrimaryButton",
  component: PrimaryButton,

  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args };
    },
    template: '<PrimaryButton @click="onClick" v-bind="args"  />',
    methods: {
      onClick: action("click"),
    },
  }),

  argTypes: {},
  args: {
    text: "Send",
  }, // default value
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Base: Story = {};

export const LongText: Story = {
  args: {
    text: "Long text Long text Long text Long text Long text Long text Long text ",
  },
};
