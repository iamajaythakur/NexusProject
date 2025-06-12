import React from 'react';
import { Waves, Wine, Utensils, Sunset, Calendar, Users } from 'lucide-react';

const Rooftop: React.FC = () => {
  const amenities = [
    { icon: Waves, title: 'Infinity Pool', description: 'Edge-to-edge pool with city views' },
    { icon: Wine, title: 'Skyline Bar', description: 'Craft cocktails and premium wines' },
    { icon: Utensils, title: 'Fine Dining', description: 'Contemporary Australian cuisine' },
    { icon: Sunset, title: 'Panoramic Views', description: '360° Adelaide city and hills' }
  ];

  const venues = [
    {
      name: 'The Pool Deck',
      description: 'Infinity-edge pool with panoramic city views, perfect for relaxation and events',
      features: ['Infinity pool', 'Poolside service', 'Cabana rentals', 'DJ area'],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Skyline Restaurant',
      description: 'Fine dining experience inspired by Adelaide\'s top venues like 2KW and Merrymaker',
      features: ['Contemporary menu', 'Wine selection', 'Private dining', 'Chef\'s table'],
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="rooftop" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Level 18 Rooftop Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Adelaide's newest rooftop destination featuring an infinity pool, skyline restaurant, 
              and panoramic views. Inspired by the city's finest venues.
            </p>
          </div>

          {/* Main Venues */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold">{venue.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {venue.description}
                  </p>
                  
                  <div className="space-y-3">
                    {venue.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <amenity.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {amenity.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
              </div>
            ))}
          </div>

          {/* Events & Bookings */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Private Events & Functions</h3>
            <p className="text-xl mb-8 text-blue-100">
              Host your next event 18 levels above Adelaide with breathtaking city views
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Corporate Events</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Private Parties</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Wine className="h-6 w-6" />
                <span>Wedding Receptions</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooftop;