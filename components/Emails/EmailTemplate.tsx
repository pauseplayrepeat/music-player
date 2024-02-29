
import { SpotifyTrack } from "@/types";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

    interface WelcomeEmailProps {
        firstName: string;
        track: SpotifyTrack
    }
  
  export const EmailTemplate = ({
    firstName,
    track
  }: WelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>{track.artist_name} has a new track: {track.song_title}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Hey there {firstName}. Just wanted to let you know that our artist {track.artist_name} just released their new song titled {track.song_title}! You can check it out here {track.track_url}
          </Text>
        </Container>
      </Body>
    </Html>
  );

  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const footer = {
    color: "#898989",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px",
  };
  
  const code = {
    display: "inline-block",
    padding: "16px 4.5%",
    width: "90.5%",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: "#333",
  };