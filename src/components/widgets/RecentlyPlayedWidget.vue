<template>
  <div class="text-start font-bold text-white pb-5">Recently Played</div>
  <div
    class="flex flex-wrap text-start -mx-2"
    data-qa="lobby-widget-recently-played"
  >
    <template v-for="(item, index) in recentlyPlayed" :key="index">
      <RecentlyPlayedCard
        :type="item.type"
        :title="item.title"
        :url="item.url ?? ''"
        :subTitle="item.subTitle"
        :imageUrl="item.imageUrl ?? ''"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { recentlyPlayedData } from "../../models";
import RecentlyPlayedCard from "../cards/RecentlyPlayedCard.vue";

const recentlyPlayed = ref(recentlyPlayedData);
</script>
