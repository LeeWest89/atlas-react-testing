import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row max-w-[56rem] min-h-[40rem] mx-auto items-center justify-between shadow-lg rounded-lg">
      <CurrentlyPlaying />

      {/* Vertical gray border */}
      <div className="border-l border-gray-200 h-full"></div>

      <Playlist />
    </div>
  );
}
