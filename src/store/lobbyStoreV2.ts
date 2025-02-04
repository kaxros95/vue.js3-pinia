import { Lobby } from "@/modelsV2";
import { defineStore } from "pinia";

export const useLobbyStore = defineStore("lobby", {
  state: () => ({
    lobby: {} as Lobby,
  }),

  getters: {
    allGames: (state) =>
      state.lobby.widgets.flatMap((widget) => widget.games || []),
  },

  actions: {
    async fetchLobbyData(apiUrl: string) {
      try {
        const response = await fetch(apiUrl);
        const data: Lobby = await response.json();
        this.lobby = data;
      } catch (error) {
        console.error("Failed to fetch lobby data:", error);
      }
    },
  },
});
