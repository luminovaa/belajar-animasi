import React from "react";
import Image from "next/image";
import { TentangAnime } from "@/utils/anime";
import { motion } from "framer-motion";
import { LanguageOption } from "@/utils/type";
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
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              ease: 'linear',
               duration: 0.5 
              }}
            className="relative w-full max-w-[300px] h-[200px] mb-4"
          >
          <Image
            src="/anime.jpg"
            alt="Anime"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-2xl shadow-pink-500"
          />
          </motion.div>
        <TypedText strings={TentangAnime[language]} />
      </Card>
    </div>
  );
}