<template>
  <div v-click-outside="handleClickOutside">
    <div
      class="comment__container"
      :class="{
        'comment__container--reply': isReply,
      }"
    >
      <div class="comment__left desktop-visible">
        <ScoreCount
          :count="comment.score"
          @increment="incrementScoreCount(comment.id)"
          @decrement="decrementScoreCount(comment.id)"
          :plusDisabled="comment.score === 999"
          :minusDisabled="comment.score === 0"
        />
      </div>
      <div class="comment__right">
        <div class="comment__header">
          <Avatar :src="avatarPath" />
          <h3 class="comment__user">
            {{ comment.user.username }}

            <span v-if="isCurrentUserComment" class="comment__user-current">
              you
            </span>
          </h3>
          <p class="comment__date">
            {{ formatDistanceToNow(new Date(comment.createdAt)) }}
          </p>

          <div class="comment__header-buttons desktop-visible">
            <div v-if="isCurrentUserComment" class="comment__user-buttons">
              <button
                @click="setCommentIdToDelete(comment.id)"
                class="comment__button comment-button comment-button--red"
              >
                <inline-svg
                  class="comment-button__icon"
                  :src="deleteIconPath"
                ></inline-svg>
                Delete
              </button>

              <button
                :disabled="isEdit"
                @click="isEdit = true"
                class="comment__button comment-button comment-button--blue"
              >
                <inline-svg
                  class="comment-button__icon"
                  :src="editIconPath"
                ></inline-svg>
                Edit
              </button>
            </div>
            <button
              @click="isReply = true"
              v-else
              class="comment__button comment-button comment-button--blue"
            >
              <inline-svg
                class="comment-button__icon"
                :src="replyIconPath"
              ></inline-svg>
              Reply
            </button>
          </div>
        </div>

        <div class="comment__edit-block" v-if="isEdit">
          <textarea
            class="comment__textarea"
            v-model.trim="text"
            v-focus
          ></textarea>
          <PrimaryButton @click="editComment" text="Update" />
        </div>
        <p v-else class="comment__text">
          <b class="comment__replying-to" v-if="comment.replyingTo"
            >@{{ comment.replyingTo }}</b
          >
          {{ comment.content }}
        </p>

        <div class="comment__footer desktop-invisible">
          <ScoreCount
            :count="comment.score"
            @increment="incrementScoreCount(comment.id)"
            @decrement="decrementScoreCount(comment.id)"
            :plusDisabled="comment.score === 999"
            :minusDisabled="comment.score === 0"
          />

          <div v-if="isCurrentUserComment" class="comment__user-buttons">
            <button class="comment__button comment-button comment-button--red">
              <inline-svg
                @click="setCommentIdToDelete(comment.id)"
                class="comment-button__icon"
                :src="deleteIconPath"
              ></inline-svg>
              Delete
            </button>

            <button
              :disabled="isEdit"
              @click="isEdit = true"
              class="comment__button comment-button comment-button--blue"
            >
              <inline-svg
                class="comment-button__icon"
                :src="editIconPath"
              ></inline-svg>
              Edit
            </button>
          </div>
          <button
            @click="isReply = true"
            v-else
            class="comment__button comment-button comment-button--blue"
          >
            <inline-svg
              class="comment-button__icon"
              :src="replyIconPath"
            ></inline-svg>
            Reply
          </button>
        </div>
      </div>
    </div>
    <MessageInput
      v-if="isReply"
      :currentUser="currentUser"
      @addComment="addReply"
    />
  </div>
</template>

<script setup lang="ts">
import { formatDistanceToNow } from "date-fns";
import { computed, ref } from "vue";
import InlineSvg from "vue-inline-svg";

import { Comment, CommentId, User } from "@/types";

import { getAvatarPath } from "@/helpers/avatar";

import Avatar from "@/components/Avatar";
import MessageInput from "@/components/MessageInput";
import PrimaryButton from "@/components/PrimaryButton";
import ScoreCount from "@/components/ScoreCount";

import deleteIconPath from "@/assets/images/icon-delete.svg";
import editIconPath from "@/assets/images/icon-edit.svg";
import replyIconPath from "@/assets/images/icon-reply.svg";

interface Props {
  currentUser: User | null;
  comment: Comment;
  incrementScoreCount: (commentId: CommentId) => void;
  decrementScoreCount: (commentId: CommentId) => void;
  setCommentIdToDelete: (commentId: CommentId) => void;
  addReply: (content: string, comment: Comment) => void;
  updateComment: (text: string, commentId: CommentId) => void;
}

const props = defineProps<Props>();

const isEdit = ref<boolean>(false);
const isReply = ref<boolean>(false);
const text = ref<string>(props.comment.content);

const avatarPath = computed(() =>
  getAvatarPath(props.comment.user?.image.webp),
);
const isCurrentUserComment =
  props.currentUser?.username === props.comment.user.username;

const editComment = () => {
  const textValue = text.value;
  if (textValue && textValue !== props.comment.content) {
    props.updateComment(textValue, props.comment.id);
  } else {
    text.value = props.comment.content;
  }

  isEdit.value = false;
};

const addReply = (content: string) => {
  props.addReply(content, props.comment);
  isReply.value = false;
};

const handleClickOutside = () => {
  isEdit.value = false;
  isReply.value = false;
};
</script>

<style scoped>
@import "./Comment.scss";
</style>
