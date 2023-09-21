import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/vue3";

import MessageInput from "./MessageInput.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "UI/MessageInput",
  component: MessageInput,

  render: (args) => ({
    components: { MessageInput },
    setup() {
      return { args };
    },
    template: '<MessageInput @addComment="addComment" v-bind="args"  />',
    methods: {
      addComment: action("add comment"),
    },
  }),

  argTypes: {},
  args: {
    currentUser: {
      image: {
        png: "image-juliusomo.png",
        webp: "image-juliusomo.webp",
      },
      username: "juliusomo",
    },
  },
} satisfies Meta<typeof MessageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
