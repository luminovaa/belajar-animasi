import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageOption } from "@/utils/type";
import { Card } from "@/components/Reusable/card";
import { TentangCharacters, CharacterNames, CharacterDescriptions } from "@/utils/character";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { TypedText } from "@/components/Reusable/typedtext";
import { LoadingSpinner } from "@/components/Reusable/LoadingSpinner";
import LazyLoad from "react-lazy-load";

interface CharacterProps {
  language: LanguageOption;
  onClose: () => void;
}

export default function Character({ language, onClose }: CharacterProps) {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const handleNext = () => {
    setImagesLoaded(false);
    setCurrentCharacterIndex(
      (prevIndex) => (prevIndex + 1) % TentangCharacters.length
    );
  };

  const handlePrevious = () => {
    setImagesLoaded(false);
    setCurrentCharacterIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);
  }
  const currentCharacter = TentangCharacters[currentCharacterIndex];
  const isFirstCharacter = currentCharacterIndex === 0;
  const isLastCharacter =
    currentCharacterIndex === TentangCharacters.length - 1;
  const deskripsi = CharacterDescriptions[currentCharacter.id]?.[language];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-2xl mb-4">
          {CharacterNames[currentCharacter.id][language]}
        </p>
        <div className="flex flex-col items-center">
          <motion.div
            key={currentCharacterIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              ease: 'linear',
               duration: 0.5 
              }}
            className="relative w-48 h-48 mb-4"
          >
            {!imagesLoaded && <LoadingSpinner />}
            <LazyLoad height={200} offset={70}>
            <Image
              src={currentCharacter.photo}
              alt={CharacterNames[currentCharacter.id][language]}
              quality={50}
              layout="fill"
              objectFit="cover"
              className={`rounded-full shadow-2xl shadow-pink-500 transition-opacity duration-300 ${
                imagesLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadingComplete={handleImageLoad}
            />
            </LazyLoad>
          </motion.div>
          <TypedText strings={[deskripsi]} />
          <div className="absolute bottom-4 right-4 px-4 py-2 space-x-7">
            <button
              onClick={handlePrevious}
              disabled={isFirstCharacter}
              className={`rounded-md transition-colors ${
                isFirstCharacter
                  ? " text-gray-500 cursor-not-allowed"
                  : " text-pink-500 transform hover:scale-150 transition duration-300"
              }`}
            >
              <GrLinkPrevious />
            </button>
            <button
              onClick={handleNext}
              disabled={isLastCharacter}
              className={`rounded-md transition-colors ${
                isLastCharacter
                  ? " text-gray-500 cursor-not-allowed"
                  : "text-pink-500 transform hover:scale-150 transition duration-300"
              }`}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
