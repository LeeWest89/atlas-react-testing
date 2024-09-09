import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";
import { Song } from "./MusicPlayer";

interface CurrentProps {
  song: Song | null;
  playlist: Song[];
  setCurrentSong: (song: Song) => void;
}

export default function CurrentlyPlaying ({ song, playlist, setCurrentSong }: CurrentProps) {
  return (
    <div className="p-6 w-full min-h-[37rem] bg-night-blue md:max-w-[25rem] md:h-[37rem] md:p-0 md:m-6">
      <CoverArt artUrl={song?.cover} />
      <SongTitle title={song?.title} artist={song?.artist} />
      <PlayControls currentSong={song} playlist={playlist} setCurrentSong={setCurrentSong} />
      <VolumeControl />
    </div>
  );
}