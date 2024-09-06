import backward from '../assets/backward.svg';
import play from '../assets/play.svg';
import forward from '../assets/forward.svg';
import shuffle from '../assets/shuffle.svg';

export default function PlayControls () {
  return (
    <div className='font-bold flex flex-row items-center h-[3rem] justify-between w-[25rem]'>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <p className='text-lg'>1x</p>
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <img src={backward} alt="backward button" className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="rounded w-[3rem] h-[3rem] flex items-center justify-center border-[2px] border-black">
        <img src={play} alt="play button" className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <img src={forward} alt="forward button" className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <img src={shuffle} alt="shuffle button" className="w-[1.5rem] h-[1.5rem]" />
      </button>
    </div>
  );
}
