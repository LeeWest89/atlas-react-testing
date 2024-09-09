import PlayListItem from "./PlayListItem";
import { Song } from "./types";

interface PlayListProp{
  playlist: Song[];
  currentSong: Song | null;
  songSelected: (song: Song) => void;
}

export default function Playlist ({ playlist, currentSong, songSelected }: PlayListProp) {
  return (
    <div className="p-6 w-full min-h-[37rem] bg-night-blue md:p-0 md:m-6 md:max-w-[25rem] md:h-[37rem]">
      <h3 className="font-semibold mb-4 text-lg text-deep-yellow">Playlist</h3>
      <ul className="mr-4">
        {playlist.map(song => (
          <PlayListItem key={song.id} song={song} isSelected={currentSong?.id ===song.id} onSelect={() => songSelected(song)} />
        ))}
      </ul>
    </div>
  );
}