import { LobbyResponse } from "@/models";
import { httpClient } from "../httpClient";

export const fetchLobbyResponse = async () => {
  try {
    const response = await httpClient.get<LobbyResponse>(
      `https://develop-v3-br-staging-c0j9vocf.betano.com/api/virtuals`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
