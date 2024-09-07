import PlayListItem from "./PlayListItem";

export default function Playlist () {
  return (
    <div className="p-6 w-full min-h-[37rem] bg-night-blue md:p-0 md:m-6 md:max-w-[25rem] md:h-[37rem]">
      <h3 className="font-semibold mb-4 text-lg text-deep-yellow">Playlist</h3>
      <ul className="mr-4">
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </ul>
    </div>
  );
}