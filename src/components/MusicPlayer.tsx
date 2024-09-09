import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import usePlayListData from "../hooks/usePlaylistData";

export interface Song {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
}

export default function MusicPlayer() {
  const { data: playList, loading } = usePlayListData();
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    if (playList.length > 0) {
      setCurrentSong(playList[0]);
    }
  }, [playList]);
  return (
    <div className="flex flex-col max-w-[42.9rem] min-h-[40rem] bg-night-blue shadow-lg rounded-lg md:max-w-[56rem] md:w-full md:flex-row">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full m-auto text-6xl text-wing-red">
          Loading...
        </div>
      ) : (
      <>
        <CurrentlyPlaying song={currentSong} />
        {/* Vertical gray border */}
        <div className="border-b-2 border-deep-yellow w-full md:h-[40rem] md:w-0 md:border-l-2"></div>
        <Playlist playlist={playList} currentSong={currentSong} songSelected={setCurrentSong} />
      </>
        )}
    </div>
  );
}
