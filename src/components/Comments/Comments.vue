<template>
  <div>
    <template v-for="comment in comments">
      <div class="comments__comment">
        <Comment
          :comment="comment"
          :key="comment.id"
          :currentUser="currentUser"
          :incrementScoreCount="incrementScoreCount"
          :decrementScoreCount="decrementScoreCount"
          :updateComment="updateComment"
          :setCommentIdToDelete="setCommentIdToDelete"
          :addReply="addReply"
        />
      </div>

      <div
        class="comments__replies"
        v-if="comment.replies && comment.replies.length"
      >
        <div class="comments__comment" v-for="reply in comment.replies">
          <Comment
            :comment="reply"
            :key="reply.id"
            :currentUser="currentUser"
            :incrementScoreCount="incrementScoreCount"
            :decrementScoreCount="decrementScoreCount"
            :updateComment="updateComment"
            :setCommentIdToDelete="setCommentIdToDelete"
            :addReply="addReply"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Comment from "@/components/Comment";
import { CommentId, Comment as IComment, User } from "@/types";

interface Props {
  comments: IComment[];
  currentUser: User | null;
  incrementScoreCount: (commentId: CommentId) => void;
  decrementScoreCount: (commentId: CommentId) => void;
  setCommentIdToDelete: (commentId: CommentId) => void;
  addReply: (content: string, comment: IComment) => void;
  updateComment: (text: string, commentId: CommentId) => void;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
@import "./Comments.scss";
</style>
