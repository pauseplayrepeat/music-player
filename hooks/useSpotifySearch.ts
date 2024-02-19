import { useState, useEffect } from 'react';
import { useSpotify } from "../providers/SpotifyProvider"

interface Track {
    id: string;
    name: string;
    artists: { name: string }[];
}

const useSpotifySearch = (query: string): Track[] => {
  const searchTracks = useSpotify();
  const [results, setResults] = useState<Track[]>([]);

  // useEffect(() => {
  //   const executeSearch = async () => {
  //     if (!searchTracks) {
  //       console.error("SearchTracks function not found");
  //       return;
  //     }
  //     const res = await searchTracks(query);
  //     if (res && res.tracks && res.tracks.items) { 
  //       setResults(res.tracks.items);
  //     }
  //   };

  //   if (query) {
  //     executeSearch();
  //   }
  // }, [query, searchTracks]);

  return results;
};

export default useSpotifySearch;
