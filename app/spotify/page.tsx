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


const CLIENT_ID = "eb50c2830540448d99e4f2342c2a8d87";
const CLIENT_SECRET = "d344df747b684472b5de0b3c9d8e2175";

const Spotify = () => {
  const [accessToken, setAccessToken] = useState("");

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
    <div className="p-8">
      <TrackSearch accessToken={accessToken} />
    </div>
  );
};3

export default Spotify;
