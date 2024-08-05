import React from "react";
import Image from "next/image";
import {ReactTyped} from "react-typed"; // Hilangkan { } karena ReactTyped adalah default export
import { tentangLagu } from "@/utils/tentanglagu";
import { LanguageOption } from "@/components/lyrics/type";

interface PaperViewProps {
  language: LanguageOption;
}

export default function PaperView({ language }: PaperViewProps) {
  return (
    <div className="p-5 flex justify-center items-center min-h-screen">
      <div
        className="bg-black bg-opacity-70 border-2 border-pink-400 rounded-lg p-5 shadow-[0_0_10px_#ff69b4,0_0_20px_#ff69b4,0_0_30px_#ff69b4] 
      animate-pink-pulse w-[40rem] flex flex-col items-center"
      >
        <Image
          src="/YLIA1.jpg"
          alt="YLIA 1"
          width={300}
          height={100}
          className="rounded-md mb-4 shadow-2xl shadow-pink-500"
        />
        <div className="text-pink-400 font-baloo max-sm:text-sm text-lg capitalize text-justify">
          <ReactTyped strings={tentangLagu[language]} typeSpeed={25} />
        </div>
      </div>
    </div>
  );
}
