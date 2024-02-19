"use client";

import React, { useEffect } from 'react';
import AuthModal from '@/components/AuthModal';
import useAuthModal from '@/hooks/useAuthModal';

const SignInPage = () => {
    const { onOpen } = useAuthModal();

    useEffect(() => {
        onOpen(); // Open the modal when the page loads
    }, [onOpen]);

    return (
        <div>
            {/* The AuthModal component is included in the component tree,
                but its visibility is controlled by its internal state. */}
            <AuthModal />
        </div>
    );
};

export default SignInPage;