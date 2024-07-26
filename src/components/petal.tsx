'use client'
import React from 'react';
import Image from 'next/image';

interface SakuraPetalProps {
  style: React.CSSProperties;
  fallDistance: number;
}

const SakuraPetal: React.FC<SakuraPetalProps> = ({ style, fallDistance }) => {
  return (
    <div className="absolute" style={style}>
      <Image 
        src="/sakura.png"
        alt="Sakura Petal"
        width={20}
        height={20}
        className={`w-auto h-auto animate-fall`}
        style={{
          '--fall-distance': `${fallDistance}px`,
        } as React.CSSProperties}
      />
    </div>
  );
};
export default SakuraPetal;