import { useState } from 'react';
import backward from '../assets/backward.svg';
import backwardDisabled from '../assets/backwardDisabled.svg';
import play from '../assets/play.svg';
import pause from '../assets/pause.svg';
import forward from '../assets/forward.svg';
import forwardDisabled from '../assets/forwardDisabled.svg';
import shuffle from '../assets/shuffle.svg';
import activeShuffle from '../assets/activeShuffle.svg';
import { Song } from './MusicPlayer';

interface ControlProps {
  playlist: Song[];
  currentSong: Song | null;
  setCurrentSong: (song: Song) => void;
}

export default function PlayControls({ playlist=[], currentSong, setCurrentSong}: ControlProps) {

  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const handleSpeed = () => {
    setSpeed((prevSpeed) => (prevSpeed === 3 ? 1 : prevSpeed + 1));
  };

  const handlePause = () => {
    setPlaying(prevState => !prevState);
  };

  const handleShuffle = () => {
    setIsShuffle(prev => !prev);
  }

  const handleBack = () => {
    if (playlist.length > 0 && currentSong) {
      const songIndex = playlist.findIndex(song => song.id === currentSong.id);
      if (isShuffle) {
        const ranIndex = Math.floor(Math.random() * playlist.length);
        setCurrentSong(playlist[ranIndex]);
      } else if (songIndex > 0) {
        setCurrentSong(playlist[songIndex - 1]);
      }
    }
  };

  const handleForward = () => {
    if (playlist.length > 0 && currentSong) {
      const songIndex = playlist.findIndex(song => song.id === currentSong.id);
      if (isShuffle) {
        const ranIndex = Math.floor(Math.random() * playlist.length);
        setCurrentSong(playlist[ranIndex]);
      } else if (songIndex < playlist.length - 1) {
        setCurrentSong(playlist[songIndex + 1]);
      }
    }
  };

  const firstSong = playlist.length > 0 && currentSong ? playlist[0].id === currentSong.id : false;
  const lastSong = playlist.length > 0 && currentSong ? playlist[playlist.length -1].id === currentSong.id : false;

  return (
    <div className="flex flex-row justify-between items-center h-[3rem] max-w-[42.9rem] md:max-w-[25rem] mb-4">
      <button className="font-medium w-[2.5rem] h-[2.5rem] flex items-center justify-center" onClick={handleSpeed}>
        <p className='text-lg text-deep-yellow'>{speed}x</p>
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center" onClick={handleBack} disabled={isShuffle ? false : firstSong} aria-label="backward button">
        <img src={!isShuffle && firstSong ? backwardDisabled : backward} alt="backward icon" className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="rounded-lg border-[3px] border-deep-yellow w-[3.3rem] h-[3.3rem] flex items-center justify-center" onClick={handlePause}>
        <img src={playing ? pause : play} alt={play ? "pause button" : "play button"} className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center" onClick={handleForward} disabled={isShuffle ? false : lastSong} aria-label="forward button">
        <img src={!isShuffle && lastSong ? forwardDisabled : forward} alt="forward icon" className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="w-[2.5rem] h-[2.5rem] flex items-center justify-center" onClick={handleShuffle}>
        <img src={isShuffle ? activeShuffle : shuffle} alt="shuffle button" className="w-[1.5rem] h-[1.5rem]" />
      </button>
    </div>
  );
}
