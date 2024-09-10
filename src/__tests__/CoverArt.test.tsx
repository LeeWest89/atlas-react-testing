import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";

// Test artUrl with api
test("CoverArt renders correctly with api", () => {
  const { container } = render(<CoverArt artUrl="https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp" />);
  expect(container).toMatchSnapshot();
});

// Test artUrl without api
test("CoverArt renders correctly without api", () => {
  const { container } = render(<CoverArt />);
  expect(container).toMatchSnapshot();
});