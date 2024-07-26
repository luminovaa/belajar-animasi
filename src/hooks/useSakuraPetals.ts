// hooks/useSakuraPetals.ts
import { useState, useCallback } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const useSakuraPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  const addPetal = useCallback((x: number, y: number) => {
    const newPetal: Petal = {
      id: Date.now(),
      x,
      y,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
    };
    setPetals((prevPetals) => [...prevPetals, newPetal]);

    // Remove the petal after 3 seconds
    setTimeout(() => {
      setPetals((prevPetals) => prevPetals.filter(petal => petal.id !== newPetal.id));
    }, 3000);
  }, []);

  return { petals, addPetal };
};

export default useSakuraPetals;