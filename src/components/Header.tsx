import React, { useState, useEffect } from 'react';
import { Menu, X, Mic2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Mic2 size={28} className="text-pink-500 mr-2" />
          <span className="text-xl font-bold tracking-wider">MC SHMAL</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['music', 'tour', 'about', 'gallery', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-pink-500 transition-colors uppercase tracking-wide text-sm font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-gray-300 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <ul className="flex flex-col py-4">
            {['music', 'tour', 'about', 'gallery', 'contact'].map((item) => (
              <li key={item} className="border-b border-gray-800 last:border-0">
                <button 
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-pink-500 transition-colors w-full text-left py-3 px-4 uppercase tracking-wide"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;