import type { Meta, StoryObj } from "@storybook/vue3";

import { getAvatarPath } from "../../helpers/avatar";
import Avatar from "./Avatar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "UI/Avatar",
  component: Avatar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  // tags: ["autodocs"],

  argTypes: {},
  args: {
    src: getAvatarPath("image-juliusomo.webp"),
  }, // default value
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Base: Story = {};
