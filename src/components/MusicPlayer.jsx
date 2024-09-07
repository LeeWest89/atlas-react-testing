import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[40rem] shadow-lg rounded-lg max-w-[42.9rem] md:flex-row md:max-w-[56rem]">
      <CurrentlyPlaying />

      {/* Vertical gray border */}
      <div className="border-b-2 border-gray-200 w-full md:w-0 md:h-[40rem] md:border-l-2"></div>

      <Playlist />
    </div>
  );
}
