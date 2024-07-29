import React from "react";
import Paper from "./paper";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { tentangLagu } from "@/utils/tentanglagu";
import { LanguageOption } from '@/components/lyrics/type';

interface PaperViewProps {
  language: LanguageOption;
}

export default function PaperView({ language }: PaperViewProps) {
  return (
    <div className="relative z-20">
      <div className="absolute inset-0 flex flex-col justify-start items-center top-28">
        <Image
          src="/YLIA1.jpg"
          alt="YLIA 1"
          width={300}
          height={100}
          className="border-2 border-pink-500 rounded-lg drop-shadow-sm shadow-pink-500"
        />
        <div className="mt-4 max-w-sm text-left capitalize text-base">
          <ReactTyped
            strings={tentangLagu[language]}
            typeSpeed={50}
          />
        </div>
      </div>
      <Paper />
    </div>
  );
}