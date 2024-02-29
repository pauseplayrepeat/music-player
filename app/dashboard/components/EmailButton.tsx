"use client"

import React from 'react';
import { SpotifyTrack } from '@/types';
import Button from '@/components/Button';
import toast from 'react-hot-toast';


interface EmailButtonProps {
  track: SpotifyTrack;
}

const EmailButton: React.FC<EmailButtonProps> = ({ track }) => {
    const handleClick = async () => {
      const response = await fetch('/api/emails', {
        method: 'POST',
        body: JSON.stringify({
          track: track
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
        Send Email
      </Button>
    );
  };
  
  export default EmailButton;