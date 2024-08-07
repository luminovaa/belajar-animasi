import React, { useState } from "react";
import Image from "next/image";
import { LanguageOption } from "@/components/lyrics/type";
import { Card } from "@/components/Reusable/card";
import { TentangCharacters, CharacterNames, CharacterDescriptions } from "@/utils/character";
import {  GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { TypedText } from "../Reusable/typedtext";

interface CharacterProps {
  language: LanguageOption;
  onClose: () => void;
}

export default function Character({ language, onClose }: CharacterProps) {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  const handleNext = () => {
    setCurrentCharacterIndex(
      (prevIndex) => (prevIndex + 1) % TentangCharacters.length
    );
  };

  
  const handlePrevious = () => {
    setCurrentCharacterIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentCharacter = TentangCharacters[currentCharacterIndex];
  const isFirstCharacter = currentCharacterIndex === 0;
  const isLastCharacter =
    currentCharacterIndex === TentangCharacters.length - 1;
    const deskripsi = CharacterDescriptions[currentCharacter.id]?.[language];
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-xl mb-4">{CharacterNames[currentCharacter.id][language]}</p>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src={currentCharacter.photo}
              alt={CharacterNames[currentCharacter.id][language]}
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl  shadow-pink-500"
            />
            </div>
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
