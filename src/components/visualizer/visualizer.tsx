'use client'
import { useRef, useState, useEffect } from "react";
import WaveForm from "./waveFrom";

export default function Visualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [analyzerData, setAnalyzerData] = useState<{
    analyzer: AnalyserNode;
    bufferLength: number;
    dataArray: Uint8Array;
  } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      
      // Attempt to autoplay
      audio.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
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
      audioContextRef.current = new (window.AudioContext || window.AudioContext)();
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

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden">
      {analyzerData && isPlaying && <WaveForm analyzerData={analyzerData} />}
      <div className="mt-4">
        <audio 
          ref={audioRef}
          src="/Hikarunara.mp3" 
          controls
          loop
          className="max-w-full"
        />
      </div>
    </div>
  );
}
