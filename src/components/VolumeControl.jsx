import volume from "../assets/volume.svg";

export default function VolumeControl () {
  return (
    <div className="flex flex-row max-w-[42.9rem] md:max-w-[25rem] h-[1.5rem] items-center">
      <img src={volume} alt="volume icon" className="w-[1.1664375rem] h-[1.25rem]" />
      <input type="range" min="1" max="100" defaultValue="75" className="accent-gray-500 ml-2 w-full" />
    </div>
  );
}