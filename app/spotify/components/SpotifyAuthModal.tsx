"use client";

import Modal from "@/components/Modal";
import useSpotifyAuthModal from "@/hooks/useSpotifyAuthModal";

import { useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SpotifyAuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useSpotifyAuthModal();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean ) => {
        if (!open) {
            onClose();
        }
    }

  return (
    <Modal 
        title="Welcome back"
        description="Log in to your Spotify account"
        isOpen={isOpen}
        onChange={onChange}
        >
        <Auth 
            theme="dark"
            magicLink
            providers={["spotify"]} // change provider to 'spotify'
            supabaseClient={supabaseClient}
            appearance={
                {
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#99d8f5"
                            }
                    }
                }
            }

        }
        />
    </Modal>
  )
}

export default SpotifyAuthModal;
