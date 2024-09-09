import { Song } from "./MusicPlayer";

interface listItemProp {
  song: Song;
  isSelected: boolean;
  onSelect: () => void;
}

export default function PlayListItem ({ song, isSelected, onSelect }: listItemProp) {
  return (
    <li onClick={onSelect} className={`w-full h-10 mb-[0.25rem] flex items-center justify-between ${isSelected ? 'bg-lightning-blue': 'hover:bg-lightning-blue'} transition-colors duration-300`}>
      <div className="flex flex-col text-left">
        <p className="font-medium text-sm text-deep-yellow">{song.title}</p>
        <p className="font-medium text-sm text-wing-red">{song.artist}</p>
      </div>
      <div>
        <p className="font-medium text-sm text-wing-red">{song.duration}</p>
      </div>
    </li>
  );
}