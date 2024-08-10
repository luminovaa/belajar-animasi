import React from "react";
import Sakura from "@/components/sakura/sakura";

const VideoBackground = () => {
  return (
    <div className=" relative w-full h-screen max-sm:h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="/wallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <Sakura />
    </div>
  );
};

export default VideoBackground;
