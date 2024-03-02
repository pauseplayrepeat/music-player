"use client";

import { Song, SpotifyPlaylist, SpotifyTrack } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";
import SongItem from "@/components/SongItem";
import SpotifyPlaylistItem from "./SpotifyPlaylistItem";



interface PageContentProps {
  spotifyPlaylists: SpotifyPlaylist[]; // Add this line
}

const PlaylistPageContent: React.FC<PageContentProps> = ({
  spotifyPlaylists, // Add this line
}) => {

  // if (songs.length === 0 && spotifySongs.length === 0) { // Update this condition
  //   return (
  //     <div className="mt-4 text-neutral-400">
  //       No songs available.
  //     </div>
  //   );
  // }

  return (
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4
        2xl:grid-cols-4 
        gap-4 
        mt-4
      "
    >
      {/* {songs.map((item) => (
        <SongItem 
          onClick={(id: string) => onPlay(id)} 
          key={item.id} 
          data={item}
        />
      ))} */}
      {spotifyPlaylists.map((playlist) => (
  <SpotifyPlaylistItem key={playlist.id} playlist={playlist} />
))}
    </div>
  );
}

export default PlaylistPageContent;