import { NextPageContext } from 'next';
import Header from "@/components/Header";
import { SpotifyPlaylist } from "@/types";
import PlaylistDetails from "../components/PlaylistDetails";
import getPlaylistById from "@/actions/getSpotifyPlaylistByPlaylistId";
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import MediaItem from '@/components/MediaItem';
import PlaylistItem from '../components/PlaylistItem';

interface PlaylistIdPageProps {
    params: {
      playlist_id: string;
    }
    // playlist: SpotifyPlaylist
}

interface SearchProps {
    searchParams: {
        title: string;
    }
};

const PlaylistIdPage = async ({ params }: PlaylistIdPageProps) => {
  const { playlist_id } = params
  const playlist = await getPlaylistById(playlist_id);
   
  if (!playlist) {
     return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
 
//   return (
//       <div 
//         className="
//           grid 
//           grid-cols-2 
//           sm:grid-cols-3 
//           md:grid-cols-3 
//           lg:grid-cols-4 
//           xl:grid-cols-5 
//           2xl:grid-cols-8 
//           gap-4 
//           mt-4
//         "
//       >
//       <div className="col-span-2 space-y-4">
//         <h1 className="text-white text-3xl font-semibold truncate">{playlist.name}</h1>
//         <p className="text-neutral-400 text-sm">{playlist.description}</p>
//         <p className="text-neutral-400 text-sm truncate">by {playlist.owner.display_name}</p>
//     </div>
//     </div>
//   );
// };

return (
  <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
    <Header>
      <div className="mb-2">
        <h1 className="text-white text-3xl font-semibold">
            {/* Welcome back */}
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          {/* <ListItem name="Liked Songs" image="/images/liked.png" href="liked" /> */}
        </div>
      </div>
    </Header>
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <PlaylistItem playlist={playlist}/>

      </div>
    </div>
  </div>
);
}

export default PlaylistIdPage;