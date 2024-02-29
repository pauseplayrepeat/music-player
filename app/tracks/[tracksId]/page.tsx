"use client"

import { SpotifyTrack } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fetchTrackById from '@/actions/getSpotifyTracksByTrackId';

const TrackPage = () => {
  const router = useRouter();
  const { tracksId } = useParams();

  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  

  // useEffect(() => {
  //   if (tracksId) {
  //     fetchTrackById(tra as string).then(setTrack);
  //   }
  // }, [tracksId]);

  // Render track data her
  return (
    <div>
      {track ? (
        <>
          <h1>{track.song_title}</h1>
          <p>{track.artist_name}</p>
          {/* Render other track data as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrackPage;