"use client";

import { useMemo } from 'react';

import { usePathname } from 'next/navigation';

import React from 'react'

import { HiHome } from 'react-icons/hi';

import { BiLogoSpotify, BiSearch } from 'react-icons/bi';

import Box from "../components/Box"

import SidebarItem from "../components/SidebarItem"

import Library from "../components/Library"

import { Song, SpotifyTrack } from "../types"

interface SidebarProps {
    children: React.ReactNode;
    // userSongs: Song[];
    spotifyTracks: SpotifyTrack[];
}

const Sidebar: React.FC<SidebarProps> = ({children, spotifyTracks }) => {
    const pathname = usePathname();

    const routes = useMemo(() => {
        return [
            {
                icon: HiHome,
                label: 'Home',
                active: pathname !== '/search',
                href : '/',
            },
            {
                icon: BiSearch,
                label: 'Search',
                active: pathname === '/search',
                href : '/search',
            },
            {
                icon: BiLogoSpotify,
                label: 'Spotify',
                active: pathname === '/spotify',
                href : '/spotify',
            }
        ]
    }, [pathname]);

  return (
    <div className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] text-white p-2">
            <Box>
                <div className="
                flex
                flex-col
                gap-y-1
                px-5
                py-4
                "
             >
                {routes.map((item) => (
                    <SidebarItem
                    key={item.label}
                    {...item }
                    />
                ))}
                </div>
            </Box>
            <Box className="overflow-y-auto h-full">
                {/* <Library spotifyTracks={spotifyTracks}/> */}
                <div></div>
            </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
  )
}

export default Sidebar;