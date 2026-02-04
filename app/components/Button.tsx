import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
}) => {
  const baseStyles = 'font-bold transition-all rounded-full';
  
  const variants = {
    primary: 'bg-primary hover:bg-ocean text-white shadow-lg shadow-primary/20',
    secondary: 'bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20',
    ghost: 'bg-white text-ocean hover:bg-gray-100 shadow-xl',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-10 py-5 text-lg',
    lg: 'px-12 py-5 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
