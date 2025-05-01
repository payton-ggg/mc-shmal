import React from 'react';
import { Heart, ArrowUp, Mic2 } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Mic2 size={28} className="text-pink-500 mr-2" />
            <span className="text-xl font-bold tracking-wider">MC SHMAL</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'Music', 'Tour', 'About', 'Gallery', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            onClick={scrollToTop}
            className="hidden md:flex items-center justify-center p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <ArrowUp size={20} className="text-pink-500" />
          </button>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MC Shmal. All rights reserved.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
            <div className="flex items-center mt-2 md:mt-0">
              Made with <Heart size={14} className="text-pink-500 mx-1" fill="#ec4899" /> by OnThePlaton
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="md:hidden fixed bottom-4 right-4 p-3 rounded-full bg-pink-600 shadow-lg"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;