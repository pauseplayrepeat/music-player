

import Head from "next/head";
import { useEffect, useState } from "react";
import { authorize, getToken } from "../api/authorize";
import Player from "@/components/Player";
import getSpotifyTracksByUserId from "@/actions/getSpotifyTracksByUserId";
import { SpotifyTrack } from "@/types";
import SpotifyTracksDisplay from "./components/SpotifyTracksDisplay";

export default async function Home() {

  const spotifyTracksByUserId = await getSpotifyTracksByUserId();
  console.log(spotifyTracksByUserId);


  // Rest of your component...

  return (
    <div>
       <SpotifyTracksDisplay spotifyTracksByUserId={spotifyTracksByUserId} />
      </div>
  );
}