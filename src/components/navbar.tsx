"use client";

import React from "react";
import Select from "react-select";
import { LanguageOption } from "@/utils/type";

interface NavbarProps {
  language: LanguageOption;
  setLanguage: (value: LanguageOption) => void;
  isMobile?: boolean;
}

const options = [
  { value: "inggris", label: "English" },
  { value: "romaji", label: "Japan - Romaji" },
  { value: "indonesia", label: "Indonesia" },
  { value: "kanji", label: "Japan" },
  { value: "jawa", label: "Jawa" },
];

export default function Navbar({ language, setLanguage, isMobile = false }: NavbarProps) {
  const handleChange = (selectedOption: any) => {
    setLanguage(selectedOption.value as LanguageOption);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      width: isMobile ? "100%" : "10rem",
      color: isMobile ? "#000000" : "#ffffff",
      "@media (max-width: 640px)": {
        width: isMobile ? "100%" : "6rem",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: isMobile ? "#000000" : "#ffffff",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: isMobile ? "#ffffff" : "transparent",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? isMobile ? "#f3f4f6" : "#ffffff"
        : "transparent",
      color: state.isSelected
        ? "#000000"
        : isMobile ? "#000000" : "#ffffff",
      "&:hover": {
        backgroundColor: isMobile ? "#f3f4f6" : "#ffffff",
        color: "#000000",
      },
    }),
  };

  return (
    <div className={`flex flex-col z-50 ${isMobile ? 'w-full' : 'absolute top-2 right-8 max-sm:right-0 max-sm:top-10'}`}>
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