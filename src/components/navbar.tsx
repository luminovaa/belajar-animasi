'use client'

import React from 'react';
import Select from 'react-select';
import { LanguageOption } from '@/components/lyrics/type';

interface NavbarProps {
  language: LanguageOption;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageOption>>;
}

const options = [
  { value: 'inggris', label: 'English' },
  { value: 'romaji', label: 'Romaji' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'kanji', label: 'Kanji' },
  { value: 'jawa', label: 'Jawa' },
];

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const handleChange = (selectedOption: any) => {
    setLanguage(selectedOption.value as LanguageOption);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      width: '10rem',
      color: '#ffffff',
      '@media (max-width: 640px)': {
        width: '6rem', 
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#ffffff',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: 'transparent',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ffffff' : 'transparent',
      color: state.isSelected ? '#000000' : '#ffffff',
      '&:hover': {
        backgroundColor: '#ffffff',
        color: '#000000',
      },
    }),
  };

  return (
    <div className="absolute flex flex-col max-sm:text-xs top-2 text-white right-8 max-sm:right-0 max-sm:top-10">
      <Select
        value={options.find(option => option.value === language)}
        onChange={handleChange}
        isSearchable={false}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
