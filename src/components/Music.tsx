import React, { useEffect, useRef } from 'react';
import { Play, ExternalLink, Heart, Share2 } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Music: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const albums = [
    {
      id: 1,
      title: "Bybit",
      year: "2025",
      coverUrl: "https://i.scdn.co/image/ab67616d00001e021931e35d2d5b0aa08a2d70c4",
      streamUrl: "https://open.spotify.com/album/02bJgSv54PPaIH3RkjQHCQ?uid=toptrack7fk6OByVeNfjulxOAtFSN6&uri=spotify%3Atrack%3A7fk6OByVeNfjulxOAtFSN6"
    },
    {
      id: 2,
      title: "Lil Шмаль",
      year: "2025",
      coverUrl: "https://i.scdn.co/image/ab67616d00001e02350ef02a7863cebc14439588",
      streamUrl: "https://open.spotify.com/album/5IP6tL6ewfYvkn3NoFvIuT"
    },
    {
      id: 3,
      title: "MC Шмаль",
      year: "2025",
      coverUrl: "https://i.scdn.co/image/ab67616d00001e026ea234aec2cdebd3d8e6a5c9",
      streamUrl: "https://open.spotify.com/track/00mFoFgE71zerXjEee1Cf9"
    }
  ];

  const topTracks = [
    { id: 1, title: "Bybit", duration: "4:00", plays: "1.2M" },
    { id: 2, title: "MC Шмаль", duration: "2:04", plays: "980K" },
    { id: 3, title: "Lil Шмаль", duration: "2:38", plays: "850K" },
    { id: 4, title: "Концептуальный альбом", duration: "-:-", plays: "-" },
    { id: 5, title: "Диана Дианочка", duration: "-:-", plays: "-" }
  ];

  return (
    <section 
      id="music" 
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-pink-500/10 to-transparent transform -skew-y-12" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-purple-500/10 to-transparent transform skew-y-12" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 transform -rotate-2 inline-block">Latest</span>
          <span className="transform rotate-2 inline-block ml-2">Music</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start relative">
          {/* Floating decorative element */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
            <div className="w-32 h-32 border-2 border-pink-500/30 rounded-full animate-spin-slow" />
          </div>

          {/* Albums */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-xl font-semibold mb-8 text-gray-300 transform -rotate-2">Albums & EPs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
              {albums.map((album, index) => (
                <div 
                  key={album.id} 
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 transform hover:scale-105 ${
                    index % 2 === 0 ? 'rotate-2 hover:rotate-0' : '-rotate-2 hover:rotate-0'
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={album.coverUrl} 
                      alt={album.title} 
                      className="w-full h-full object-cover transition-all group-hover:scale-110 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-pink-600 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 hover:rotate-180">
                        <Play size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-lg">{album.title}</h4>
                    <p className="text-gray-400 text-sm">{album.year}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <a 
                        href={album.streamUrl} 
                        className="text-pink-500 text-sm font-medium flex items-center hover:text-pink-400"
                      >
                        Stream <ExternalLink size={14} className="ml-1" />
                      </a>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
                          <Heart size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Tracks */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-xl font-semibold mb-8 text-gray-300 transform rotate-2">Top Tracks</h3>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 transform hover:rotate-1 transition-transform duration-300">
              <ul className="divide-y divide-gray-700/50">
                {topTracks.map((track, index) => (
                  <li 
                    key={track.id} 
                    className={`py-4 flex items-center hover:bg-gray-700/30 px-3 rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                      index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                    }`}
                  >
                    <span className="text-gray-500 font-medium mr-4 w-5 text-center">{index + 1}</span>
                    <div className="flex-grow">
                      <h4 className="font-medium">{track.title}</h4>
                      <p className="text-gray-400 text-sm">{track.plays} plays</p>
                    </div>
                    <span className="text-gray-400 text-sm mr-4">{track.duration}</span>
                    <button className="p-2 text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:rotate-180">
                      <Play size={18} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <button className="text-pink-500 font-medium hover:text-pink-400 transition-colors transform hover:scale-105">
                  See all tracks
                </button>
              </div>
            </div>
            
            {/* Streaming platforms */}
            <div className="mt-8 relative">
              <h3 className="text-xl font-semibold mb-4 text-gray-300 transform -rotate-2">Listen On</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a 
                    href="https://open.spotify.com/artist/6zlh02k4g8OMWfEYqPRp3N"
                    className={`flex items-center justify-center py-3 px-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-rotate-3 hover:scale-105`}
                  >
                    Spotify
                  </a>
                  <a 
                    href="https://music.apple.com/ua/artist/timofey-shmalko/1802651752"
                    className={`flex items-center justify-center py-3 px-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:rotate-3 hover:scale-105`}
                  >
                    Apple Music
                  </a>
                  <a 
                    href="https://soundcloud.com/timofey-shmalko"
                    className={`flex items-center justify-center py-3 px-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-rotate-3 hover:scale-105`}
                  >
                    SoundCloud
                  </a>
                  <a 
                    href="https://music.youtube.com/channel/UCfeH9ieb9SyQNGZVNvsOh2A"
                    className={`flex items-center justify-center py-3 px-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:rotate-3 hover:scale-105`}
                  >
                    Youtube Music
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;