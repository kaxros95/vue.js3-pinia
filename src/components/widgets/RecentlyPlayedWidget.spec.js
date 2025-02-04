import { mount } from "@vue/test-utils";
import RecentlyPlayedWidget from "./RecentlyPlayedWidget.vue";
import { describe, it, expect, beforeEach } from "jest";

describe("RecentlyPlayedWidget.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RecentlyPlayedWidget, {
      props: {
        items: [
          { id: 1, title: "Song 1", artist: "Artist 1" },
          { id: 2, title: "Song 2", artist: "Artist 2" },
        ],
      },
    });
  });

  it("renders the correct number of items", () => {
    const items = wrapper.findAll(".recently-played-item");
    expect(items.length).toBe(2);
  });

  it("displays the correct title and artist for each item", () => {
    const items = wrapper.findAll(".recently-played-item");
    expect(items.at(0).text()).toContain("Song 1");
    expect(items.at(0).text()).toContain("Artist 1");
    expect(items.at(1).text()).toContain("Song 2");
    expect(items.at(1).text()).toContain("Artist 2");
  });

  it("emits an event when an item is clicked", async () => {
    const item = wrapper.find(".recently-played-item");
    await item.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("item-clicked");
    expect(wrapper.emitted("item-clicked")[0]).toEqual([
      { id: 1, title: "Song 1", artist: "Artist 1" },
    ]);
  });
});
