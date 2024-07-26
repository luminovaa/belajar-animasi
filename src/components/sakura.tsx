'use client'
import React, { useEffect } from 'react';
import useSakuraPetals from '@/hooks/useSakuraPetals';
import SakuraPetal from './petal';

export default function Sakura() {
  const { petals, addPetal } = useSakuraPetals();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      addPetal(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [addPetal]);

  return (
    <div className="min-h-screen bg-gray-100">
      {petals.map((petal) => (
        <SakuraPetal
          key={petal.id}
          style={{
            left: `${petal.x}px`,
            top: `${petal.y}px`,
            transform: `rotate(${petal.rotation}deg) scale(${petal.scale})`,
          }}
        />
      ))}
      <h1 className="text-3xl font-bold text-center pt-10">
        Click anywhere to create falling sakura petals!
      </h1>
    </div>
  );
}