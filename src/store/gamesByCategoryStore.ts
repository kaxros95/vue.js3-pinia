import { GamesByCategory } from "@/modelsV2";
import { defineStore } from "pinia";

export const useGamesByCategoryStore = defineStore("gamesByCategory", {
  state: () => ({
    gamesByCategory: {} as GamesByCategory,
  }),

  getters: {
    gamesByType: (state) => (type: string) =>
      state.gamesByCategory.games.filter((game) => game.gameType === type),
  },

  actions: {
    async fetchGamesByCategoryData(apiUrl: string) {
      try {
        const response = await fetch(apiUrl);
        const data: GamesByCategory = await response.json();
        this.gamesByCategory = data;
      } catch (error) {
        console.error("Failed to fetch games by category data:", error);
      }
    },
  },
});
