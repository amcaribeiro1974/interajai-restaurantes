
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-interaj-500/50 focus:ring-offset-2',
        {
          'bg-interaj-500 text-white hover:bg-interaj-600 active:bg-interaj-700': variant === 'primary',
          'bg-secondary text-interaj-700 hover:bg-secondary/80 active:bg-secondary/90': variant === 'secondary',
          'border border-interaj-200 bg-transparent text-interaj-700 hover:bg-interaj-50 active:bg-interaj-100': variant === 'outline',
          'text-sm px-4 py-2': size === 'sm',
          'text-base px-6 py-3': size === 'md',
          'text-lg px-8 py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
