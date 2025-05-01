import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'about.bio': 'Known professionally as MC Shmal, Timofii Shmalko is an innovative artist who has been redefining the boundaries of contemporary music since 2018. With his unique blend of electronic rhythms, powerful vocals, and thought-provoking lyrics, MC Shmal has carved out a distinctive niche in the music industry.',
    'about.bio2': 'Born and raised in a musical family, Timofii developed a passion for performance at an early age. After studying music production, he launched his career with the breakout single "Electric Dreams," which quickly garnered attention for its innovative sound design and compelling storytelling.',
    'about.bio3': 'MC Shmal\'s live performances are known for their high energy and immersive experience, combining stunning visuals with electrifying music that creates an unforgettable atmosphere for audiences worldwide.',
    'about.name': 'Timofii Shmalko',
  },
  ru: {
    'about.bio': 'Тимофей Шмалько – украинский певец, поэт, продюсер и композитор еврейского происхождения, работающий в разных направлениях хип-хопа. Известен под сценическим псевдонимом Шмаль.',
    'about.bio2': 'Родившись в музыкальной семье, Тимофей с раннего возраста проявлял интерес к музыке. После изучения музыкального продюсирования он начал свою карьеру с сингла "Electric Dreams", который быстро привлек внимание своим инновационным звучанием.',
    'about.bio3': 'Живые выступления MC Шмаля известны своей высокой энергетикой и иммерсивным опытом, сочетающим потрясающие визуальные эффекты с электризующей музыкой.',
    'about.name': 'Тимофей Шмалько',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};