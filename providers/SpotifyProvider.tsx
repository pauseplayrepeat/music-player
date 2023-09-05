"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import SpotifyWebApi from 'spotify-web-api-js'; // Using spotify-web-api-js for spotify related functionalities
import { toast } from 'react-hot-toast';

interface SpotifyContextData {
  spotifyApi: SpotifyWebApi.SpotifyWebApiJs | null;
  setAccessToken: (token: string | null) => void;
  searchTracks: (query: string) => Promise<any>; // Define the type for searchTracks here
}

// Set a default value for SpotifyContext to avoid returning undefined
const SpotifyContext = createContext<SpotifyContextData>({
  spotifyApi: null,
  setAccessToken: () => {},
  searchTracks: () => Promise.resolve(null),
});

interface SpotifyProviderProps {
  children: ReactNode;
}

export const SpotifyProvider: React.FC<SpotifyProviderProps> = ({ children }) => {
  const [spotifyApi, setSpotifyApi] = useState<SpotifyWebApi.SpotifyWebApiJs | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null); // Store the user's access token here

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    setSpotifyApi(spotify);
    if (accessToken) {
      spotify.setAccessToken(accessToken);
    }
  }, [accessToken]);

  // Define the searchTracks function here
  const searchTracks = async (query: string) => {
    if (!spotifyApi) {
      console.error("Spotify API not initialized");
      return;
    }
    try {
      const results = await spotifyApi.searchTracks(query);
      return results;
    } catch (err) {
      console.error(err);
    }
  };

  // The value passed to SpotifyContext.Provider will be available to all components in SpotifyContext
  return (
    <SpotifyContext.Provider value={{ spotifyApi, setAccessToken, searchTracks }}>
      {children}
    </SpotifyContext.Provider>
  );
}

export const useSpotify = () => {
  const context = useContext(SpotifyContext);

  if (!context) {
    // Show a toast instead of throwing an error
    toast.error("useSpotify must be used within a SpotifyProvider");
    return;
  }

  return context;
}
