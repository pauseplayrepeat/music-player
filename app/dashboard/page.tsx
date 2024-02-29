import { GetServerSideProps } from 'next';
import React from 'react';
import EmailButton from "./components/EmailButton";
import SpotifyTrackList from './components/SpotifyTrackList';
import getSpotifyTracksByUserId from '@/actions/getSpotifyTracksByUserId';
import { SpotifyTrack } from '@/types';

// interface DashboardPageProps {
//   spotifyTracks: SpotifyTrack[];
// }

const Dashboard = ({ 
    // spotifyTracks,
}) => {
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
      "
    >
      {/* <EmailButton /> */}
      <SpotifyTrackList />
    </div>
  );
};

export default Dashboard; // Make sure to export Dashboard as default