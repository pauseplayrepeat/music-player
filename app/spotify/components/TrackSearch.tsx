import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import * as z from "zod";


import Link from 'next/link';
import axios from 'axios';

import Image from 'next/image';
import Button from '@/components/Button';
import Input from '@/components/Input';
import PlayButton from '@/components/PlayButton';


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

    // const { toast } = useToaster();
    const [tracks, setTracks] = useState<Track[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
        // resolver: zodResolver(formSchema),
        // defaultValues: {
        //     searchInput: "",
        // },
    });

    const handleAddTrack = async (trackUrl: string, trackName: string, artistName: string, albumImage: string) => {
        await axios.post('/api/music/sharedTracks', { trackUrl, trackName, artistName, albumImage });
        // toast.success("Track added successfully")
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
            <div className="grid grid-cols-4 gap-4">
                {tracks.map(track => (
                    <div
                        key={track.id}
                        onClick={() => window.open(track.external_urls.spotify, '_blank')}
                        className="relative flex group flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
                    >
                        <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                            <Image 
                                className="object-cover"
                                src={track.album.images[0]?.url || '/images/liked.png'}
                                fill
                                alt={track.name}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                            <p className="font-semibold truncate w-full">
                                {track.name}
                            </p>
                            <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                                by {track.artists[0].name}
                            </p>
                            {/* <div className="absolute bottom-24 right-5">
                                <PlayButton />
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackSearch;