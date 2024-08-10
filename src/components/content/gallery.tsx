import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/Reusable/card";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Gallery } from "@/utils/gallery";
import { CgSpinner } from "react-icons/cg";
import { LoadingSpinner } from "../Reusable/LoadingSpinner";

interface GalleryViewProps {
  onClose: () => void;
}

export default function GalleryView({ onClose }: GalleryViewProps) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Assuming 768px as the breakpoint for mobile
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    setImagesLoaded(new Array(Gallery.length).fill(false));
  }, []);

  const imagesPerPage = isMobile ? 2 : 4;
  const galleryToDisplay = Gallery.slice(
    currentGalleryIndex,
    currentGalleryIndex + imagesPerPage
  );

  const handleNext = () => {
    setCurrentGalleryIndex((prev) =>
      prev + imagesPerPage < Gallery.length ? prev + imagesPerPage : prev
    );
  };

  const handlePrevious = () => {
    setCurrentGalleryIndex((prev) => Math.max(prev - imagesPerPage, 0));
  };

  const handleImageLoad = (index: number) => {
    setTimeout(() => {
      setImagesLoaded((prev) => {
        const newState = [...prev];
        newState[currentGalleryIndex + index] = true;
        return newState;
      });
    }, 1000);
  };

  const isFirstGallery = currentGalleryIndex === 0;
  const isLastGallery = currentGalleryIndex + imagesPerPage >= Gallery.length;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <h2 className="font-baloo m-3 text-2xl text-pink-500">Gallery Shigatsu Wa Kimi No Uso</h2>
        <div
          className={`grid ${
            isMobile ? "grid-cols-1" : "md:grid-cols-2"
          } gap-4`}
        >
          {galleryToDisplay.map((gallery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              className="relative w-[15rem] h-[15rem]"
            >
              {!imagesLoaded[currentGalleryIndex + index] && 
                <LoadingSpinner/>
              }
              <Image
                src={gallery.photo}
                alt={gallery.id}
                layout="fill"
                quality={50}
                objectFit="cover"
                className={`rounded-xl shadow-2xl shadow-pink-500 transition-opacity duration-300 ${
                  imagesLoaded[currentGalleryIndex + index]
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                onLoadingComplete={() => handleImageLoad(index)}
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 px-4 py-2 space-x-7">
          <button
            onClick={handlePrevious}
            disabled={isFirstGallery}
            className={`rounded-md transition-colors ${
              isFirstGallery
                ? "text-gray-500 cursor-not-allowed"
                : "text-pink-500 transform hover:scale-150 transition duration-300"
            }`}
          >
            <GrLinkPrevious />
          </button>
          <button
            onClick={handleNext}
            disabled={isLastGallery}
            className={`rounded-md transition-colors ${
              isLastGallery
                ? "text-gray-500 cursor-not-allowed"
                : "text-pink-500 transform hover:scale-150 transition duration-300"
            }`}
          >
            <GrLinkNext />
          </button>
        </div>
      </Card>
    </div>
  );
}
