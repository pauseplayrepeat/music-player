import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { SpotifyPlaylist } from "../types";
import { cookies } from "next/headers";

const getPlaylistById = async (playlist_id: string): Promise<SpotifyPlaylist | null> => {

    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    const { data, error } = await supabase
        .from('spotify_playlists')
        .select(`*`)
        .eq('playlist_id', playlist_id)
        .single();

    if (error) {
        console.error('Error fetching playlist:', error);
        return null;
    }

    return data;
};

export default getPlaylistById;