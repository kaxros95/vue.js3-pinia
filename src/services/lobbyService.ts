import { fetchLobbyResponse } from "@/api/virtualsAPIs/lobby";
import { LobbyResponse, Widget } from "@/models";

export async function fetchLobbyWidgets(): Promise<Widget[] | undefined> {
  try {
    const response: LobbyResponse | undefined = await fetchLobbyResponse();
    if (!response) return;
    return response?.data.widget;
  } catch (e) {
    console.log(e);
  }
}
