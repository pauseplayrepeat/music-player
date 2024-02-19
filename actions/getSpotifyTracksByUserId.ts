import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { SpotifyTrack } from "../types"; // Ensure this type matches the structure of your spotify_tracks table
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
        .from("spotify_tracks") // Target the spotify_tracks table
        .select("*")
        .eq("user_id", sessionData.session?.user.id) // Ensure you have a user_id column in spotify_tracks
        .order("created_at", { ascending: false }); // Adjust if your table has a different timestamp column

    if (error) {
        console.log(error.message);
        return [];
    }
    return data || [];
};

export default getSpotifyTracksByUserId;