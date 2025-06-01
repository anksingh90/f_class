import React, { useState } from 'react';
import { Button } from '../ui/button';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setErrorMessage('');
    setIsSuccess(false);
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-background" id="contact-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg font-normal leading-relaxed">
              Have questions or want to learn more? Reach out to our team, and we'll be happy to assist you.
            </p>
          </div>
          
          <form 
            className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0" 
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="relative flex-grow">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input 
                id="email"
                name="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full resize-none overflow-hidden rounded-lg sm:rounded-r-none border-2 border-input bg-card text-white h-14 placeholder:text-muted-foreground px-4 text-lg font-normal leading-normal focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300" 
                placeholder="Your Email Address"
                aria-describedby="email-error"
                disabled={isSubmitting}
              />
              
              {errorMessage && (
                <div id="email-error" className="absolute left-0 -bottom-6 text-destructive text-sm mt-1" role="alert">
                  {errorMessage}
                </div>
              )}
              
              {isSuccess && (
                <div id="success-message" className="absolute left-0 -bottom-6 text-green-400 text-sm mt-1" role="status">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </div>
            
            <Button 
              type="submit"
              variant="gradient"
              size="xl"
              className="rounded-lg sm:rounded-l-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Contact Us'}
            </Button>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-center">+1 (555) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-center">info@fundaclass.edu</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-center">123 Education Ave, Learning City, ED 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
