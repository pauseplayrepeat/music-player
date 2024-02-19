"use client";

import Image from "next/image";
import { SpotifyTrack } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface SpotifyMediaItemProps {
  data: SpotifyTrack;
//   onClick?: (id: string) => void;
}

const SpotifyMediaItem: React.FC<SpotifyMediaItemProps> = ({
  data,
//   onClick,
}) => {
//   const player = usePlayer();

  const handleClick = () => {
    // if (onClick) {
    //   return onClick(data.id);
    // }
  
    // Assuming player.setId can handle Spotify track IDs as well
    // return player.setId(data.id);
  };

  return ( 
    <div
      onClick={handleClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div 
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={data.song_artwork || "/images/spotify-placeholder.png"}
          alt={data.song_title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.song_title}</p>
        <p className="text-neutral-400 text-sm truncate">
          By {data.artist_name}
        </p>
      </div>
    </div>
  );
}
 
export default SpotifyMediaItem;