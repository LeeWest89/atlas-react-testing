export default function PlayListItem () {
  return (
    <button className="w-full h-10 mb-[0.25rem] flex items-center justify-between hover:bg-lightning-blue transition-colors duration-300">
      <div className="flex flex-col text-left">
        <p className="font-medium text-sm text-deep-yellow">Tidal Drift</p>
        <p className="font-medium text-sm text-wing-red">Echoes of the Sea</p>
      </div>
      <div>
        <p className="font-medium text-sm text-wing-red">8:02</p>
      </div>
    </button>
  );
}