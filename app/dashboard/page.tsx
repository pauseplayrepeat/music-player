import { GetServerSideProps } from 'next';
import React from 'react';
import EmailButton from "./components/EmailButton";
import SpotifyTrackList from './components/SpotifyTrackList';
import getSpotifyTracksByUserId from '@/actions/getSpotifyTracksByUserId';
import { SpotifyTrack } from '@/types';
import Header from '@/components/Header';
import SpotifyTrackUserItem from './components/SpotifyTrackUserItem';
import Link from 'next/link';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

// interface DashboardPageProps {
//   spotifyTracks: SpotifyTrack[];
// }

const Dashboard = ({ 
    // spotifyTracks,
}) => {


    return (
        <div
        className="
          bg-neutral-900 
          rounded-lg 
          h-full 
          w-full 
          overflow-hidden 
          overflow-y-auto
        "
      >
         <Header>
            <div className="mb-2">
              <h1 
                className="
                text-white 
                  text-3xl 
                  font-semibold
                ">
                  Send your music for promotion
              </h1>
              <div 
                className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-1 
                  xl:grid-cols-2
                  2xl:grid-cols-2
                  gap-3 
                  mt-4
                "
              >
                {/* Simply click send email to send an email to music promoters */}
              </div>
            </div>
          </Header>
          <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
          <Button
            className="w-auto"
            // label="View all"
            // onClick={() => router.push('/playlists')}
          >
            <Link href="/spotify/songs">
                Submit Your Music
            </Link>
          </Button>
        </div>
            <SpotifyTrackList />
        </div>
        </div>
      );
    };

export default Dashboard; // Make sure to export Dashboard as default