<template>
  <Swiper
    :slidesPerView="'auto'"
    :spaceBetween="15"
    :grabCursor="true"
    :freeMode="true"
    class="w-full py-5"
  >
    <SwiperSlide
      v-for="item in items"
      :key="item.sportId"
      class="shrink-0 w-[140px] h-[227px]"
    >
      <slot />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { defineProps } from "vue";

defineProps<{
  items: Array<{
    sportId: string;
    title: string;
    subTitle: string;
    imageUrl: string;
    isNew?: boolean;
  }>;
}>();
</script>
