import React, { useState } from "react";
import Image from "next/image";
import { tentangLagu } from "@/utils/tentanglagu";
import { LanguageOption } from "@/utils/type";
import { Card } from "@/components/Reusable/card";
import { motion } from "framer-motion";
import { TypedText } from "@/components/Reusable/typedtext";
import { LoadingSpinner } from "@/components/Reusable/LoadingSpinner";
import LazyLoad from "react-lazy-load";

interface LaguProps {
  language: LanguageOption;
  onClose: () => void;
}

export default function Lagu({ language, onClose }: LaguProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
      setImageLoaded(true);
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-xl sm:text-2xl capitalize text-center mb-4">
          Hikarunara
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            ease: "linear",
            duration: 0.5,
          }}
          className="relative w-full max-w-[300px] max-sm:w-60x max-sm:h-44 h-[200px] mb-4"
        >
          {!imageLoaded && <LoadingSpinner />}
          <LazyLoad height={300} offset={70}>
            <Image
              src="/YLIA1.jpg"
              alt="YLIA 1"
              layout="fill"
              objectFit="cover"
              className={`rounded-xl shadow-2xl shadow-pink-500 transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={handleImageLoad}
            />
          </LazyLoad>
        </motion.div>
        <TypedText strings={tentangLagu[language]} />
      </Card>
    </div>
  );
}
