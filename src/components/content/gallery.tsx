import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageOption } from "@/utils/type";
import { Card } from "@/components/Reusable/card";
import { TentangCharacters, CharacterNames, CharacterDescriptions } from "@/utils/character";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { TypedText } from "../Reusable/typedtext";
import { Gallery } from "@/utils/gallery";

interface GalleryViewProps {
  onClose: () => void;
}

export default function GalleryView({  onClose }: GalleryViewProps) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const handleNext = () => {
    setCurrentGalleryIndex(
      (prevIndex) => (prevIndex + 1) % Gallery.length
    );
  };

  const handlePrevious = () => {
    setCurrentGalleryIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentGallery = Gallery[currentGalleryIndex];
  const isFirstGallery = currentGalleryIndex === 0;
  const isLastGallery =
    currentGalleryIndex === Gallery.length - 1;;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <div className="flex flex-col items-center">
          <motion.div
            key={currentGalleryIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              ease: 'linear',
               duration: 0.5 
              }}
            className="relative w-[30rem] mt-8 h-[25rem] mb-4"
          >
            <Image
              src={currentGallery.photo}
              alt={currentGallery.id}
              layout="fill"
              objectFit="cover"
              className=" shadow-2xl shadow-pink-500"
            />
          </motion.div>
          <div className="absolute bottom-4 right-4 px-4 py-2 space-x-7">
            <button
              onClick={handlePrevious}
              disabled={isFirstGallery}
              className={`rounded-md transition-colors ${
                isFirstGallery
                  ? " text-gray-500 cursor-not-allowed"
                  : " text-pink-500 transform hover:scale-150 transition duration-300"
              }`}
            >
              <GrLinkPrevious />
            </button>
            <button
              onClick={handleNext}
              disabled={isLastGallery}
              className={`rounded-md transition-colors ${
                isLastGallery
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
