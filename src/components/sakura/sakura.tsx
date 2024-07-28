'use client'
import { useEffect } from 'react';
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
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {petals.map((petal) => (
          <SakuraPetal
            key={petal.id}
            style={{
              left: `${petal.x}px`,
              top: `${petal.y}px`,
              transform: `rotate(${petal.rotation}deg) scale(${petal.scale})`,
            }}
            fallDistance={petal.fallDistance}
          />
        ))}
      </div>
    </div>
  );
}