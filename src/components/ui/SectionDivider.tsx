import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
    </div>
  );
}
