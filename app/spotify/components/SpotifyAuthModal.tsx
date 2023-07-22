"use client";

import Modal from "@/components/Modal";
import useAuthModal from "@/hooks/useAuthModal";

import { useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SpotifyAuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

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
            title="Welcome to Spotify"
            description="Authorize to fetch your songs"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth 
                theme="dark"
                magicLink
                providers={["spotify"]}  // Only include "spotify" as a provider
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
