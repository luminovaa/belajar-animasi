import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

interface CustomAudioPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [audioRef]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedValue = (x / rect.width) * duration ;
      audioRef.current.currentTime = clickedValue;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex items-center w-full opacity-60 text-white  space-x-4">
    <button 
      onClick={togglePlayPause} 
      className="text-white font-bold p-2 rounded-full"
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
    
    <div className="flex-grow relative">
      <div 
        ref={progressRef}
        className="w-full h-2 bg-gray-300 rounded-full cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-pink-500 rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
    </div>
    
    <div className="text-sm whitespace-nowrap">
      {formatTime(currentTime)} / {formatTime(duration)}
    </div>
    
    <div className="flex items-center">
      <button 
        onClick={toggleMute}
        className=""
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="ml-2 w-20"
      />
    </div>
  </div>
);
};

export default CustomAudioPlayer;