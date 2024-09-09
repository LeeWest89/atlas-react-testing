import { useState, useEffect } from 'react';
import { Song } from '../components/MusicPlayer';

export default function usePlayListData () {
  const [data, setData] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchSongList() {
      setLoading(true);
      try {
        const res = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
        const songs: Song[] = await res.json();
        setData(songs);
        // testing Loading
        // setTimeout(() => {
        //   setData(songs);
        //   setLoading(false);
        // }, 5000);
      } catch (error) {
        console.error('Could not fetch playlist', error);
      } finally {
        setLoading(false);
      }
    }
    fetchSongList();
  }, []);
  return { data, loading };
}