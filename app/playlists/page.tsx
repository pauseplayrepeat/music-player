import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

// import PageContent from "./components/PageContent";
import getSpotifyTracks from "@/actions/getSpotifyTracks";
import SpotifyTrackItem from "../spotify/components/SpotifyTrackItem";
import getSpotifyPlaylists from "@/actions/getSpotifyPlaylists";
import PlaylistPageContent from "./components/PlaylistPageContent";
import Button from "@/components/Button";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
//   const songs = await getSongs();
  const spotifyPlaylists = await getSpotifyPlaylists();

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
        <div className="mb-">
          <h1 
            className="
            text-white 
              text-3xl 
              font-semibold
              mb-1
            ">
              {/* Welcome back */}
          </h1>
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-12
            "
          >
            {/* <ListItem 
              name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            /> */}
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest playlists
          </h1>
          <Button
            className="w-auto"
            // label="View all"
            // onClick={() => router.push('/playlists')}
          >
            <Link href="/spotify/playlists">
                Submit Playlist
            </Link>
          </Button>
        </div>
        <PlaylistPageContent spotifyPlaylists={spotifyPlaylists} />
        {/* <SpotifyTrackItem track={spotifyPlaylists[0]} /> */}
      </div>
    </div>
  )
}