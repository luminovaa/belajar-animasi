import React from 'react';

interface SidebarButtonProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ onClick, isActive, label }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:animate-[ease-in-out] font-baloo py-2 px-4 rounded shadow-lg z-30 ${
        isActive ? "bg-pink-800 text-white" : "bg-pink-500 text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default SidebarButton;