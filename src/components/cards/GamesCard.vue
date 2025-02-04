<template>
  <div
    class="min-w-[50px] flex flex-col text-start cursor-pointer"
    data-qa="lobby-games-card"
  >
    <div
      class="overflow-hidden object-cover rounded max-h-24"
      data-qa="lobby-games-card-image"
    >
      <img :src="item.imageUrl" class="min-w-[50px]" :alt="item.title" />
    </div>
    <span
      class="mt-2 font-medium text-xs leading-xs text-white whitespace-nowrap overflow-hidden text-ellipsis"
      data-qa="lobby-games-card-title"
    >
      {{ item.title }}
    </span>
    <span
      class="mt-xs text-xs leading-xs text-[#c9c9c9] whitespace-nowrap overflow-hidden text-ellipsis"
      data-qa="lobby-games-card-game-type"
    >
      {{ item.gameType }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const item = defineProps<{
  imageUrl: string;
  title: string;
  gameType: string;
}>();
</script>
