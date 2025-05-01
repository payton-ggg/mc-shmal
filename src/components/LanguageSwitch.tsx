import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
      className="fixed top-4 right-20 z-50 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-300 flex items-center gap-2"
    >
      <Languages size={20} className="text-pink-500" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}

export default LanguageSwitch;