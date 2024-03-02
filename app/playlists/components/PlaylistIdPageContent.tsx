import { SpotifyPlaylist } from "@/types";
import SpotifyPlaylistItem from "./SpotifyPlaylistItem";

interface PageContentProps {
  spotifyPlaylist: SpotifyPlaylist | null; // Update this line
}

const PlaylistIdPageContent = ({ spotifyPlaylist }: PageContentProps) => {
  if (!spotifyPlaylist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SpotifyPlaylistItem key={spotifyPlaylist.id} playlist={spotifyPlaylist} />
    </div>
  );
}

export default PlaylistIdPageContent;