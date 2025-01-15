"use client";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: {
      text: 'text-lg',
    },
    md: {
      text: 'text-2xl',
    },
    lg: {
      text: 'text-3xl',
    },
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold ${sizes[size].text} bg-gradient-to-r from-primary/90 to-secondary/90 bg-clip-text text-transparent`}>
        TriFacile
      </span>
    </div>
  );
}