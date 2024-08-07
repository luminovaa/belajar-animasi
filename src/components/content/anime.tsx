import React from "react";
import Image from "next/image";
import { TentangAnime } from "@/utils/anime";
import { LanguageOption } from "@/components/lyrics/type";
import { Card } from "@/components/Reusable/card";
import { TypedText } from "@/components/Reusable/typedtext";

interface AnimeProps {
  language: LanguageOption;
  onClose: () => void;
}

export default function Anime({ language, onClose }: AnimeProps) {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-xl sm:text-2xl capitalize text-center mb-4">Shigatsu Wa Kimino Uso</p>
        <div className="relative w-full max-w-[300px] h-[200px] mb-4">
          <Image
            src="/anime.jpg"
            alt="Anime"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-2xl shadow-pink-500"
          />
        </div>
        <TypedText strings={TentangAnime[language]} />
      </Card>
    </div>
  );
}