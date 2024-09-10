import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";

//  Test SongTitle with title and artist
test("SongTitle with title and artist passed", () => {
  const { container } = render (
    <SongTitle title="Tidal Drift" artist="Echoes of the Sea" />
  );
  expect(container).toMatchSnapshot();
});

//  Test SongTitle with title and no artist
test("SongTitle with title and no artist passed", () => {
  const { container } = render (
    <SongTitle title="Tidal Drift" />
  );
  expect(container).toMatchSnapshot();
});

//  Test SongTitle with no title and an artist
test("SongTitle with title and no artist passed", () => {
  const { container } = render (
    <SongTitle artist="Echoes of the Sea" />
  );
  expect(container).toMatchSnapshot();
});

// Test SongTitle nothing passed
test("SongTitle with title and no artist passed", () => {
  const { container } = render (
    <SongTitle />
  );
  expect(container).toMatchSnapshot();
});
