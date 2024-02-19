import { Figtree } from 'next/font/google'

import getSongsByUserId from '@/actions/getSongsByUserId'
import Sidebar from '@/components/Sidebar'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import { SpotifyProvider } from '@/providers/SpotifyProvider';
import Player from '@/components/Player'
import SpotifyAuthModal from './spotify/components/SpotifyAuthModal'

import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'PausePlayRepeat Music: Discover, Share, and Promote Music',
  description: 'Join PausePlayRepeat Music, the ultimate music community app for producers and enthusiasts. Upload, discover fresh tunes, and engage with the music world like never before. Start promoting your music or explore new sounds today!',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <SpotifyProvider> {/* Include the SpotifyProvider here */}
              <SpotifyAuthModal /> {/* Include the SpotifyAuthModal here */}
              <Sidebar songs={userSongs}>
                {children}
              </Sidebar>
              <Player />
            </SpotifyProvider>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
