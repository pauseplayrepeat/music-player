import React from 'react';
import { SpotifyTrack } from '@/types';
import getSpotifyTracksByUserId from '@/actions/getSpotifyTracksByUserId';
import SpotifyTrackUserItem from './SpotifyTrackUserItem';

interface SpotifyTrackListProps {
    tracks: SpotifyTrack[];
}

const SpotifyTrackList = async ({ }) => {
  const spotifyTracks: SpotifyTrack[] = await getSpotifyTracksByUserId();

  return (
    <div 
      className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5 
        2xl:grid-cols-6
        gap-4 
        mt-4
      "
    >
      {spotifyTracks.map((track) => (
        <SpotifyTrackUserItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default SpotifyTrackList;