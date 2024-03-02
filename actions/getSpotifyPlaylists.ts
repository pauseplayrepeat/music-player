import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SpotifyPlaylist, SpotifyTrack } from "../types";

// Updated return type to Promise<SpotifyTrack[]> to reflect that it returns an array of tracks
const getSpotifyPlaylists = async (): Promise<SpotifyPlaylist[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    // Added click_count to the select and sorted by click_count in ascending order
    const { data, error } = await supabase
    .from('spotify_playlists')
    .select('*')

    if (error) {
        console.error(error);
        return [];
    }
    return data;
};

export default getSpotifyPlaylists;