"use client"

import React from 'react';
import { SpotifyTrack } from '@/types';
import Image from 'next/image';
import EmailButton from './EmailButton';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

interface SpotifyTrackItemProps {
    track: SpotifyTrack;
}

const SpotifyTrackUserItem: React.FC<SpotifyTrackItemProps> = ({ track }) => {
    // const { supabaseClient } = useSessionContext();
    const router = useRouter();

    const handlePromoteClick = () => {
        router.push(`/dashboard/promote/${track.id}`);
    };

    // Check if track is defined before attempting to access its properties
    if (!track) {
        return <div>No track data</div>;
    }
 
    // Function to handle click event
    // const handleClick = async () => {
    //     // Ensure track_url is not null or undefined before attempting to redirect
    //     if (track.track_url) {
    //         // Increment click_count in the database
    //         try {
    //             const { data, error: fetchError } = await supabaseClient
    //                 .from('spotify_tracks')
    //                 .select('click_count')
    //                 .eq('id', track.id)
    //                 .single();
            
    //             if (fetchError) throw fetchError;
            
    //             const { error: updateError } = await supabaseClient
    //                 .from('spotify_tracks')
    //                 .update({ click_count: (data.click_count + 1) })
    //                 .match({ id: track.id });
            
    //             if (updateError) throw updateError;
    //         } catch (error) {
    //             console.error('Error incrementing click count:', error);
    //         }

    //         window.location.href = track.track_url; // Redirect to the track URL
    //     }
    // };
    const handleClick = async () => {
        // Ensure track_url is not null or undefined before attempting to redirect
        if (track.track_url) {
            // Increment click_count in the database
            // ... database code

            // Navigate to the track page
            // router.push(`/tracks/${track.id}`);
        }
    };

    // Now that we've checked that track is defined, we can safely access its properties
    const artworkSrc = track.song_artwork || '/path/to/default/image.png'; // Provide a fallback image

    return (
        <div 
            className="relative flex group flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
            // onClick={handleClick}
        >
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image 
                    className="object-cover"
                    src={artworkSrc}
                    layout="fill"
                    alt={track.song_title || 'Unknown Title'}
                />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">
                    {track.song_title}
                </p>
                <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                    by {track.artist_name}
                </p>
            </div>
            <Button onClick={handlePromoteClick}>
                Promote Song
            </Button>
        </div>
    );
}

export default SpotifyTrackUserItem;