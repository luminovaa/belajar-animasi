'use client'

import React from 'react';
import { LanguageOption } from '@/components/lyrics/type';

interface NavbarProps {
  language: LanguageOption;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageOption>>;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  return (
    <div className="absolute flex flex-col right-5 top-2 text-white">
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as LanguageOption)}
        className="bg-transparent text-white p-2 rounded"
      >
        <option value="inggris">English</option>
        <option value="romaji">Romaji</option>
        <option value="indonesia">Indonesia</option>
        <option value="kanji">Kanji</option>
        <option value="jawa">Jawa</option>
      </select>
    </div>
  )
}
