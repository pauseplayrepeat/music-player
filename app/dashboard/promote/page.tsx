"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { SpotifyTrack } from '@/types';
import EmailButton from '../components/EmailButton';
import Header from '@/components/Header';
import Button from '@/components/Button';

interface Props {
    track: SpotifyTrack;
}

const PromotionPage = ({ track }: Props) => {
    const router = useRouter();

    const handlePromote = () => {
      router.push(`/dashboard/promote/${track.id}`);
    };

  // Fetch the track data using trackId
  // const track: SpotifyTrack = fetchTrackData(trackId);

  return (
    <div>
         <Header>
      <div className="mb-2">
        <h1 className="text-white text-3xl font-semibold">
            {/* Welcome back */}
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          {/* <ListItem name="Liked Songs" image="/images/liked.png" href="liked" /> */}
        </div>
      </div>
    </Header>
      <h1>Promote Your Song</h1>
      {/* Pass the track data to the EmailButton component */}
      <Button onClick={handlePromote}>Submit for promotion</Button>
      {/* <EmailButton track={trackId} /> */}
    </div>
  );
};

export default PromotionPage;