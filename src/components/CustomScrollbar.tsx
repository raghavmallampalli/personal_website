'use client';

import React from 'react';

interface CustomScrollbarProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function CustomScrollbar({ children, className = '', style = {} }: CustomScrollbarProps) {
  return (
    <div 
      className={`custom-scrollbar ${className}`}
      style={style}
    >
      {children}
    </div>
  );
} 