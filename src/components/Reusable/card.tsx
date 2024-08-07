import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClose?: () => void;
}

export function Card({ children, onClose }: CardProps) {
  return (
    <div className="relative bg-black bg-opacity-70 border-2 border-pink-400 rounded-lg p-5 shadow-[0_0_10px_#ff69b4,0_0_20px_#ff69b4,0_0_30px_#ff69b4] 
    animate-pink-pulse w-[40rem] max-sm:w-[20rem] min-h-[31rem] flex flex-col items-center">
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-pink-400 hover:text-pink-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      {children}
    </div>
  );
}