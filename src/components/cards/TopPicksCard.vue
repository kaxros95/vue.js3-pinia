<template>
  <div
    class="flex flex-col w-[140px] h-[227px] cursor-pointer no-underline overflow-hidden rounded"
  >
    <div
      class="absolute w-[140px] leading-s text-center pt-xs z-10"
      :class="{ 'pt-l': !item.isNew }"
    >
      <div v-if="item.isNew" class="flex justify-center pb-xs">
        <div class="text-white rounded-xl px-n py-xs bg-red-500">New</div>
      </div>
      <div
        v-if="item.title"
        class="text-white font-bold text-ellipsis text-s leading-s"
      >
        {{ item.title }}
      </div>
      <div
        v-if="item.subTitle"
        class="text-white overflow-hidden text-ellipsis whitespace-nowrap text-xxs leading-s-xs"
      >
        {{ item.subTitle }}
      </div>
    </div>
    <div
      class="flex flex-col transition-transform px-s cursor-pointer bg-center bg-cover h-full hover:scale-110 hover:opacity-50"
      :style="{
        'background-image': `linear-gradient(180deg, rgba(0, 0, 0, 0) 50.4%, #000000 103.6%), url(${item.imageUrl})`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const item = defineProps<{
  isNew: boolean | undefined;
  title: string;
  subTitle: string;
  imageUrl: string;
}>();
</script>
