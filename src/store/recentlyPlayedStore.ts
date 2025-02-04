import { RecentlyPlayed } from "@/modelsV2";
import { defineStore } from "pinia";

export const useRecentlyPlayedStore = defineStore("recentlyPlayed", {
  state: () => ({
    recentlyPlayed: {} as RecentlyPlayed,
  }),

  actions: {
    async fetchRecentlyPlayedData(apiUrl: string) {
      try {
        const response = await fetch(apiUrl);
        const data: RecentlyPlayed = await response.json();
        this.recentlyPlayed = data;
      } catch (error) {
        console.error("Failed to fetch recently played data:", error);
      }
    },
  },
});
