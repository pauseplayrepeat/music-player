"use client";

import { Song, SpotifyTrack } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";
import SongItem from "@/components/SongItem";
import SpotifyTrackItem from "@/app/spotify/components/SpotifyTrackItem";


interface TrackIdPageContentProps {
//   songs: Song[];
  spotifyTracks: SpotifyTrack[]; // Add this line
}

const TrackIdPageContent: React.FC<TrackIdPageContentProps> = ({
  spotifyTracks, // Add this line
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
        xl:grid-cols-5 
        2xl:grid-cols-8 
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
      {spotifyTracks.map((track) => (
  <SpotifyTrackItem key={track.id} track={track} />
))}
    </div>
  );
}

export default TrackIdPageContent;