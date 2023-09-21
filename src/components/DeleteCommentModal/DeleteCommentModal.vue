<template>
  <div class="modal__overlay" @mousedown="cancelCommentDeletion">
    <div class="modal__content" @mousedown.stop="">
      <h2 class="modal__title">Delete Comment</h2>
      <p class="modal__text">
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </p>
      <div class="modal__buttons">
        <button
          @click="cancelCommentDeletion"
          class="modal__button modal__button--cancel"
        >
          No, cancel
        </button>
        <button
          @click="confirmCommentDeletion"
          class="modal__button modal__button--confirm"
        >
          Yes, delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommentStore } from "@/store/useCommentStore";

const commentStore = useCommentStore();

const { confirmCommentDeletion, cancelCommentDeletion } = commentStore;
</script>

<style scoped>
@import "./DeleteCommentModal.scss";
</style>
