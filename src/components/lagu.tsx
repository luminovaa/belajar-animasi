'use client'
import { useRef, useState } from "react";

const Lagu: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(1);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src="/Hikarunara.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="absolute top-0">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
         max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default Lagu;
