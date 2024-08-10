import React from 'react';

interface ReusableButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ 
  onClick, 
  isActive, 
  children, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        transition duration-300 ease-in-out 
        py-2 px-4 rounded shadow-lg z-30 
        ${isActive ? "bg-pink-800 text-white" : "bg-pink-500 text-white"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default React.memo(ReusableButton);
