import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useSelectedGameStore = defineStore("selectedGame", () => {
  const router = useRouter();

  const gameName = ref("");

  const launchGame = (name: string) => {
    gameName.value = name;
    router.push("/gameLaunch");
  };

  return {
    gameName,
    launchGame,
  };
});
