import placeHolder from '../assets/placeholder.svg';

export default function CoverArt () {
  return (
    <div className='flex h-[25rem] w-[25rem] mb-6'>
      <img src={placeHolder} alt="placeholder" />
    </div>
  );
}