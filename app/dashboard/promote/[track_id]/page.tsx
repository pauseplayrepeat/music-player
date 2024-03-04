

import { NextPageContext } from 'next';
import Header from "@/components/Header";
import { SpotifyPlaylist } from "@/types";


import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import getSpotifyTracksByUserId from '@/actions/getSpotifyTracksByUserId';
import getSpotifyTracks from '@/actions/getSpotifyTracks';
import getTrackById from '@/actions/getSpotifyTracksByTrackId';
import { useRouter } from 'next/navigation';
import EmailButton from '../../components/EmailButton';
import { DataTable, columns } from '../../components/PlaylistTable';
import getSpotifyPlaylists from '@/actions/getSpotifyPlaylists';




interface PromoteSongPageProps {
    params: {
      track_id: string;
    }
    // playlist: SpotifyPlaylist
}


const PlaylistIdPage = async ({ params }: PromoteSongPageProps) => {
  const { track_id } = params
  const track = await getTrackById(track_id);
  const playlists = await getSpotifyPlaylists();

   
//   if (!playlist) {
//      return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }
 
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
          {/* {track?.song_title} */}
          <DataTable columns={columns} data={playlists} /> {/* Pass columns and data to DataTable */}
        </div>
        {/* <EmailButton track={track} /> */}
      </div>
    </div>
);
}

export default PlaylistIdPage;