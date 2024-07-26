import { useState, useCallback, useEffect } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  fallDistance: number;
}

const useSakuraPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addPetal = useCallback((x: number, y: number) => {
    const newPetal: Petal = {
      id: Date.now(),
      x,
      y,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      fallDistance: Math.min(windowHeight - y, windowHeight * 1) 
    };
    setPetals((prevPetals) => [...prevPetals, newPetal]);

    setTimeout(() => {
      setPetals((prevPetals) => prevPetals.filter(petal => petal.id !== newPetal.id));
    }, 3000);
  }, [windowHeight]);

  return { petals, addPetal };
};

export default useSakuraPetals;