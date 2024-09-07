import placeHolder from '../assets/placeholder.svg';

export default function CoverArt () {
  return (
    <div className='flex max-h-[39.9rem] md:h-[25rem] max-w-[39.9rem] md:max-w-[25rem] mb-6'>
      <img src={placeHolder} alt="placeholder" />
    </div>
  );
}