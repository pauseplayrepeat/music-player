import { EmailTemplate } from '@/components/Emails/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
    const { track } = await request.json();
    const data = await resend.emails.send({
      from: 'hello@pauseplayrepeat.com',
      to: ['mrsqueex@gmail.com'],
      subject: `New track: ${track.song_title}`,
      react: EmailTemplate({
        firstName: 'Andrew',
        track: track
      }),
    });

    return NextResponse.json(data);
} catch (error) {
  return NextResponse.json({ error });
}
}