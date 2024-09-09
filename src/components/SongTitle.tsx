interface SongProp {
  title?: string;
  artist?: string;
}

export default function SongTitle ({ title, artist }: SongProp) {
  return (
    <div>
      <h2 className="font-bold leading-8 mb-2 text-2xl text-deep-yellow">{title || "Unknown Title"}</h2>
      <p className="mb-4 text-wing-red">{artist || "Unknown Artist"}</p>
    </div>
  );
}