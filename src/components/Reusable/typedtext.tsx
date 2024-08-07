import React from 'react';
import { ReactTyped } from "react-typed";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}

export function TypedText({ strings, typeSpeed = 10, backSpeed = 1, backDelay = 2000}: TypedTextProps) {
  return (
    <div className="text-pink-400 font-baloo max-sm:text-sm text-lg capitalize text-justify">
      <ReactTyped strings={strings} backDelay={backDelay} typeSpeed={typeSpeed} backSpeed={backSpeed}/>
    </div>
  );
}