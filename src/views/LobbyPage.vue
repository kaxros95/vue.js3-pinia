<template>
  <div class="lobby-container px-5 max-w-[1440px] mx-auto">
    <div class="grid">
      <TopPicks />
      <RecentlyPlayed />
      <GamesWidget />
      <RacingWidget />
    </div>
  </div>
</template>

<script setup lang="ts">
import GamesWidget from "@/components/widgets/GamesWidget.vue";
import RecentlyPlayed from "@/components/widgets/RecentlyPlayedWidget.vue";
import TopPicks from "@/components/widgets/TopPicksWidget.vue";
import { onMounted } from "vue";
import { useLobbyWidgets } from "@/store/useLobbyWidgets";
import RacingWidget from "@/components/widgets/RacingWidget.vue";

const { initLobbyWidgets } = useLobbyWidgets();

onMounted(async () => {
  await initLobbyWidgets();
});
</script>
