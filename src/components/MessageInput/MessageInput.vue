<template>
  <div class="message-input__container">
    <form @submit.prevent="submit">
      <div class="message-input__header">
        <Avatar
          class="message-input__avatar--desktop desktop-visible"
          :src="avatarPath"
        />

        <textarea
          placeholder="Add a comment..."
          class="message-input__textarea"
          v-model.trim="textareaValue"
        ></textarea>

        <PrimaryButton text="Send" class="desktop-visible" type="submit" />
      </div>
      <div class="message-input__footer">
        <Avatar :src="avatarPath" />

        <PrimaryButton text="Send" type="submit" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { getAvatarPath } from "@/helpers/avatar";
import { User } from "@/types";
import { computed, ref } from "vue";
import Avatar from "../Avatar";
import PrimaryButton from "../PrimaryButton";

interface Props {
  currentUser: User | null;
}

const textareaValue = ref<string>("");

const props = defineProps<Props>();

const emit = defineEmits();

const avatarPath = computed(() => getAvatarPath(props.currentUser?.image.webp));

const submit = () => {
  if (!textareaValue.value) return;

  emit("addComment", textareaValue.value);

  textareaValue.value = "";
};
</script>

<style scoped>
@import "./MessageInput.scss";
</style>
