<template>
  <button :title="text" class="button">{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
@import "./PrimaryButton.scss";
</style>
