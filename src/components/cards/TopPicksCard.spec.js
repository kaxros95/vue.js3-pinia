import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import TopPicksCard from "./TopPicksCard.vue";

describe("TopPicksCard", () => {
  it("renders the component", () => {
    render(TopPicksCard);
    expect(screen.getByTestId("top-picks-card")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    const title = "Top Picks";
    render(TopPicksCard, {
      props: { title },
    });
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders the correct number of items", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    render(TopPicksCard, {
      props: { items },
    });
    expect(screen.getAllByTestId("top-pick-item")).toHaveLength(items.length);
  });

  it("displays the correct item names", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    render(TopPicksCard, {
      props: { items },
    });
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
