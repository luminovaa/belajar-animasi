import React from "react";
import Image from "next/image";
import { tentangLagu } from "@/utils/tentanglagu";
import { LanguageOption } from "@/components/lyrics/type";
import { Card } from "@/components/Reusable/card";
import { TypedText } from "@/components/Reusable/typedtext";

interface LaguProps {
  language: LanguageOption;
  onClose: ()=> void;
}

export default function Lagu({ language, onClose }: LaguProps) {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <p className="text-pink-400 font-baloo text-xl sm:text-2xl capitalize text-center mb-4">Why????</p>
        <div className="relative w-full max-w-[300px] max-sm:w-60x max-sm:h-44 h-[200px] mb-4">
          <Image
            src="/YLIA1.jpg"
            alt="YLIA 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-2xl shadow-pink-500"
          />
        </div>
        <TypedText strings={tentangLagu[language]} />
      </Card>
    </div>
  );
}