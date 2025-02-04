import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchLobbyWidgets } from "@/services/lobbyService";
import { Widget } from "@/models";

export const useLobbyWidgets = defineStore("lobbyWidgets", () => {
  const lobbyWidgets = ref<Widget[] | []>([]);

  async function retrieveLobbyWidgets() {
    const result = await fetchLobbyWidgets();
    lobbyWidgets.value = result || [];
  }

  async function initLobbyWidgets() {
    await retrieveLobbyWidgets();
  }

  function setLobbyWidgets(value: Widget[]) {
    lobbyWidgets.value = value;
  }

  function getWidgetsByType(type: number) {
    const filteredWidget = lobbyWidgets.value.filter(
      (widget: Widget) => widget.widgetType === type
    );

    console.log("filteredWidget", filteredWidget);
    return filteredWidget;
  }

  return {
    lobbyWidgets,
    getWidgetsByType,
    retrieveLobbyWidgets,
    initLobbyWidgets,
    setLobbyWidgets,
  };
});
