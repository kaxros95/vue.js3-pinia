<template>
  <div
    class="flex justify-between items-center pb-l"
    data-qa="lobby-games-widget-header"
  >
    <div class="py-4 font-bold text-white">Virtual Racing</div>
    <a
      href="/#/games"
      class="flex items-center cursor-pointer no-underline"
      data-qa="lobby-games-widget-view-all"
    >
      <div
        class="flex items-center bg-[#2D3745] rounded-[48px] text-white text-s leading-s pl-4 pr-2 py-2"
      >
        <div class="font-bold text-sm mr-1">{{ games.length }}</div>
        <RightArrow />
      </div>
    </a>
  </div>
  <Swiper
    v-if="isMobile"
    data-qa="lobby-games-widget-swiper"
    :slidesPerView="2.2"
    :spaceBetween="10"
    class="w-full py-4"
    :modules="[Grid]"
    :freeMode="true"
    :grid="{ rows: games.length > 6 ? 2 : 1, fill: 'row' }"
  >
    <SwiperSlide
      v-for="item in games"
      :key="item.id"
      class="shrink-0 w-[177px]"
    >
      <GamesCard
        :imageUrl="item.imageUrl"
        :title="item.title"
        :gameType="item.gameType"
      />
    </SwiperSlide>
  </Swiper>
  <div
    v-else
    class="grid gap-4 grid-cols-12 overflow-hidden max-h-[295px] auto-rows-[140px]"
    data-qa="lobby-games-widget-grid"
  >
    <GridGamesCard
      v-for="item in games"
      :key="item.id"
      class="col-span-6 md:col-span-3 lg:col-span-2"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :gameType="item.gameType"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid } from "swiper/modules";
import { racingGridData } from "../../models";
import GamesCard from "../cards/GamesCard.vue";
import GridGamesCard from "../cards/GridGamesCard.vue";
import { isMobileDevice } from "@/functions/isMobile";
import "swiper/css";
import "swiper/css/grid";
import RightArrow from "@/assets/svgs/RightArrow.vue";

const games = ref(racingGridData);
const isMobile = isMobileDevice();
</script>
