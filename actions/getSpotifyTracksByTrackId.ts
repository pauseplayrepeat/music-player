import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { SpotifyTrack } from "../types";
import { cookies } from "next/headers";

const fetchTrackById = async (id: string): Promise<SpotifyTrack | null> => {
    const supabase = createServerComponentClient({
        cookies: cookies,
    });

  const { data, error } = await supabase
    .from('spotify_tracks')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching track:', error);
    return null;
  }

  return data;
};

export default fetchTrackById;