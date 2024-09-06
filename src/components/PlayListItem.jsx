export default function PlayListItem () {
  return (
    <button className="w-full h-10 mb-[0.25rem] flex items-center justify-between">
      <div className="flex flex-col text-left">
        <p className="font-medium text-sm">Tidal Drift</p>
        <p className="font-medium text-sm text-gray-500">Echoes of the Sea</p>
      </div>
      <div>
        <p className="font-medium text-sm text-gray-400">8:02</p>
      </div>
    </button>
  );
}