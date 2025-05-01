import React, { useEffect, useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transform rotate-3 scale-110" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl relative">
          {/* Decorative line */}
          <div className="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-pink-500 to-purple-600" />
          
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block transform -rotate-2">Timofii Shmalko</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 transform rotate-2 translate-x-4">МС Шмаль</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-8 pl-6 border-l-2 border-pink-500 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Redefining music with powerful lyrics and electrifying performances
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 hover:-rotate-2" onClick={() => window.open("https://soundcloud.com/timofey-shmalko/lil-shmal")}>
              <Play size={18} className="mr-2" />
              Latest Release
            </button>
            <button className="bg-transparent border-2 border-white hover:border-pink-500 text-white font-medium py-3 px-8 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 hover:rotate-2 hover:text-pink-500" onClick={() => window.open("https://soundcloud.com/timofey-shmalko")}>
              <Volume2 size={18} className="mr-2" />
              Listen Now
            </button>
          </div>

          {/* Floating stats */}
          <div className="absolute -right-20 top-1/2 transform translate-y-1/2 hidden lg:block">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-3xl font-bold text-pink-500">2.5M+</div>
              <div className="text-sm text-gray-400">Monthly Listeners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center rotate-12 hover:rotate-0 transition-transform duration-300">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-pink-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-purple-500/20 to-transparent" />
    </section>
  );
};

export default Hero;