import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { expect, test, beforeAll, beforeEach, afterEach, afterAll } from "vitest";
import { server } from "../../mock";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";

beforeEach(() => {
  render(<MusicPlayer />);
});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

// Loading test
test("Load state render", async () => {
  await waitFor(() => {
    expect(screen.getByText("Loading...")).not.toBeNull();
  });
});

// Backward Button test
test("forward button and backward button should play next/prev song on click", async () => {
  await waitFor(() => {
    expect(screen.queryAllByText("Title 1").length).toBeGreaterThan(0);
  });

  const forwardButtons = screen.getAllByRole('button', { name: /forward button/i });
  const forwardButton = forwardButtons[0];
  const backwardButtons = screen.getAllByRole('button', { name: /backward button/i });
  const backwardButton = backwardButtons[0];

  if (!forwardButton) {
    throw new Error('Forward button not found');
  }
  await waitFor(() => {
    fireEvent.click(forwardButton);
  });

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Title 2' })).not.toBeNull();
  });

  if (!backwardButton) {
    throw new Error('Backward button not found');
  }
  await waitFor(() => {
    fireEvent.click(forwardButton);
  });

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Title 1' })).not.toBeNull();
  });
});

// Shuffle image toogle test
test("shuffle button should toggle on click", async () => {
  const shuffleButtonImgs = screen.getAllByRole('img', { name: /shuffle button/i });
  const shuffleButtonImg = shuffleButtonImgs[0];

  expect(shuffleButtonImg.getAttribute('src')).toBe('/src/assets/shuffle.svg');
  fireEvent.click(shuffleButtonImg);
  expect(shuffleButtonImg.getAttribute('src')).toBe('/src/assets/activeShuffle.svg');
  fireEvent.click(shuffleButtonImg);
  expect(shuffleButtonImg.getAttribute('src')).toBe('/src/assets/shuffle.svg');
});

// ListItem test
test("should play song on click", async () => {
  await waitFor(() => {
    expect(screen.queryAllByText("Title 1").length).toBeGreaterThan(0);
  });

  const itemList = screen.getAllByRole('listitem');
  const clickedItemList = itemList.find(item => item.textContent?.includes('Title 9'));

  if(!clickedItemList) {
    throw new Error('List item not found')
  }

  fireEvent.click(clickedItemList);

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Title 9' })).not.toBeNull();
  });
});

// Footer render test
test("Footer renders the current year and correct text", () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Atlas School`;

  expect(screen.getByText(footerText)).not.toBeNull();
});