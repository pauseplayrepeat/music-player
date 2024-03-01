"use client";

import { useParams } from 'next/navigation';
import { SpotifyTrack } from "@/types";
import SpotifyTrackItem from "@/app/spotify/components/SpotifyTrackItem";
import fetchTrackById from "@/actions/getSpotifyTracksByTrackId";
import { useEffect, useState } from 'react';

// interface TrackIdPageContentProps {
//   spotifyTracks: SpotifyTrack[];
// }

const TrackIdPageContent = () => {
  const params = useParams<{ tracksId: string }>();
  const { tracksId } = params;

  if (typeof tracksId !== 'string') {
    console.error('tracksId is not a string:', tracksId);
    return null;
  }

  // const [spotifyTracks, setSpotifyTracks] = useState<SpotifyTrack[]>([]);

  // useEffect(() => {
  //   const fetchTrack = async () => {
  //     const spotifyTrack = await fetchTrackById(tracksId);
  //     setSpotifyTracks(spotifyTrack ? [spotifyTrack] : []);
  //   };

  //   fetchTrack();
  // }, [tracksId]);

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
      {/* {spotifyTracks.map((track) => (
        <SpotifyTrackItem key={track.id} track={track} />
      ))} */}
    </div>
  );
}

export default TrackIdPageContent;