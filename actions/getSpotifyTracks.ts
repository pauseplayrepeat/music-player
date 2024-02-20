import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SpotifyTrack } from "../types";

// Updated return type to Promise<SpotifyTrack[]> to reflect that it returns an array of tracks
const getSpotifyTracks = async (): Promise<SpotifyTrack[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    // Added click_count to the select and sorted by click_count in ascending order
    const { data, error } = await supabase.from('spotify_tracks').select('*').order('click_count', { ascending: false });
    if (error) {
        console.error(error);
        return [];
    }
    return data;
};

export default getSpotifyTracks;