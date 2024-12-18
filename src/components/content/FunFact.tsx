import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageOption } from "@/utils/type";
import { Card } from "@/components/Reusable/card";
import { TentangFact, FactName, FactDescriptions } from "@/utils/Fact";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { TypedText } from "@/components/Reusable/typedtext";
import { LoadingSpinner } from "@/components/Reusable/LoadingSpinner";
import LazyLoad from "react-lazy-load";

interface FactProps {
  language: LanguageOption;
  onClose: () => void;
}

export default function Fact({ language, onClose }: FactProps) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleNext = () => {
    setImagesLoaded(false);
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % TentangFact.length);
  };

  const handlePrevious = () => {
    setImagesLoaded(false);
    setCurrentFactIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleImageLoad = () => {
      setImagesLoaded(true);
  };
  const currentFact = TentangFact[currentFactIndex];
  const isFirstFact = currentFactIndex === 0;
  const isLastFact = currentFactIndex === TentangFact.length - 1;
  const deskripsi = FactDescriptions[currentFact.id]?.[language];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-2xl mb-4">
          {FactName[currentFact.id][language]}
        </p>
        <div className="flex flex-col items-center">
          <motion.div
            key={currentFactIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              ease: "linear",
              duration: 0.5,
            }}
            className="relative w-48 h-48 mb-4"
          >
            {!imagesLoaded && <LoadingSpinner />}
            <LazyLoad height={200} offset={70}>
              <Image
                src={currentFact.photo}
                alt={FactName[currentFact.id][language]}
                layout="fill"
                objectFit="cover"
                className={`rounded-xl shadow-2xl shadow-pink-500 transition-opacity duration-300 ${
                  imagesLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={handleImageLoad}
              />
            </LazyLoad>
          </motion.div>
          <TypedText strings={[deskripsi]} />
          <div className="absolute bottom-4 right-4 px-4 py-2 space-x-7">
            <button
              onClick={handlePrevious}
              disabled={isFirstFact}
              className={`rounded-md transition-colors ${
                isFirstFact
                  ? " text-gray-500 cursor-not-allowed"
                  : " text-pink-500 transform hover:scale-150 transition duration-300"
              }`}
            >
              <GrLinkPrevious />
            </button>
            <button
              onClick={handleNext}
              disabled={isLastFact}
              className={`rounded-md transition-colors ${
                isLastFact
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
