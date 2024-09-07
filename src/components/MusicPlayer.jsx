import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col max-w-[42.9rem] min-h-[40rem] bg-night-blue shadow-lg rounded-lg md:max-w-[56rem] md:w-full md:flex-row">
      <CurrentlyPlaying />
      {/* Vertical gray border */}
      <div className="border-b-2 border-deep-yellow w-full md:h-[40rem] md:w-0 md:border-l-2"></div>
      <Playlist />
    </div>
  );
}
