import type { Meta, StoryObj } from "@storybook/vue3";

import ScoreCount from "./ScoreCount.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "UI/ScoreCount",
  component: ScoreCount,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  // tags: ["autodocs"],

  argTypes: {},
  args: {
    count: 42,
    plusDisabled: false,
    minusDisabled: false,
  }, // default value

  decorators: [
    () => ({
      template:
        '<body style="padding: 20px; background-color: white; height: 100vh"><story/></body>',
    }),
  ],
} satisfies Meta<typeof ScoreCount>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Base: Story = {
  args: {
    count: 42,
  },
};

export const Min: Story = {
  args: {
    count: 0,
  },
};

export const Max: Story = {
  args: {
    count: 999,
  },
};

export const WithDisabledPlus: Story = {
  args: {
    plusDisabled: true,
  },
};

export const WithDisabledMinus: Story = {
  args: {
    minusDisabled: true,
  },
};
