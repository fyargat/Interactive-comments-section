import type { Meta, StoryObj } from "@storybook/vue3";

import DeleteCommentModal from "./DeleteCommentModal.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "UI/DeleteCommentModal",
  component: DeleteCommentModal,

  argTypes: {},
  args: {},
} satisfies Meta<typeof DeleteCommentModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
