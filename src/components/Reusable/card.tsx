import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-black bg-opacity-70 border-2 border-pink-400 rounded-lg p-5 shadow-[0_0_10px_#ff69b4,0_0_20px_#ff69b4,0_0_30px_#ff69b4] 
    animate-pink-pulse w-[40rem] min-h-[31rem] flex flex-col items-center">
      {children}
    </div>
  );
}