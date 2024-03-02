import getPlaylistById from "@/actions/getSpotifyPlaylistByPlaylistId";
import { SpotifyPlaylist } from "@/types";

interface PlaylistDetailsProps {
  playlist: SpotifyPlaylist; // Allow null as a possible type
}

const PlaylistDetails = async ({ playlist }: PlaylistDetailsProps) => {

    // const spotifyPlaylist = await getPlaylistById(playlist.id);

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Playlist ID: {playlist.id}</h2>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlaylistDetails;