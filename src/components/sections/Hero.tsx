import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
  onExplorePrograms: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onExplorePrograms }) => {
  return (
    <section className="relative min-h-screen overflow-hidden" id="hero">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/20 to-background z-0"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="floating-particle absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="floating-particle absolute top-40 right-20 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce"></div>
        <div className="floating-particle absolute bottom-60 left-20 w-1 h-1 bg-cyan-400/50 rounded-full animate-ping"></div>
        <div className="floating-particle absolute bottom-40 right-40 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse"></div>
        <div className="floating-particle absolute top-60 left-1/2 w-1 h-1 bg-blue-300/40 rounded-full animate-bounce"></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full animate-bounce"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-5 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
      
      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-6 text-center">
        
        {/* Glowing Badge */}
        <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
          <span className="text-blue-200 text-sm font-medium">Transforming Education Since 2020</span>
        </div>
        
        {/* Main Title with Gradient */}
        <div className="flex flex-col gap-6 mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-gradient">
              Empowering
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-reverse">
              Minds
            </span>
            <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-2">
              Shaping Futures
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>
        
        {/* Enhanced Description */}
        <div className="max-w-3xl mb-12">
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light">
            At <span className="text-blue-300 font-medium">FundaClass Academy</span>, we're dedicated to providing a 
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text font-medium"> transformative educational experience</span> 
            for students in grades 9-12.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-4">
            Our innovative approach combines personalized learning, expert guidance, and a supportive community to help students excel academically and prepare for future success.
          </p>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button 
            onClick={onGetStarted}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 focus-visible transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
            aria-label="Join Class Today">
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-2">
              Join Class Today
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
          </button>
          
          <button 
            onClick={onExplorePrograms}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-white/20 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30 focus-visible transition-all duration-300 transform hover:scale-105"
            aria-label="Explore Programs">
            <span className="flex items-center gap-2">
              Explore Programs
              <svg className="w-5 h-5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium mt-1">
              Students
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              95%
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium mt-1">
              Success Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium mt-1">
              Expert Teachers
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-gray-400 text-xs mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
