import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GamesWidget from "../GamesWidget.vue";
import { sportsGridData } from "../../models";

describe("GamesWidget.vue", () => {
  it("renders the correct number of games", () => {
    const wrapper = mount(GamesWidget);
    const gameCount = sportsGridData.length;
    expect(wrapper.find("b.font-bold").text()).toBe(gameCount.toString());
  });

  it("renders the correct number of SwiperSlide components", () => {
    const wrapper = mount(GamesWidget);
    const slides = wrapper.findAllComponents({ name: "SwiperSlide" });
    expect(slides.length).toBe(sportsGridData.length);
  });

  it("passes the correct props to GamesCard components", () => {
    const wrapper = mount(GamesWidget);
    const gamesCards = wrapper.findAllComponents({ name: "GamesCard" });
    gamesCards.forEach((card, index) => {
      expect(card.props().imageUrl).toBe(sportsGridData[index].imageUrl);
      expect(card.props().title).toBe(sportsGridData[index].title);
      expect(card.props().gameType).toBe(sportsGridData[index].gameType);
    });
  });
});
