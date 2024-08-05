import React, { useRef, useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { throttle } from 'lodash';
import WaveForm from "./waveFrom";
import LyricDisplay from "@/components/lyrics/lyricsdisplay";
import { LanguageOption } from "@/components/lyrics/type";
import { lyricsData } from "@/utils/lyrics";
import Navbar from "@/components/navbar";
import CustomAudioPlayer from "./customaudio";
import ReusableButton from "@/hooks/ReusabelButton";

const LazyLagu = lazy(() => import('../content/lagu'));
const LazyAnime = lazy(() => import('../content/anime'));
interface AnalyzerData {
  analyzer: AnalyserNode;
  bufferLength: number;
  dataArray: Uint8Array;
}

const MemoizedNavbar = React.memo(Navbar);
const MemoizedCustomAudioPlayer = React.memo(CustomAudioPlayer);

const Visualizer: React.FC = () => {
  const [state, setState] = useState({
    isPlaying: false,
    language: 'romaji' as LanguageOption,
  });
  const [analyzerData, setAnalyzerData] = useState<AnalyzerData | null>(null);
  const [contentState, setContentState] = useState({
    showLagu: false,
    showAnime: false
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const setIsPlaying = useCallback((value: boolean) => {
    setState(prev => ({ ...prev, isPlaying: value }));
  }, []);

  const setLanguage = useCallback((value: LanguageOption) => {
    setState(prev => ({ ...prev, language: value }));
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    if (!audioContextRef.current) {
      setupAudioContext();
    }
  }, [setIsPlaying]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, [setIsPlaying]);

  const setupAudioContext = useCallback(throttle(() => {
    const audio = audioRef.current;
    if (audio && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyzer = audioContextRef.current.createAnalyser();
      analyzer.fftSize = 1024;

      const source = audioContextRef.current.createMediaElementSource(audio);
      source.connect(analyzer);
      analyzer.connect(audioContextRef.current.destination);

      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      setAnalyzerData({ analyzer, bufferLength, dataArray });
    }
  }, 200), []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);

      audio.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });

      return () => {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
      };
    }
  }, [handlePlay, handlePause]);

  const toggleContent = useCallback((content: 'lagu' | 'anime') => {
    setContentState(prevState => ({
      showLagu: content === 'lagu' ? !prevState.showLagu : false,
      showAnime: content === 'anime' ? !prevState.showAnime : false
    }));
  }, []);

  const memoizedAnalyzerData = useMemo(() => analyzerData, [analyzerData]);

  return (
    <div className="relative w-full z-50 h-screen flex flex-col items-center justify-start overflow-hidden">
      {state.isPlaying && memoizedAnalyzerData && <WaveForm analyzerData={memoizedAnalyzerData} />}
      <MemoizedNavbar language={state.language} setLanguage={setLanguage} />
      
      <div className="mt-2 z-40 w-full max-w-3xl max-sm:max-w-xs">
        <audio ref={audioRef} src="/Hikarunara.mp3" loop controls={false} />
        <MemoizedCustomAudioPlayer audioRef={audioRef} />
      </div>
      <div className="-z-50">
        <LyricDisplay
          audioRef={audioRef}
          language={state.language}
          lyricsData={lyricsData}
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {contentState.showLagu && <LazyLagu language={state.language} />}
        {contentState.showAnime && <LazyAnime language={state.language} />}
      </Suspense>
      
      <ReusableButton
        onClick={() => toggleContent('lagu')}
        isActive={contentState.showLagu}
        className="fixed top-20 -left-2 mx-2"
      >
        Lagu
      </ReusableButton>
      
      <ReusableButton
        onClick={() => toggleContent('anime')}
        isActive={contentState.showAnime}
        className="fixed top-32 -left-2"
      >
        Anime
      </ReusableButton>
    </div>
  );
};

export default React.memo(Visualizer);