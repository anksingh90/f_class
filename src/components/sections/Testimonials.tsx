import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl }) => {
  return (
    <div className="flex flex-col p-6 bg-card rounded-xl border border-border">
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33333 20H4L8 12H5.33333C4.97971 12 4.64057 11.8595 4.39052 11.6095C4.14048 11.3594 4 11.0203 4 10.6667V5.33333C4 4.97971 4.14048 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4H13.3333C13.687 4 14.0261 4.14048 14.2761 4.39052C14.5262 4.64057 14.6667 4.97971 14.6667 5.33333V16C14.6667 16.7072 14.3857 17.3855 13.8856 17.8856C13.3855 18.3857 12.7072 18.6667 12 18.6667C11.2928 18.6667 10.6145 18.3857 10.1144 17.8856C9.61429 17.3855 9.33333 16.7072 9.33333 16V20ZM25.3333 20H20L24 12H21.3333C20.9797 12 20.6406 11.8595 20.3905 11.6095C20.1405 11.3594 20 11.0203 20 10.6667V5.33333C20 4.97971 20.1405 4.64057 20.3905 4.39052C20.6406 4.14048 20.9797 4 21.3333 4H29.3333C29.687 4 30.0261 4.14048 30.2761 4.39052C30.5262 4.64057 30.6667 4.97971 30.6667 5.33333V16C30.6667 16.7072 30.3857 17.3855 29.8856 17.8856C29.3855 18.3857 28.7072 18.6667 28 18.6667C27.2928 18.6667 26.6145 18.3857 26.1144 17.8856C25.6143 17.3855 25.3333 16.7072 25.3333 16V20Z" fill="url(#paint0_linear_1_2)" fillOpacity="0.3"/>
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="4" y1="4" x2="30.6667" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6"/>
              <stop offset="1" stopColor="#A855F7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center gap-3 mt-auto">
        <img 
          src={imageUrl} 
          alt={`${name}'s profile`} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "FundaClass Academy transformed my daughter's approach to learning. The personalized attention and innovative teaching methods helped her excel in subjects she previously struggled with.",
      name: "Sarah Johnson",
      role: "Parent of Class 10 Student",
      imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "The teachers at FundaClass are exceptional. They don't just teach the curriculum; they inspire students to think critically and develop a genuine love for learning.",
      name: "Michael Chen",
      role: "Parent of Class 12 Student",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "I joined FundaClass in 9th grade and continued through graduation. The academic foundation I received helped me secure admission to my dream university.",
      name: "Priya Sharma",
      role: "Former Student",
      imageUrl: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  return (
    <section className="py-20 bg-muted" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 text-center items-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-white text-4xl font-bold leading-tight tracking-tight sm:text-5xl max-w-2xl">
            What Our Community Says
          </h2>
          <p className="text-gray-300 text-lg font-normal leading-relaxed max-w-2xl">
            Hear from parents and students about their experiences with FundaClass Academy and how our programs have made a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
