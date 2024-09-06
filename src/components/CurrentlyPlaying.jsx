import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

export default function CurrentlyPlaying () {
  return (
    <div className="m-6 max-w-[25rem] h-[37rem]">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}