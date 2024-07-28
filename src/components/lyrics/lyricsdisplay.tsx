import React, { useState, useEffect } from 'react';
import { LyricsData, LanguageOption, LyricLine } from './type';


interface LyricDisplayProps {
    audioRef: React.RefObject<HTMLAudioElement>;
    language: LanguageOption;
    lyricsData: LyricsData;
  }
  
  const LyricDisplay: React.FC<LyricDisplayProps> = ({ audioRef, language, lyricsData }) => {
    const [currentLyric, setCurrentLyric] = useState<LyricLine | null>(null);
    const lyrics = lyricsData[language];
  
    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
  
      const updateLyric = () => {
        const currentTime = audio.currentTime;
        const newLyric = lyrics.find((lyric, index) => 
          currentTime >= lyric.startTime && 
          (index === lyrics.length - 1 || currentTime < lyrics[index + 1].startTime)
        ) || null;
        
        setCurrentLyric(newLyric);
      };
  
      audio.addEventListener('timeupdate', updateLyric);
      audio.addEventListener('seeking', updateLyric);
  
      return () => {
        audio.removeEventListener('timeupdate', updateLyric);
        audio.removeEventListener('seeking', updateLyric);
      };
    }, [audioRef, lyrics]);
  
    return (
      <div className=" absolute w-full flex flex-row justify-center items-end bottom-20 h-full  -z-10">
        {currentLyric ? currentLyric.text : ''}
      </div>
    );
  };
  
  export default LyricDisplay;