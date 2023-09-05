"use client"

import useSpotifyAuthModal from '@/hooks/useSpotifyAuthModal';
import Button from '@/components/Button'; // adjust path based on your file structure

const SpotifyLoginButton = () => {
  const spotifyAuthModal = useSpotifyAuthModal();

  return (
    <Button onClick={spotifyAuthModal.onOpen}>
      Log in with Spotify
    </Button>
  );
}

export default SpotifyLoginButton;
