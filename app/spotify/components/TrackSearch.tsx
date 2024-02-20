import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import Button from '@/components/Button';
import Input from '@/components/Input';
import PlayButton from '@/components/PlayButton';
import { useSupabaseClient } from '@supabase/auth-helpers-react'; // Modified import to include useUser
import { useUser } from '@/hooks/useUser';
import toast from 'react-hot-toast';

type Track = {
    id: string;
    name: string;
    artists: { 
      name: string; 
      followers: { total: number }; 
      genres: string[] 
    }[];
    album: { images: { url: string }[] };
    external_urls: { spotify: string };
};

const formSchema = z.object({
    searchInput: z.string(),
});

const TrackSearch = ({ accessToken }: { accessToken: string }) => {
    const [tracks, setTracks] = useState<Track[]>([]);
    const form = useForm<z.infer<typeof formSchema>>();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser(); // Use the useUser hook to get the current user

    const handleAddTrack = async (event: React.MouseEvent<HTMLButtonElement>, trackUrl: string, songTitle: string, artistName: string, songArtwork: string) => {
        event.stopPropagation();
        if (!user) {
            console.error("User not authenticated");
            return;
        }
        const { data, error } = await supabaseClient
            .from('spotify_tracks')
            .insert([
                { 
                    track_url: trackUrl, 
                    artist_name: artistName, 
                    song_title: songTitle,
                    song_artwork: songArtwork,
                    user_id: user.id // Add the user_id to the inserted data
                }
            ]);
    
        if (error) {
            console.error("Error adding track:", error);
            toast.error("Error adding track"); // Add this line to show error toast
        } else {
            console.log("Track added successfully:", data);
            toast.success("Track added successfully"); // Add this line to show success toast
        }
    };

    const searchTracks = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${values.searchInput}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        setTracks(data.tracks.items);
    };

    return (
        <div>
            <form onSubmit={form.handleSubmit(searchTracks)} className="space-y-4 mb-4">
                <label htmlFor="searchInput">Search</label>
                <Input placeholder="Search Spotify" {...form.register("searchInput")} />
                <p>Enter your search query.</p>
                <Button type="submit">Search</Button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {tracks.map(track => (
        <div key={track.id} className="relative flex group flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image src={track.album.images[0]?.url || '/images/liked.png'} fill alt={track.name} />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">{track.name}</p>
                <p className="text-neutral-400 text-sm pb-4 w-full truncate">by {track.artists[0].name}</p>
            </div>
            <Button onClick={(event) => handleAddTrack(event, track.external_urls.spotify, track.name, track.artists[0].name, track.album.images[0]?.url || '/default/artwork/path')}
className="add-button"
>
  Add
</Button>
        </div>
    ))}
</div>
        </div>
    );
};

export default TrackSearch;