// import getSongsByTitle from '@/actions/getSongsByTitle';
// import Header from '@/components/Header';
// import SearchContent from '@/app/search/components/SearchContent';
// import SearchInput from '@/components/SearchInput';
// import SpotifyAuthModal from './components/SpotifyAuthModal';
// import Button from '@/components/Button'; // Adjust this import based on your Button component's location.
// import useAuthModal from '@/hooks/useAuthModal';
// import SpotifyLoginButton from './components/SpotifyLoginButton';
// import SpotifySearchInput from './components/SpotifySearchInput'; // Make sure the path is correct.

// interface SearchProps {
//     searchParams: {
//         title: string;
//     }
// };

// const SpotifyPage = ({ searchParams }: SearchProps) => {

//     return (
//         <div className="
//             bg-neutral-900
//             rounded-lg
//             h-full
//             w-full
//             overflow-hidden
//             overflow-y-auto
//         ">
//             <Header className="from-bg-neutral-900">
//                 <div className="mb-2 flex flex-col gap-y-6">
//                     <SpotifyLoginButton />  {/* Here is the Spotify Login Button */}
//                     <SpotifySearchInput />  {/* Here is the Spotify Search Input */}
//                     <SpotifyAuthModal />
//                 </div>
//             </Header>
//         </div>
//     );
// }

// export default SpotifyPage;

"use client"


import React, { useState, useEffect } from 'react';
import TrackSearch from './components/TrackSearch';
import Header from '@/components/Header';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';
import useAuthModal from '@/hooks/useAuthModal';


const CLIENT_ID = "85af9b4344c144e193afe98b2d1c56bd"
const CLIENT_SECRET = "3fa50e750b5c44c4b7eea23cc3d0c34b"

const Spotify = () => {
  const { user, isLoading } = useUser();
  const [accessToken, setAccessToken] = useState("");
  const authModal = useAuthModal();

  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, redirect to login page or show an appropriate message
    if (!user) {
      authModal.onOpen();
    }
  }, [user, isLoading, router]);

  // If loading or no user, you can return a loading indicator or null to avoid flash of content
  if (isLoading || !user) return <div>Loading...</div>;

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => {
        setAccessToken(data.access_token);
      });
  }, []);

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
              Search Spotify
          </h1>
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
          </div>
        </div>
      </Header>
    <div className="p-8">
      <TrackSearch accessToken={accessToken} />
    </div>
    </div>
  );
};3

export default Spotify;
