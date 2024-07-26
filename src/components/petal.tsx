'use client'
import React from 'react';
import Image from 'next/image';

interface SakuraPetalProps {
  style: React.CSSProperties;
}

const SakuraPetal: React.FC<SakuraPetalProps> = ({ style }) => {
  return (
    <div className="absolute animate-fall" style={style}>
      <Image 
        src="/sakura.png"
        alt="Sakura Petal"
        width={10}
        height={10}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default SakuraPetal;