import React, { useRef } from 'react';
import { Music, Award, Mic, Users } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const { t } = useLanguage();

  const stats = [
    { icon: <Music size={24} />, value: "15+", label: "Singles Released" },
    { icon: <Award size={24} />, value: "3", label: "Music Awards" },
    { icon: <Users size={24} />, value: "2.5M+", label: "Monthly Listeners" },
    { icon: <Mic size={24} />, value: "120+", label: "Live Performances" }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">About</span> MC Shmal
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative rounded-lg overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img 
              src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg" 
              alt="MC Shmal performing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          {/* Bio */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-4">{t('about.name')}</h3>
            <p className="text-gray-300 mb-6">{t('about.bio')}</p>
            <p className="text-gray-300 mb-6">{t('about.bio2')}</p>
            <p className="text-gray-300 mb-8">{t('about.bio3')}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 p-4 rounded-lg text-center"
                >
                  <div className="text-pink-500 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;