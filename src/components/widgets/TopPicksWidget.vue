<template>
  <div class="text-start font-bold py-3 text-white">Top Picks</div>
  <Swiper
    :slidesPerView="'auto'"
    :spaceBetween="10"
    :grabCursor="true"
    :freeMode="true"
    class="w-full py-5"
  >
    <SwiperSlide
      v-for="item in topPicks"
      :key="item.sportId"
      class="shrink-0 w-[140px] h-[227px]"
    >
      <TopPicksCard
        :isNew="item.isNew"
        :subTitle="item.subTitle"
        :imageUrl="item.imageUrl"
        :title="item.title"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { topPicksData } from "../../models";
// import { useLobbyWidgets } from "@/store/useLobbyWidgets";
import TopPicksCard from "../cards/TopPicksCard.vue";

const topPicks = ref(topPicksData);

// const { getWidgetsByType } = useLobbyWidgets();
// const topPicksFromService = getWidgetsByType(2);
// console.log("topPicksV2", topPicksFromService);
</script>
