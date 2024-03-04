"use client";

import React, { useEffect } from 'react';
import AuthModal from '@/components/AuthModal';
import useAuthModal from '@/hooks/useAuthModal';
import Header from '@/components/Header';

const SignInPage = () => {
    const { onOpen } = useAuthModal();

    useEffect(() => {
        onOpen(); // Open the modal when the page loads
    }, [onOpen]);

    return (
        <div>
             <Header>
      <div className="mb-2">
        <h1 className="text-white text-3xl font-semibold">
            {/* Welcome back */}
        </h1>
        <div className="grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          {/* <ListItem name="Liked Songs" image="/images/liked.png" href="liked" /> */}
        </div>
      </div>
    </Header>
            {/* The AuthModal component is included in the component tree,
                but its visibility is controlled by its internal state. */}
            <AuthModal />
        </div>
    );
};

export default SignInPage;