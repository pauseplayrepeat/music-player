import { SpotifyTrack } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";

const getSpotifyTracksByUserId = async (): Promise<SpotifyTrack[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    const {
        data: sessionData,
        error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
        console.log(sessionError.message);
        return [];
    }

    const { data, error } = await supabase
        .from("spotify_tracks") // Changed to target the 'spotify_tracks' table
        .select("*")
        .eq("user_id", sessionData.session?.user.id) // Assuming 'spotify_tracks' also has a 'user_id' column
        // .order("created_at", { ascending: false }); // Assuming 'spotify_tracks' has a 'created_at' column

    if (error) {
        console.log(error.message);
        return [];
    }
    return data || []; // Assuming 'data' is already of type SpotifyTrack[]
};

export default getSpotifyTracksByUserId;