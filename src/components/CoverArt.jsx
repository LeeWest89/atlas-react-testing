import placeHolder from '../assets/placeholder.svg';

export default function CoverArt () {
  return (
    <div className='flex h-[25rem] max-w-[25rem] mb-6'>
      <img src={placeHolder} alt="placeholder" />
    </div>
  );
}