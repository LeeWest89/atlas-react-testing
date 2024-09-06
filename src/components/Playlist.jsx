import PlayListItem from "./PlayListItem";

export default function Playlist () {
  return (
    <div className="m-6 w-[25rem] h-[37rem]">
      <h3 className="font-semibold mb-4 text-lg">Playlist</h3>
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