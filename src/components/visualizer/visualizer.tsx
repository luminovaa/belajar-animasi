import React, { useRef, useState, useEffect } from "react";
import WaveForm from "./waveFrom";
import LyricDisplay from "@/components/lyrics/lyricsdisplay";
import { LanguageOption } from "@/components/lyrics/type";
import { lyricsData } from "@/utils/lyrics";
import Navbar from "@/components/navbar";
import CustomAudioPlayer from "./customaudio";
import PaperView from "../content/lagu";

interface AnalyzerData {
  analyzer: AnalyserNode;
  bufferLength: number;
  dataArray: Uint8Array;
}

const Visualizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [analyzerData, setAnalyzerData] = useState<AnalyzerData | null>(null);
  const [language, setLanguage] = useState<LanguageOption>("romaji");
  const [showPaperView, setShowPaperView] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

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
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    if (!audioContextRef.current) {
      setupAudioContext();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const setupAudioContext = () => {
    const audio = audioRef.current;
    if (audio) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const analyzer = audioContextRef.current.createAnalyser();
      analyzer.fftSize = 1024;

      const source = audioContextRef.current.createMediaElementSource(audio);
      source.connect(analyzer);
      analyzer.connect(audioContextRef.current.destination);

      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      setAnalyzerData({ analyzer, bufferLength, dataArray });
    }
  };

  const togglePaperView = () => {
    setShowPaperView((prev) => !prev);
  };

  return (
    <div className="relative w-full z-50 h-screen flex flex-col items-center justify-start overflow-hidden">
        {analyzerData && isPlaying && <WaveForm analyzerData={analyzerData} />}
        <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="mt-2 z-40 w-full max-w-3xl max-sm:max-w-xs">
        <audio ref={audioRef} src="/Hikarunara.mp3" loop controls={false} />
        <CustomAudioPlayer audioRef={audioRef} />
      </div>
      <div className="z-0">
        <LyricDisplay
          audioRef={audioRef}
          language={language}
          lyricsData={lyricsData}
        />
      </div>
      {showPaperView && (
        <div className=" z-20">
          <PaperView language={language} />
        </div>
      )}
      <button
        onClick={togglePaperView}
        className={` hover:animate-[ease-in-out]] fixed top-20 -left-2 py-2 px-4 rounded shadow-lg z-30 ${
          showPaperView ? "bg-pink-800 text-white" : "bg-pink-500 text-white"
        }`}
      >
        Lagu
      </button>
    </div>
  );
};

export default Visualizer;
