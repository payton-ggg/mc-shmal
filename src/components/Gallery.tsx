import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Gallery: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const photos = [
    { id: 1, url: "https://images.pexels.com/photos/1649693/pexels-photo-1649693.jpeg", alt: "MC Shmal performance" },
    { id: 2, url: "https://images.pexels.com/photos/2240766/pexels-photo-2240766.jpeg", alt: "Concert crowd" },
    { id: 3, url: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg", alt: "Music studio" },
    { id: 4, url: "https://images.pexels.com/photos/1262905/pexels-photo-1262905.jpeg", alt: "On stage" },
    { id: 5, url: "https://images.pexels.com/photos/1864640/pexels-photo-1864640.jpeg", alt: "Music festival" },
    { id: 6, url: "https://images.pexels.com/photos/1418244/pexels-photo-1418244.jpeg", alt: "Award ceremony" },
  ];

  const videos = [
    { id: 1, thumbnail: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg", title: "Electric Dreams - Official Music Video" },
    { id: 2, thumbnail: "https://images.pexels.com/photos/1850022/pexels-photo-1850022.jpeg", title: "Neon City - Live at Rhythm Festival" },
    { id: 3, thumbnail: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg", title: "Behind The Scenes - Album Recording" },
  ];

  const openLightbox = (index: number) => {
    setLightbox({ open: true, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false });
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % photos.length });
  };

  const prevImage = () => {
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + photos.length) % photos.length });
  };

  return (
    <section 
      id="gallery" 
      ref={ref}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Media</span> Gallery
        </h2>
        
        {/* Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`py-2 px-6 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === 'photos' ? 'bg-pink-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Photos
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`py-2 px-6 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === 'videos' ? 'bg-pink-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Videos
            </button>
          </div>
        </div>
        
        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="rounded-lg overflow-hidden relative group cursor-pointer aspect-square bg-gray-800"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="rounded-lg overflow-hidden relative group cursor-pointer"
              >
                <div className="aspect-video bg-gray-800">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-pink-600/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <p className="text-white font-medium">{video.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-3 px-8 rounded-full font-medium transition-all duration-300">
            View {activeTab === 'photos' ? 'All Photos' : 'All Videos'}
          </button>
        </div>
        
        {/* Lightbox */}
        {lightbox.open && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:text-pink-500 transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={28} />
            </button>
            
            <img 
              src={photos[lightbox.index].url} 
              alt={photos[lightbox.index].alt} 
              className="max-w-full max-h-[90vh] object-contain" 
            />
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 p-2 rounded-full text-white hover:text-pink-500 transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={28} />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p>{photos[lightbox.index].alt}</p>
              <p className="text-sm text-gray-400">{lightbox.index + 1} of {photos.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;