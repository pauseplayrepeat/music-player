"use client";

import React from 'react'

import { TbPlaylist } from 'react-icons/tb';

import { AiOutlinePlus } from 'react-icons/ai';

import useAuthModal from '@/hooks/useAuthModal';

import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';

import MediaItem from '@/components/MediaItem';

import { Song, SpotifyTrack } from '@/types'; 
import SpotifyMediaItem from '@/app/spotify/components/SpotifyMediaItem';

interface LibraryProps {
    // userSongs: Song[];
    spotifyTracks: SpotifyTrack[];
}

const Library: React.FC<LibraryProps> = ({ spotifyTracks }) => {
    const authModal = useAuthModal();
    const { user } = useUser();
    const uploadModal = useUploadModal();

    const onClick = () => {
        if (!user) {
            authModal.onOpen();
        }
        // TODO: Check for subscription
        return uploadModal.onOpen();
    };

  return (
    <div className="flex flex-col">
        <div className="
        flex
        items-center
        justify-between
        px-5
        pt-4
        "
        >
            <div className="inline-flex items-center gap-x-2">
                <TbPlaylist className="text-neutral-400" size={26}/>
                <p className="
                text-neutral-400 font-medium text-md
                "
                > 
                Your Library
                </p>
            </div>
            <AiOutlinePlus 
            onClick={onClick}
            size={26}
            className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
            "
            />
        </div>
        <div className="
            flex
            flex-col
            gap-y-2
            mt-4
            px-3
        ">
            {/* {userSongs.map((item) => (
                <MediaItem 
                    onClick={() => {}}
                    key={item.id}
                    data={item}
                />
            ))} */}
            {spotifyTracks.map((track) => (
                <SpotifyMediaItem key={track.id} data={track} user={user_id}/>
            ))}
        </div>
    </div>
  )
}

export default Library