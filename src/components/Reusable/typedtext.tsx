import React from 'react';
import { ReactTyped } from "react-typed";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
}

export function TypedText({ strings, typeSpeed = 25 }: TypedTextProps) {
  return (
    <div className="text-pink-400 font-baloo max-sm:text-sm text-lg capitalize text-justify">
      <ReactTyped strings={strings} typeSpeed={typeSpeed} />
    </div>
  );
}