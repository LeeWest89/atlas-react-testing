import placeHolder from '../assets/placeholder.svg';

interface ArtProp {
  artUrl?: string;
}

export default function CoverArt ({ artUrl }: ArtProp) {
  return (
    <div className='flex max-h-[39.9rem] md:h-[25rem] max-w-[39.9rem] md:max-w-[25rem] mb-6'>
      <img src={artUrl || placeHolder} alt="Song Art" />
    </div>
  );
}