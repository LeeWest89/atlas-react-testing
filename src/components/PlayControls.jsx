import backward from '../assets/backward.svg';
import play from '../assets/play.svg';
import forward from '../assets/forward.svg';
import shuffle from '../assets/shuffle.svg';

export default function PlayControls () {
  return (
    <div className='flex flex-row justify-between items-center h-[3rem] max-w-[42.9rem] md:max-w-[25rem] mb-4'>
      <button className="font-medium w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <p className='text-lg'>1x</p>
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center">
        <img src={backward} alt="backward button" className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="rounded-lg w-[3.3rem] h-[3.3rem] flex items-center justify-center border-[3px] border-black">
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
