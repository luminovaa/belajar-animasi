import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/Reusable/card";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Gallery } from "@/utils/gallery";

interface GalleryViewProps {
  onClose: () => void;
}

export default function GalleryView({ onClose }: GalleryViewProps) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const galleryToDisplay = Gallery.slice(
    currentGalleryIndex,
    currentGalleryIndex + 4
  );

  const handleNext = () => {
    setCurrentGalleryIndex((prev) =>
      prev + 4 < Gallery.length ? prev + 4 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentGalleryIndex((prev) => Math.max(prev - 4, 0));
  };

  const isFirstGallery = currentGalleryIndex === 0;
  const isLastGallery = currentGalleryIndex + 4 >= Gallery.length;
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <div className="grid grid-cols-2 gap-4">
          {galleryToDisplay.map((gallery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              className="relative w-[15rem] h-[15rem]"
            >
              <Image
                src={gallery.photo}
                alt={gallery.id}
                layout="fill"
                quality={100}
                objectFit="cover"
                className="rounded-xl shadow-2xl shadow-pink-500"
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
      </Card>
    </div>
  );
}
