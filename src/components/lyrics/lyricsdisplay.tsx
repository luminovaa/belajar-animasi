import React, { useState, useEffect } from 'react';
import { LyricsData, LanguageOption, LyricLine } from '@/utils/type';
import AnimatedLyrics from './animatedlyrics';


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
        const newLyric = lyrics.find(lyric => 
          currentTime >= lyric.startTime && currentTime < lyric.endTime
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
      <div className="lyric-display font-baloo absolute -bottom-3 left-0 right-0 z-10">
        <AnimatedLyrics currentLyric={currentLyric} />
      </div>
    );
  };
  
  export default LyricDisplay;