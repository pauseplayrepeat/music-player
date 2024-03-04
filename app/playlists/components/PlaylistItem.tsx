"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song, SpotifyPlaylist } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

interface MediaItemProps {
  playlist: SpotifyPlaylist;
  onClick?: (id: string) => void;
}

const PlaylistItem: React.FC<MediaItemProps> = ({
  playlist,
  onClick,
}) => {
//   const player = usePlayer();
//   const imageUrl = useLoadImage();
const router = useRouter();

const handleClick = () => {
    router.push(`${playlist.spotify_url}`);
  };
  
  const handlePromote = () => {
    router.push(`/dashboard/promote`);
  };

  return ( 
<div
//   onClick={handleClick}
  className="
    flex 
    flex-col
    items-center 
    gap-y-3
    cursor-pointer 

    w-full 
    h-full // Set the parent div to take full height of its content
    p-2 
    rounded-md
  "
//   hover:bg-neutral-800/50 
>
    <div 
      className="
        relative 
        rounded-md 
        w-[400px] // Adjust width to fill container
        h-[400px] // Adjust height as needed
        overflow-hidden
      "
    >
      <Image
        fill
        src={playlist.images[0].url || "/images/music-placeholder.png"}
        alt="MediaItem"
        // className="object-cover"
      />
    </div>
    <div className="flex flex-col items-center gap-y-1 overflow-hidden">
      <p className="text-white text-lg truncate">{playlist.name}</p> {/* Increased text size */}
      <p className="text-neutral-400 text-base truncate"> {/* Increased text size */}
        By {playlist.owner.display_name}
      </p>
    </div>
    <Button
        onClick={handleClick}
        className="w-full z-10"
      >
        View Playlist
      </Button>
      <Button
        onClick={handlePromote}
        className="w-full z-10"
      >
        Submit for Promotion
      </Button>
  </div>
  );
}
 
export default PlaylistItem;