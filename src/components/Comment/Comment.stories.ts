import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/vue3";

import Comment from "./Comment.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "UI/Comment",
  component: Comment,

  render: (args) => ({
    components: { Comment },
    setup() {
      return { args };
    },
    template:
      '<Comment :incrementScoreCount="incrementScoreCount" :decrementScoreCount="decrementScoreCount" :setCommentIdToDelete="setCommentIdToDelete" :addReply="addReply" :updateComment="updateComment"  v-bind="args"  />',
    methods: {
      incrementScoreCount: action("incrementScoreCount"),
      decrementScoreCount: action("decrementScoreCount"),
      setCommentIdToDelete: action("setCommentIdToDelete"),
      addReply: action("addReply"),
      updateComment: action("updateComment"),
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
    comment: {
      id: "id1",
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: 1692600484000,
      score: 12,
      user: {
        image: {
          png: "image-amyrobson.png",
          webp: "image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Base: Story = {};

export const CurrentUserComment: Story = {
  // @ts-ignore
  args: {
    comment: {
      id: "id4",
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: 1695192484000,
      score: 2,
      replyingTo: "ramsesmiron",
      user: {
        image: {
          png: "image-juliusomo.png",
          webp: "image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    },
  },
};
