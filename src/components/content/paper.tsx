import Image from "next/image";
import React from "react";

export default function Paper() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/paper.png"
        alt="Paper"
        quality={100}
        width={450}
        height={100}
        className="shadow-2xl shadow-pink-500 rounded-lg"
        loading="lazy"
      />
    </div>
  );
}
