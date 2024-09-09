import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import { Song } from "./types";

export default function MusicPlayer() {
  const [playList, setPlayList] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(()=> {
    async function fetchSongList () {
      try {
        const res = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
        const data: Song[] = await res.json();
        setPlayList(data);
        if (data.length > 0) {
          setCurrentSong(data[0]);
        }
      } catch(error) {
        console.error('Could not fetch playlist', error);
      }
    }

    fetchSongList();
  }, []);

  return (
    <div className="flex flex-col max-w-[42.9rem] min-h-[40rem] bg-night-blue shadow-lg rounded-lg md:max-w-[56rem] md:w-full md:flex-row">
      <CurrentlyPlaying song={currentSong} />
      {/* Vertical gray border */}
      <div className="border-b-2 border-deep-yellow w-full md:h-[40rem] md:w-0 md:border-l-2"></div>
      <Playlist playlist={playList} currentSong={currentSong} songSelected={setCurrentSong} />
    </div>
  );
}
