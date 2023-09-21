<template>
  <div class="score-count__container">
    <button
      :disabled="plusDisabled"
      @click="$emit('increment')"
      class="score-count__button"
    >
      <inline-svg class="score-count__icon" :src="plusIconPath"></inline-svg>
    </button>
    <p class="score-count__number">{{ count }}</p>
    <button
      :disabled="minusDisabled"
      @click="$emit('decrement')"
      class="score-count__button"
    >
      <inline-svg class="score-count__icon" :src="minusIconPath"></inline-svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import InlineSvg from "vue-inline-svg";

import minusIconPath from "@/assets/images/icon-minus.svg";
import plusIconPath from "@/assets/images/icon-plus.svg";

interface Props {
  count: number;
  plusDisabled: boolean;
  minusDisabled: boolean;
}

defineProps<Props>();
</script>

<style scoped src="./ScoreCount.scss" lang="scss">
@import "./ScoreCount.scss";
</style>
