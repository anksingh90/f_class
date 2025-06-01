import React from 'react';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">FC</span>
          </div>
          <span className="font-bold text-lg text-white">FundaClass</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          <a href="#contact-section" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden md:flex"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
