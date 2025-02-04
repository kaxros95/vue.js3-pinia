import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LobbyPage from "../views/LobbyPage.vue";
import GamesCategoryPage from "@/views/GamesCategoryPage.vue";
import GameLaunchPage from "../views/GameLaunchPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/lobby",
    name: "lobby",
    component: LobbyPage,
  },
  {
    path: "/games",
    name: "games",
    component: GamesCategoryPage,
  },
  {
    path: "/gameLaunch",
    name: "gameLaunch",
    component: GameLaunchPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
