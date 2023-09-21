<template>
  <div>
    <DeleteCommentModal v-if="commentIdToDelete" />
    <div class="chat__wrap">
      <div class="chat__container">
        <Comments
          :comments="sortedComments"
          :currentUser="user"
          :incrementScoreCount="incrementScoreCount"
          :decrementScoreCount="decrementScoreCount"
          :updateComment="updateComment"
          :setCommentIdToDelete="setCommentIdToDelete"
          :addReply="addReply"
        />
        <MessageInput :currentUser="user" @addComment="addComment" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Comments from "@/components/Comments";
import DeleteCommentModal from "@/components/DeleteCommentModal";
import { useCommentStore } from "@/store/useCommentStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import MessageInput from "../MessageInput";

const commentStore = useCommentStore();

const { user, sortedComments, commentIdToDelete } = storeToRefs(commentStore);
const {
  fetchData,

  addComment,
  addReply,
  updateComment,

  decrementScoreCount,
  incrementScoreCount,

  setCommentIdToDelete,
} = commentStore;

onMounted(() => {
  if (!user.value || !sortedComments.value.length) {
    fetchData();
  }
});
</script>

<style scoped lang="scss">
@import "./Chat.scss";
</style>
@/components/DeleteCommentModal
