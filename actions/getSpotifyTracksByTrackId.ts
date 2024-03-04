import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { SpotifyTrack } from "../types";
import { cookies } from "next/headers";

const getTrackById = async (id: string): Promise<SpotifyTrack | null> => {
    console.log(`Fetching track with id: ${id}`); // Log the id parameter

    const supabase = createServerComponentClient({
        cookies: cookies,
    });

  const { data, error } = await supabase
    .from('spotify_tracks')
    .select('*')
    .eq('id', id)
    .single();

  console.log(`Fetched data: ${JSON.stringify(data)}`); // Log the fetched data
  console.log(`Fetched error: ${JSON.stringify(error)}`); // Log the fetched error

  if (error) {
    console.error('Error fetching track:', error);
    return null;
  }

  return data;
};

export default getTrackById;

