import { create } from 'zustand'

interface SpotifyAuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSpotifyAuthModal = create<SpotifyAuthModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false })),
}));

export default useSpotifyAuthModal;
