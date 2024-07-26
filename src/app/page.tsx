'use client'
import Navbar from "@/components/navbar";
import VideoBackground from "@/components/vidiobackground";
import Lagu from "@/components/lagu";
import { useState } from "react";
import LyricsDisplay from "@/components/lyrics";

export default function Home() {
  const [selectedLyrics, setSelectedLyrics] = useState<string[] | null>(null)

  const handleSelectLyrics = (lyrics: string[]) => {
    setSelectedLyrics(lyrics)
  }
  return (
    <main className="relative h-screen">
      <header className="absolute w-full z-10">
        <Navbar onSelectLyrics={handleSelectLyrics} />
      <Lagu />
      </header>
      <LyricsDisplay lyrics={selectedLyrics} />
      <VideoBackground />
    </main>
  );
}

