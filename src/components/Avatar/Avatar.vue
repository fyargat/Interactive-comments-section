<template>
  <div class="avatar__container">
    <img :src="src" alt="Avatar Image" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
}

const { src } = defineProps<Props>();
</script>

<style scoped lang="scss">
@import "./Avatar.scss";
</style>
