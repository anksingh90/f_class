import React from 'react';
import { cn } from '../../lib/utils';

export function SkipToContent() {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
    >
      Skip to main content
    </a>
  );
}

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export function Main({ children, className }: MainProps) {
  return (
    <main id="main-content" className={cn("min-h-screen", className)}>
      {children}
    </main>
  );
}
