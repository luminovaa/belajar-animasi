'use client'

import React, { useState } from 'react'
import { inggris, romaji, indonesia, kanji, jawa } from '@/utils/lyrics'

type Lyrics = string[]

type NavbarProps = {
  onSelectLyrics: (lyrics: Lyrics) => void
}

const Navbar: React.FC<NavbarProps> = ({ onSelectLyrics }) => {
  return (
    <div className="absolute flex flex-col right-5 top-2 text-white">
      <h2>Bahasa</h2>
      <button onClick={() => onSelectLyrics(inggris)}>English</button>
      <button onClick={() => onSelectLyrics(romaji)}>Romaji</button>
      <button onClick={() => onSelectLyrics(indonesia)}>Indonesia</button>
      <button onClick={() => onSelectLyrics(kanji)}>Kanji</button>
      <button onClick={() => onSelectLyrics(jawa)}>Jawa</button>
    </div>
  )
}

export default Navbar
