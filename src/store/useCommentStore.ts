import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

import { Comment, CommentId, User } from "@/types";

import { api } from "@/api";

import localStorage from "@/local-storage";

import {
  createComment,
  createReply,
  findCommentById,
  findParentCommentById,
} from "@/helpers/comment";

const USER_STORE_NAME = "user";
const COMMENTS_STORE_NAME = "comments";

const getUser = (): User | null => localStorage.get<User>(USER_STORE_NAME);

const getComments = (): Comment[] =>
  localStorage.get<Comment[]>(COMMENTS_STORE_NAME) ?? [];

export const useCommentStore = defineStore("comments", () => {
  const user = ref<User | null>(getUser());
  const comments = ref<Comment[]>(getComments());
  const commentIdToDelete = ref<CommentId | null>(null);

  const sortedComments = computed(() => {
    return comments.value.sort((a, b) => b.score - a.score);
  });

  const addComment = (content: string) => {
    const newComment: Comment = createComment(content, user.value!);
    comments.value.push(newComment);
  };

  const addReply = (content: string, comment: Comment) => {
    const parentComment = findParentCommentById(comments.value, comment.id);
    const newReply = createReply(content, user.value!, comment.user.username);
    parentComment?.replies?.push(newReply);
  };

  const updateComment = (text: string, commentId: CommentId) => {
    const comment = findCommentById(comments.value, commentId);

    if (!comment || comment.content === undefined) return;

    comment.content = text;
  };

  const setCommentIdToDelete = (commentId: CommentId) => {
    commentIdToDelete.value = commentId;
  };

  const cancelCommentDeletion = () => {
    commentIdToDelete.value = null;
  };

  const confirmCommentDeletion = () => {
    if (!commentIdToDelete.value) return;

    comments.value = comments.value.filter((comment) => {
      if (comment.replies && comment.replies.length) {
        comment.replies = comment.replies.filter(
          (reply) => reply.id !== commentIdToDelete.value,
        );
      }

      return comment.id !== commentIdToDelete.value;
    });

    commentIdToDelete.value = null;
  };

  const incrementScoreCount = (commentId: CommentId) => {
    const comment = findCommentById(comments.value, commentId);

    if (!comment || comment.score === undefined) return;
    if (comment.score === 999) return;

    comment.score++;
  };
  const decrementScoreCount = (commentId: CommentId) => {
    const comment = findCommentById(comments.value, commentId);

    if (!comment || comment.score === undefined) return;
    if (comment.score === 0) return;

    comment.score--;
  };

  const fetchData = async () => {
    try {
      const data = await api.fetchData();

      user.value = data.currentUser;
      comments.value = data.comments;

      localStorage.set(USER_STORE_NAME, data.currentUser);
      localStorage.set(COMMENTS_STORE_NAME, data.comments);
    } catch (error) {
      console.log("error", error);
    }
  };

  watch(
    comments,
    (newValue) => {
      localStorage.set(COMMENTS_STORE_NAME, newValue);
    },
    { deep: true },
  );

  return {
    fetchData,

    addComment,
    addReply,
    updateComment,

    decrementScoreCount,
    incrementScoreCount,

    setCommentIdToDelete,
    confirmCommentDeletion,
    cancelCommentDeletion,

    user,
    sortedComments,
    commentIdToDelete,
  };
});
