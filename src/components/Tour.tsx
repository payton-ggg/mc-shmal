import React, { useRef } from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Tour: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const tourDates = [
    {
      id: 1,
      date: "MAY 15, 2025",
      venue: "Sonic Arena",
      city: "New York, NY",
      tickets: "Available",
      soldOut: false
    },
    {
      id: 2,
      date: "MAY 22, 2025",
      venue: "Rhythm Hall",
      city: "Los Angeles, CA",
      tickets: "Available",
      soldOut: false
    },
    {
      id: 3,
      date: "JUN 05, 2025",
      venue: "Echo Stadium",
      city: "Chicago, IL",
      tickets: "Available",
      soldOut: false
    },
    {
      id: 4,
      date: "JUN 12, 2025",
      venue: "Soundwave Center",
      city: "Miami, FL",
      tickets: "Sold Out",
      soldOut: true
    },
    {
      id: 5,
      date: "JUN 19, 2025",
      venue: "Melody Arena",
      city: "Austin, TX",
      tickets: "Available",
      soldOut: false
    }
  ];

  return (
    <section 
      id="tour" 
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-900"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Tour</span> Dates
        </h2>
        
        <div className={`max-w-4xl mx-auto bg-black/70 backdrop-blur-md rounded-xl p-6 md:p-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-white">Upcoming Shows</h3>
            <button className="text-pink-500 hover:text-pink-400 text-sm font-medium transition-colors">
              View All Dates
            </button>
          </div>
          
          <div className="space-y-4">
            {tourDates.map((show) => (
              <div 
                key={show.id} 
                className="bg-gray-800/50 rounded-lg p-5 grid grid-cols-1 md:grid-cols-3 gap-4 items-center hover:bg-gray-800/80 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex items-center">
                    <Calendar size={18} className="text-pink-500 mr-2" />
                    <span className="font-medium">{show.date}</span>
                  </div>
                </div>
                
                <div className="flex items-start md:items-center">
                  <MapPin size={18} className="text-pink-500 mr-2 flex-shrink-0 mt-1 md:mt-0" />
                  <div>
                    <div className="font-medium">{show.venue}</div>
                    <div className="text-sm text-gray-400">{show.city}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Ticket size={18} className="text-pink-500 mr-2" />
                    <span className={`${show.soldOut ? 'text-gray-500' : 'text-green-400'}`}>
                      {show.tickets}
                    </span>
                  </div>
                  
                  <button 
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      show.soldOut 
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-pink-600 hover:bg-pink-700 text-white transform hover:scale-105'
                    }`}
                    disabled={show.soldOut}
                  >
                    {show.soldOut ? 'Sold Out' : 'Get Tickets'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-6">Want MC Shmal to perform in your city?</p>
            <button className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-3 px-8 rounded-full font-medium transition-all duration-300">
              Request a Show
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;