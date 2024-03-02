"use client";
import Header from "@/components/Header";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";


const SparklesPreview = () => {
  return (
    <>
        <Header>
        <div className="mb-2">
      <h1 
        className="
        text-white 
          text-3xl 
          font-semibold
        ">
          {/* Welcome back */}
      </h1>
      <div 
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          xl:grid-cols-3 
          2xl:grid-cols-4 
          gap-3 
          mt-4
        "
      >
        {/* <ListItem 
          name="Liked Songs" 
          image="/images/liked.png" 
          href="liked" 
        /> */}
      </div>
    </div>
  </Header>

    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#99d8f5"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Elevate Your Music Journey
      </h1>
      <p className="text-center text-white relative mt-8 text-xl">
      Pauseplayrepeat is more than just a music app – it's a thriving community where artists and fans connect through the universal language of music.
      </p>
    </div>
    </>
  );
}

export default SparklesPreview;
