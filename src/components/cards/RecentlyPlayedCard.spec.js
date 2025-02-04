import { mount } from "@vue/test-utils";
import RecentlyPlayedCard from "./RecentlyPlayedCard.vue";
import { describe, it, expect, beforeEach } from "vitest";

describe("RecentlyPlayedCard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RecentlyPlayedCard, {
      props: {
        type: 1,
        title: "FOOTBALL",
        url: "#",
        subTitle: "STARS LEAGUE",
        imageUrl: "",
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays the correct title", () => {
    const title = "Recently Played";
    wrapper.setProps({ title });
    expect(wrapper.find(".card-title").text()).toBe(title);
  });

  it("renders the correct number of items", () => {
    const items = [
      { id: 1, name: "Song 1" },
      { id: 2, name: "Song 2" },
    ];
    wrapper.setProps({ items });
    expect(wrapper.findAll(".item").length).toBe(items.length);
  });

  it("emits an event when an item is clicked", async () => {
    const items = [
      { id: 1, name: "Song 1" },
      { id: 2, name: "Song 2" },
    ];
    wrapper.setProps({ items });
    await wrapper.find(".item").trigger("click");
    expect(wrapper.emitted("item-clicked")).toBeTruthy();
  });
});
