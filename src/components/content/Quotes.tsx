import React, { useState } from "react";
import { LanguageOption } from "@/utils/type";
import { Card } from "@/components/Reusable/card";
import { TentangQuotes, QuoteNames, QuoteDescriptions } from "@/utils/Quotes";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { TypedText } from "@/components/Reusable/typedtext";

interface QuoteProps {
  language: LanguageOption;
  onClose: () => void;
}

export default function Quote({ language, onClose }: QuoteProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex + 1) % TentangQuotes.length
    );
  };

  const handlePrevious = () => {
    setCurrentQuoteIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentQuote = TentangQuotes[currentQuoteIndex];
  const isFirstQuote = currentQuoteIndex === 0;
  const isLastQuote =
    currentQuoteIndex === TentangQuotes.length - 1;
  const deskripsi = QuoteDescriptions[currentQuote.id]?.[language];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-2xl mb-4">
          {QuoteNames[currentQuote.id][language]}
        </p>
        <div className="flex flex-col items-center">
          <TypedText strings={[deskripsi]} />
          <div className="absolute bottom-4 right-4 px-4 py-2 space-x-7">
            <button
              onClick={handlePrevious}
              disabled={isFirstQuote}
              className={`rounded-md transition-colors ${
                isFirstQuote
                  ? " text-gray-500 cursor-not-allowed"
                  : " text-pink-500 transform hover:scale-150 transition duration-300"
              }`}
            >
              <GrLinkPrevious />
            </button>
            <button
              onClick={handleNext}
              disabled={isLastQuote}
              className={`rounded-md transition-colors ${
                isLastQuote
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
