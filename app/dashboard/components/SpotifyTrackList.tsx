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
    <div>
      {spotifyTracks.map((track) => (
        <SpotifyTrackUserItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default SpotifyTrackList;