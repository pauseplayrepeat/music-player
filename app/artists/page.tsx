"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArtistTrack } from "../api/spotify";
// import styles from "@/styles/Artists.module.css";
import SpotifyPlayerComponent from "../spotify/components/SpotifyPlayer";
import { authorize, getToken } from "../api/authorize";
import Image from "next/image";

export default function Artists() {
  const [artistTracks, setArtistTrack] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [access_token, setAccessToken] = useState("");
  const [currentTrack, setCurrentTrack] = useState("");
  const [codeVerifier, setCodeVerifier] = useState("");
  const router = useRouter();

  const authorizeApp = async () => {
    await authorize();
  };

  const fetchArtistTrack = async () => {
    let response = await getArtistTrack(router.query.id);
    setArtistTrack(response.tracks);
  };

  const getCurrentTrack = (currentTrackURI: string) => {
    setCurrentTrack(currentTrackURI);
    setIsPlaying(true);
  };

  useEffect(() => {
    let token = sessionStorage.getItem("access_token");
    setAccessToken(token || "");
    fetchArtistTrack();
    setCodeVerifier(sessionStorage.getItem("code_verifier") || "");
  }, []);

  useEffect(() => {
    getToken();
  }, [codeVerifier]);

  return (
    <div>
      <button onClick={() => router.push("/")} className="btn btn-accent">
        GO Back
      </button>
      <div>
        <button onClick={authorizeApp} className="btn btn-accent">
          Refresh Token
        </button>
      </div>
      <div>
        <p>Artists Tracks</p>
        <div>
          <div>
            {artistTracks?.map(
              (artist: {
                name: "";
                id: "";
                uri: "";
                album: {
                  images: [{ url: "" }, { url: "" }];
                };
              }) => {
                return (
                  <div
                    onClick={() => getCurrentTrack(artist.uri)}
                  >
                    <Image
                      src={
                        artist.album.images[1]?.url
                          ? artist.album.images[1]?.url
                          : "http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
                      }
                      alt="artist"
                    />
                    <p>{artist.name}</p>
                    <p>Track</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* {artistTracks.length ? (
        <div className={styles.spotifyPlayer}>
          <SpotifyPlayerComponent
            playing={isPlaying}
            access_token={access_token}
            currentTrack={currentTrack}
          />
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
}