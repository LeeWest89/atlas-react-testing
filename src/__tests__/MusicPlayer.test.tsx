import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import { expect, test, beforeEach, afterEach } from "vitest";
import MusicPlayer from "../components/MusicPlayer";

const renderMusicPlayer = () => render(<MusicPlayer />);

beforeEach(() => {
  renderMusicPlayer();
});

afterEach(() => {
  cleanup();
});

// Loading test
test("Load state render", async () => {
  await waitFor(() => {
    expect(screen.getByText("Loading...")).not.toBeNull();
  });
});

// Playlist test
test("Render playlist after datails loaded", async () => {
  await waitFor(() => {
    expect(screen.getByText("Painted in Blue")).not.toBeNull();
    expect(screen.getByText("Tidal Drift")).not.toBeNull();
    expect(screen.getByText("Fading Shadows")).not.toBeNull();
    expect(screen.getByText("Cosmic Drift")).not.toBeNull();
    expect(screen.getByText("Urban Serenade")).not.toBeNull();
    expect(screen.getByText("Whispers in the Wind")).not.toBeNull();
    expect(screen.getByText("Electric Fever")).not.toBeNull();
    expect(screen.getByText("Edge of the Abyss")).not.toBeNull();
    expect(screen.getByText("Golden Haze")).not.toBeNull();
    expect(screen.getByText("Shatter the Silence")).not.toBeNull();
  });
});

// Forward Button test
test("forward button should play next song on click", async () => {
  await waitFor(() => {
    expect(screen.queryAllByText("Painted in Blue").length).toBeGreaterThan(0);
  });

  const forwardButton = screen.getByRole('button', { name: /forward button/i });

  if (!forwardButton) {
    throw new Error('Forward button not found');
  }
  fireEvent.click(forwardButton);
  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Tidal Drift' })).not.toBeNull();
  });
});

// Backward Button test
test("forward button and backward button should play next/prev song on click", async () => {
  await waitFor(() => {
    expect(screen.queryAllByText("Painted in Blue").length).toBeGreaterThan(0);
  });

  const forwardButton = screen.getByRole('button', { name: /forward button/i });
  const backwardButton = screen.getByRole('button', { name: /backward button/i });

  if (!forwardButton) {
    throw new Error('Forward button not found');
  }
  fireEvent.click(forwardButton);
  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Tidal Drift' })).not.toBeNull();
  });

  if (!backwardButton) {
    throw new Error('Backward button not found');
  }
  fireEvent.click(backwardButton);
  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Painted in Blue' })).not.toBeNull();
  });
});

// ListItem test
test("should play song on click", async () => {
  await waitFor(() => {
    expect(screen.queryAllByText("Painted in Blue").length).toBeGreaterThan(0);
  });

  const itemList = screen.getAllByRole('listitem');
  const clickedItemList = itemList.find(item => item.textContent?.includes("Golden Haze"));

  if(!clickedItemList) {
    throw new Error('List item not found')
  }

  fireEvent.click(clickedItemList);

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 2, name: 'Golden Haze' })).not.toBeNull();
  });
});
