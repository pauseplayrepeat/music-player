"use client"

import React from 'react';
import { SpotifyPlaylist, SpotifyTrack } from '@/types';
import Button from '@/components/Button';
import toast from 'react-hot-toast';
import { MailPlus } from 'lucide-react';


interface EmailButtonProps {
  playlist: SpotifyPlaylist | null;
}

const EmailButton: React.FC<EmailButtonProps> = ({ playlist }) => {
    const handleClick = async () => {
      const response = await fetch('/api/emails', {
        method: 'POST',
        body: JSON.stringify({
          track: playlist
        }),
      });
  
      if (!response.ok) {
        console.error('Failed to send email');
        toast.error('Failed to send email'); // Add this line
      } else {
        toast.success('Email sent successfully'); // Add this line
      }
    };
  
    return (
      <Button onClick={handleClick}>
        <MailPlus />
      </Button>
    );
  };
  
  export default EmailButton;