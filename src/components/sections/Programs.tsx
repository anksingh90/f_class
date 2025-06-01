import React from 'react';
import { Button } from '../ui/button';

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, imageUrl, altText }) => {
  return (
    <article className="grade-card flex flex-col gap-4 p-5 bg-card rounded-xl shadow-lg hover:shadow-2xl focus-within:ring-2 focus-within:ring-primary">
      <div 
        className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-lg" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
        role="img" 
        aria-label={altText}
      ></div>
      <div>
        <h3 className="text-white text-xl font-semibold leading-snug">{title}</h3>
        <p className="text-muted-foreground text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Class 9",
      description: "Foundational concepts and skills to build a strong academic base",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ILx0VJ64qyF3QSk_vhDNVKpSJRRVXFEr58HazNsOUm4oM_NVHNQ1AQV0mNrIB42QndiJTsUp8t7rCdqfej21gWY0uAaJRDm_zAkPn8S6iUGPJckcyt0dwELOjTUrzSs9tgtEUDnPXE1Z7cDlVGxc5ajWitSTmaqeYGsq6xDoTD9PrVLicr-FZXGGsc3cUM2u5wWfrw_smb8LR10p5akjFCVdeoIoIM2dt3cToVq_bJ9P_HpWBBY_b5aKHuDRPLaa795CXlsCpaj3",
      altText: "Class 9 students engaged in foundational learning activities"
    },
    {
      title: "Class 10",
      description: "Advanced topics and critical thinking skills for academic excellence",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3js-CsGS3R0PyBzXQUzG2JOUPX0LVTd2FrqD_Cqz_fvH-vSX6LBgq5I3XO7MYJLqeThwz4i0usSws7wRW0EAw0HxQRxrgIfA9WcqPVVlg1NB1bqyAcPgf44yhLWnBfBwfjM8PBQK8nyxrUyBk0kFRXlPwFbTFs6LxgfiXzap8b8tvlHksMiPVghkDZ2P-ghEH_wmWG3woKSgnsB4rQuwUhJ7McUSDKKXICTYBCddPAU5ZfVX0bR34vhOlNJ2mfEKoVJMKM245TkoU",
      altText: "Class 10 students working on advanced topics and critical thinking exercises"
    },
    {
      title: "Class 11",
      description: "Specialized subjects and comprehensive exam preparation strategies",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1aUp79t-adBkahBLK7M1iWN8leHGdz3OP02G7Lmoq9i86iBuzxB-ddJtSjFdNyDKyDAfizK6txkA569aUBYlYNh49XhUVNagT5PrYb4lqBi8SMpJfiWH5IPaKsZGvBPNlwWRE5kbRMvytFmTyZkv4cJ9-XpW8KcEoO4wUY9tPlWH608mox25aVxJaKOIURdQDxeVgS9h9jWMH9GDsksLiODe7sXGCyZ5LwzJ7IKaHUo34DovVu15VZ7ULsIZdUPa8Oucafh-W36RO",
      altText: "Class 11 students preparing for specialized subjects and competitive exams"
    },
    {
      title: "Class 12",
      description: "College readiness and career exploration for future success",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-HZsLcdpY6MJNS-Vs1JE4tY8q3lZEARU6vgDcpDsQcIGFHjAZB8M-IGhGKoiQIMFYqeikKrh3QXUn3XAPUXMQWNpAP1fC8xcxHbLJ3CoFQfSsKDgO81nL-cSwtGgv-vNt48WgYIEU-U1ROtGfo0P1BprsF9d0cOmzC84SbBIP6e-9_ooUIAv2hGxuZmapTEVTHt8HxNOX_xuux943Y6jI3XXp7-m6FgxCFTK0adkfgFWle3Jxtf_J1434I8F2kDpHDdCh1Jr0jf3t",
      altText: "Class 12 students focusing on college readiness and career exploration"
    }
  ];

  return (
    <section className="py-20 bg-muted" id="programs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 text-center items-center mb-12">
          <h2 className="text-white text-4xl font-bold leading-tight tracking-tight sm:text-5xl max-w-2xl">
            Personalized Learning for Every Grade
          </h2>
          <p className="text-gray-300 text-lg font-normal leading-relaxed max-w-2xl">
            Explore our tailored programs designed to meet the unique needs of students in grades 9, 10, 11, and 12. 
            Each program offers a comprehensive curriculum, personalized support, and resources to help students thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              altText={program.altText}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Find Your Perfect Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
