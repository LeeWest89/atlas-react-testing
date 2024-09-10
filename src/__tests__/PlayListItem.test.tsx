import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem";

//  Test PlayListItem is selected
test("Selected PlayListItem renders correctly", () => {
  const { container } = render (
    <PlayListItem song={{ id: 2, title: "Tidal Drift", artist: "Echoes of the Sea", genre:"Ambient", duration: "8:02", cover: "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp" }} isSelected={true} onSelect={() => {}} />
  );
  expect(container).toMatchSnapshot();
});

// Test PlayListItem is unselected
test("Unselected PlayListItem renders correctly", () => {
  const { container } = render (
    <PlayListItem song={{ id: 2, title: "Tidal Drift", artist: "Echoes of the Sea", genre:"Ambient", duration: "8:02", cover: "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp" }} isSelected={false} onSelect={() => {}} />
  );
  expect(container).toMatchSnapshot();
});
