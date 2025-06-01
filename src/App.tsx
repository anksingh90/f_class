import React from 'react';
import Header from './components/layout/Header';
import { Main, SkipToContent } from './components/layout/Main';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Programs from './components/sections/Programs';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  // Handlers for scroll navigation
  const handleGetStarted = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExplorePrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Accessibility: Skip to content link */}
      <SkipToContent />
      
      {/* Header with navigation */}
      <Header />
      
      {/* Main content */}
      <Main>
        {/* Hero Section */}
        <Hero 
          onGetStarted={handleGetStarted}
          onExplorePrograms={handleExplorePrograms}
        />
        
        {/* Programs Section */}
        <Programs />
        
        {/* Features Section */}
        <Features />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Section */}
        <Contact />
      </Main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
