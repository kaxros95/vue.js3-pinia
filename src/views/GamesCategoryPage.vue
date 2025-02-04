<template>
  <div class="lobby-container px-5 max-w-[1440px] mx-auto">
    <div class="grid">
      <div class="flex flex-row pb-6" data-qa="lobby-games-page-header">
        <button
          class="bg-transparent text-white hover:scale-110 pr-3"
          @click="onCloseGame"
        >
          <BackArrow />
        </button>
        <div>
          <div class="font-bold text-lg text-start text-white">Sports</div>
          <div
            class="flex items-center bg-n-22-licorice text-white text-xs leading-s px-nm"
          >
            {{ games.length + " Games" }}
          </div>
        </div>
      </div>
      <div
        class="grid gap-4 lg:grid-cols-5 grid-cols-2 md:grid-cols-3 overflow-hidden"
        data-qa="lobby-games-page-grid"
      >
        <GridGamesCard
          v-for="item in games"
          :key="item.id"
          :imageUrl="item.imageUrl"
          :title="item.title"
          :gameType="item.gameType"
          @click="onGameClick(item)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Game, sportsGridData } from "../models";
import GridGamesCard from "@/components/cards/GridGamesCard.vue";
import "swiper/css";
import BackArrow from "@/assets/svgs/BackArrow.vue";
import { useSelectedGameStore } from "@/store/useSelectedGameStore";

const { launchGame } = useSelectedGameStore();

const onGameClick = (game: Game) => {
  launchGame(game.title);
};

const onCloseGame = () => {
  window.history.back();
};
const games = ref(sportsGridData);
</script>
