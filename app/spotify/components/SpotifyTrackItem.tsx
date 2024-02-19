import React from 'react';
import { SpotifyTrack } from "@/types";
import Image from "next/image";

interface SpotifyTrackItemProps {
    track: SpotifyTrack; // Indicate that track can be null
}

const SpotifyTrackItem: React.FC<SpotifyTrackItemProps> = ({ track }) => {
    // Check if track is defined before attempting to access its properties
    if (!track) {
        return <div>No track data</div>;
    }

    // Function to handle click event
    const handleClick = () => {
        // Ensure track_url is not null or undefined before attempting to redirect
        if (track.track_url) {
            window.location.href = track.track_url; // Redirect to the track URL
        }
    };

    // Now that we've checked that track is defined, we can safely access its properties
    const artworkSrc = track.song_artwork || '/path/to/default/image.png'; // Provide a fallback image

    return (
        <div 
            className="relative flex group flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
            onClick={handleClick} // Add the onClick event handler here
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
        </div>
    );
}

export default SpotifyTrackItem;