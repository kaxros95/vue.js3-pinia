import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GamesCard from "./GamesCard.vue";

describe("GamesCard.vue", () => {
  const item = {
    imageUrl: "https://example.com/image.jpg",
    title: "Example Game",
    gameType: "Puzzle",
  };

  it("renders the image with correct src and alt attributes", () => {
    const wrapper = mount(GamesCard, {
      props: { item },
    });
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe(item.imageUrl);
    expect(img.attributes("alt")).toBe(item.title);
  });

  it("renders the title correctly", () => {
    const wrapper = mount(GamesCard, {
      props: { item },
    });
    const titleSpan = wrapper.find("span:nth-of-type(1)");
    expect(titleSpan.text()).toBe(item.title);
  });

  it("renders the game type correctly", () => {
    const wrapper = mount(GamesCard, {
      props: { item },
    });
    const gameTypeSpan = wrapper.find("span:nth-of-type(2)");
    expect(gameTypeSpan.text()).toBe(item.gameType);
  });
});
