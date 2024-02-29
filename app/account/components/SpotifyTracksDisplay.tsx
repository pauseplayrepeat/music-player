import React from 'react';
import { SpotifyTrack } from '@/types';

interface SpotifyTracksDisplayProps {
  spotifyTracksByUserId: SpotifyTrack[];
}

const SpotifyTracksDisplay: React.FC<SpotifyTracksDisplayProps> = ({ spotifyTracksByUserId }) => {
  return (
    <div>
      {spotifyTracksByUserId.map((track) => (
        <div className="text-white"key={track.id}>
          <p>{track.song_title}</p>
        </div>
      ))}
    </div>
  );
};

export default SpotifyTracksDisplay;