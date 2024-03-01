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

type Playlist = {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: { url: string }[];
    name: string;
    owner: {
      external_urls: { spotify: string };
      href: string;
      id: string;
      type: string;
      uri: string;
      display_name: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      total: number;
    };
  };

const formSchema = z.object({
    searchInput: z.string(),
});

const PlaylistSearch = ({ accessToken }: { accessToken: string }) => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const form = useForm<z.infer<typeof formSchema>>();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser(); // Use the useUser hook to get the current user

    const handleAddPlaylist = async (playlist: Playlist) => {
        if (!user) {
            console.error("User not authenticated");
            return;
        }
    
        // Check if the spotify_url already exists in the table
        const { data: existingPlaylists, error: selectError } = await supabaseClient
            .from('spotify_playlists')
            .select('spotify_url')
            .eq('spotify_url', playlist.external_urls.spotify);
    
        if (selectError) {
            console.error("Error checking playlist:", selectError);
            toast.error("Error checking playlist");
            return;
        }
    
        if (existingPlaylists && existingPlaylists.length > 0) {
            console.log("Playlist already exists");
            toast.error("Playlist already exists");
            return;
        }
    
        // If the spotify_url does not exist, add the new playlist
        const { data, error } = await supabaseClient
            .from('spotify_playlists')
            .insert([
                { 
                    playlist_id: playlist.id,
                    collaborative: playlist.collaborative,
                    description: playlist.description,
                    spotify_url: playlist.external_urls.spotify,
                    href: playlist.href,
                    images: playlist.images,
                    name: playlist.name,
                    owner: playlist.owner,
                    public: playlist.public,
                    snapshot_id: playlist.snapshot_id,
                    tracks: playlist.tracks,
                    user_id: user.id // Add the user_id to the inserted data
                }
            ]);
    
        if (error) {
            console.error("Error adding playlist:", error);
            toast.error("Error adding playlist"); // Add this line to show error toast
        } else {
            console.log("Playlist added successfully:", data);
            toast.success("Playlist added successfully"); // Add this line to show success toast
        }
    };

    const searchPlaylists = async (values: z.infer<typeof formSchema>) => {
        const searchResponse = await fetch(`https://api.spotify.com/v1/search?type=playlist&q=${values.searchInput}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const searchData = await searchResponse.json();
        setPlaylists(searchData.playlists.items); // Set all playlists from the search results
    };

    return (
        <div>
            <form onSubmit={form.handleSubmit(searchPlaylists)} className="space-y-4 mb-4">
                <label htmlFor="searchInput">Search</label>
                <Input placeholder="Search Spotify" {...form.register("searchInput")} />
                <p>Enter your search query.</p>
                <Button type="submit">Search</Button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {playlists.map(playlist => (
                       <div key={playlist.id} className="relative flex group flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
                           <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                           <Link href={playlist.external_urls.spotify}>
                               <Image src={(playlist.images && playlist.images.length > 0 ? playlist.images[0].url : '/images/liked.png')} fill alt={playlist.name} />
                            </Link>
                           </div>
                           <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                               <p className="font-semibold truncate w-full">{playlist.name}</p>
                               <p className="text-neutral-400 text-sm pb-4 w-full truncate">by {playlist.owner?.display_name || 'N/A'}</p>
                               <p className="text-neutral-400 text-sm pb-2 w-full">{playlist.description || 'N/A'}</p>
                               <p className="text-neutral-400 text-sm pb-2 w-full truncate">Tracks: {playlist.tracks?.total || 'N/A'}</p>
                               {/* <p className="text-neutral-400 text-sm pb-2 w-full truncate">
                                   Collaborative: {playlist.collaborative ? 'Yes' : 'No'}
                               </p> */}
                           </div>
                           <Button onClick={() => handleAddPlaylist(playlist)} className="add-button">
                                Add
                            </Button>
                       </div>
                ))}
            </div>
        </div>
    );
};

export default PlaylistSearch;