"use client"

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import useSpotifySearch from "@/hooks/useSpotifySearch";

import Input from "@/components/Input";

import qs from "query-string";

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
}

const SpotifySearchInput = () => {
//   const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce<string>(value, 500);

  const results = useSpotifySearch(debounceValue);

  useEffect(() => {
    const query = {
      title: debounceValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

});

  return (
    <>
      <Input
        placeholder="What do you want to listen to?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {results.map((track: Track) => (
        <div key={track.id}>
          <p>{track.name}</p>
          <p>{track.artists.map((artist: { name: string }) => artist.name).join(", ")}</p> 
        </div>
      ))}
    </>
  );
};

export default SpotifySearchInput;
