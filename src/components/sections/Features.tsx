import React from 'react';
import { Button } from '../ui/button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 text-center items-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-white text-4xl font-bold leading-tight tracking-tight sm:text-5xl max-w-2xl">
            Features That Set Us Apart
          </h2>
          <p className="text-gray-300 text-lg font-normal leading-relaxed max-w-2xl">
            Our innovative approach to education combines cutting-edge technology with proven teaching methods to deliver an unparalleled learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m7 10 2 2 6-6"></path>
                <path d="m7 16 2 2 6-6"></path>
              </svg>
            }
            title="Personalized Learning Paths"
            description="Customized curriculum tailored to each student's strengths, weaknesses, and learning style for optimal academic growth."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            }
            title="Real-time Progress Tracking"
            description="Advanced analytics and reporting tools that provide instant feedback on student performance and areas for improvement."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Expert Educators"
            description="Learn from highly qualified teachers with extensive experience in their subjects and passion for student success."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h10"></path>
                <path d="M7 12h10"></path>
                <path d="M7 17h10"></path>
              </svg>
            }
            title="Comprehensive Curriculum"
            description="Rigorous academic programs aligned with national standards and enriched with practical applications and critical thinking."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            }
            title="Interactive Learning"
            description="Engaging multimedia resources, simulations, and hands-on activities that make complex concepts accessible and enjoyable."
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                <path d="m9 9.5 2 2 4-4"></path>
              </svg>
            }
            title="College & Career Readiness"
            description="Dedicated programs for college applications, standardized test preparation, and career exploration to ensure post-graduation success."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
