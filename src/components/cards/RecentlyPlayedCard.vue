<template>
  <a
    v-if="item.type === 1"
    :key="item.title"
    :href="item.url"
    class="w-[calc(50%-8px)] md:w-[calc(25%-8px)] flex px-2 m-1 py-2 border border-solid rounded-lg border-[#374456] bg-[#2d3745] h-[48px] no-underline cursor-pointer"
    data-qa="lobby-recently-played-item"
  >
    <div class="flex flex-col justify-center overflow-hidden">
      <div
        v-if="item.title"
        class="font-bold text-xs leading-s text-white overflow-hidden overflow-ellipsis whitespace-nowrap"
        data-qa="lobby-recently-played-item-title"
      >
        {{ item.title }}
      </div>
      <div
        v-if="item.subTitle"
        class="text-xs leading-xs text-white overflow-hidden whitespace-nowrap"
        data-qa="lobby-recently-played-item-subtitle"
      >
        {{ item.subTitle }}
      </div>
    </div>
  </a>
  <div
    v-else
    class="w-[calc(50%-8px)] md:w-[calc(25%-8px)] flex px-2 m-1 py-2 border border-solid rounded-lg border-[#374456] bg-[#2d3745] h-[48px] no-underline cursor-pointer bg-center bg-cover"
    data-qa="lobby-recently-played-item"
    :style="{
      'background-image': `linear-gradient(270deg, rgba(14, 14, 14, 0) 0%, #000000 100%), url(${item.imageUrl})`,
    }"
  >
    <div class="flex flex-col justify-center overflow-hidden">
      <div
        v-if="item.title"
        class="font-bold text-xs leading-s text-white overflow-hidden whitespace-nowrap"
        data-qa="lobby-recently-played-item-title"
      >
        {{ item.title }}
      </div>
      <div
        v-if="item.subTitle"
        class="text-xs leading-4 text-white overflow-hidden whitespace-nowrap"
        data-qa="lobby-recently-played-item-subtitle"
      >
        {{ item.subTitle }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const item = defineProps<{
  type: number;
  title: string;
  url: string;
  subTitle: string;
  imageUrl: string;
}>();
</script>
