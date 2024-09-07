import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

export default function CurrentlyPlaying () {
  return (
    <div className="p-6 w-full min-h-[37rem] md:max-w-[25rem] md:h-[37rem] md:p-0 md:m-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}