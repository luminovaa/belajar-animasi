// components/Loading.tsx
import React from 'react';

interface LoadingProps {
    progress: number;
}
const Loading: React.FC<LoadingProps> = ({progress}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-100">
      <div className="flex justify-center items-end h-16">
        {['♩', '♪', '♫', '♬'].map((note, index) => (
          <span 
            key={index} 
            className={`text-4xl text-pink-500 mx-1 animate-bounce`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {note}
          </span>
        ))}
      </div>
      <div className='w-64 bg-pink-200 rounded-full h-4 mb-4'>
        <div className='bg-pink-500 h-4 rounded-full'
        style={{width: `${progress}%`}}></div>
      </div>
      <p className="mt-5 text-lg font-bold text-pink-500">Loading... {Math.round(progress)}%</p>
    </div>
  );
};

export default Loading;