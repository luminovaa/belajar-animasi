import React, { useRef, useState, useEffect } from "react";
import WaveForm from "./waveFrom";
import LyricDisplay from "@/components/lyrics/lyricsdisplay";
import { LanguageOption } from "@/components/lyrics/type";
import { lyricsData } from "@/utils/lyrics";
import Navbar from "@/components/navbar";
import CustomAudioPlayer from "./customaudio";
import Lagu from "../content/lagu";
import Anime from "../content/anime";
import SidebarButton from "../Reusable/siderbutton";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Character from "../content/character";

interface AnalyzerData {
  analyzer: AnalyserNode;
  bufferLength: number;
  dataArray: Uint8Array;
}

const Visualizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [analyzerData, setAnalyzerData] = useState<AnalyzerData | null>(null);
  const [language, setLanguage] = useState<LanguageOption>("romaji");
  const [showLagu, setShowLagu] = useState<boolean>(false);
  const [showAnime, setShowAnime] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<"lagu" | "anime" | "caracter" | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

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



  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const handleContentClick = (action: () => void) => {
  //   action();
  //   closeSidebar();
  // };

  const handleClose = () => {
    setActiveContent(null);
  };
  const handleContentToggle = (content: 'lagu' | 'anime' | 'caracter') => {
    if (activeContent === content) {
      setActiveContent(null);
    } else {
      setActiveContent(content);
    }
    closeSidebar();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full z-50 h-screen flex flex-col items-center justify-start overflow-hidden">
      {analyzerData && isPlaying && <WaveForm analyzerData={analyzerData} />}
      <div className="hidden md:block">
      <Navbar language={language} setLanguage={setLanguage} />
      </div>
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
      {activeContent === 'lagu' && (
        <div className="z-20">
          <Lagu language={language} onClose={handleClose}/>
        </div>
      )}
      {activeContent === 'anime' && (
        <div className="z-20">
          <Anime language={language} onClose={handleClose} />
        </div>
      )}
      {activeContent === 'caracter' && (
        <div className="z-20">
          <Character language={language} onClose={handleClose} />
        </div>
      )}

      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-2 -left-2 z-40 bg-pink-500 opacity-70 ml-1  text-white py-2 px-3 rounded shadow-lg"
      >
        <GiHamburgerMenu className="h-6 " />
      </button>

      {/* Sidebar for mobile */}
      <div
        ref={sidebarRef}
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <button
            onClick={closeSidebar}
            className="self-end text-gray-500 hover:text-gray-700"
          >
            <GrFormClose className="w-10 h-auto" />
          </button>
          
          <Navbar language={language} setLanguage={setLanguage} isMobile={true} />
          <SidebarButton
            onClick={() => handleContentToggle('anime')}
            isActive={activeContent === 'anime'}
            label="Anime"
          />
          <SidebarButton
            onClick={() => handleContentToggle('lagu')}
            isActive={activeContent === 'lagu'}
            label="Lagu"
          />
        </div>
      </div>

      {/* Buttons for desktop */}
      <div className="hidden md:block">
        <div className="fixed flex flex-col top-20 -left-2 space-y-4 opacity-50">
          <SidebarButton
            onClick={() => handleContentToggle('anime')}
            isActive={activeContent === 'anime'}
            label="Anime"
          />
          <SidebarButton
            onClick={() => handleContentToggle('caracter')}
            isActive={activeContent === 'caracter'}
            label="Character"
          />
        <SidebarButton
            onClick={() => handleContentToggle('lagu')}
            isActive={activeContent === 'lagu'}
            label="Lagu"
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
