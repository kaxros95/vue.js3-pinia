import { GameLaunch } from "@/modelsV2";
import { defineStore } from "pinia";

export const useGameLaunchStore = defineStore("gameLaunch", {
  state: () => ({
    gameLaunch: {} as GameLaunch,
  }),

  actions: {
    async fetchGameLaunchData(apiUrl: string) {
      try {
        const response = await fetch(apiUrl);
        const data: GameLaunch = await response.json();
        this.gameLaunch = data;
      } catch (error) {
        console.error("Failed to fetch game launch data:", error);
      }
    },
  },
});
