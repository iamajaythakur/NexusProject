import React from 'react';
import { Home, Users, Bed, Square, Wifi, Car } from 'lucide-react';

const Apartments: React.FC = () => {
  const apartmentTypes = [
    {
      type: '1BHK',
      size: '50-60 m²',
      levels: 'Levels 9-12',
      target: 'Gen Z Professionals',
      price: 'From $480,000',
      features: ['Open plan living', 'Modern kitchen', 'Built-in wardrobes', 'City views'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: '2BHK',
      size: '70-85 m²',
      levels: 'Levels 13-15',
      target: 'Millennials & Small Families',
      price: 'From $650,000',
      features: ['Separate bedrooms', 'European appliances', 'Study nook', 'Balcony'],
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: '3BHK',
      size: '100-120 m²',
      levels: 'Levels 16-17',
      target: 'Gen X Families',
      price: 'From $850,000',
      features: ['Master suite', 'Guest bathroom', 'Large living areas', 'Premium finishes'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: 'Penthouse',
      size: '150-200 m²',
      levels: 'Level 17',
      target: 'Baby Boomers',
      price: 'From $1,200,000',
      features: ['Private terrace', 'Panoramic views', 'Butler\'s pantry', 'Premium fixtures'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary throughout building' },
    { icon: Car, title: 'Secure Parking', description: 'Allocated spaces available' },
    { icon: Home, title: 'Concierge', description: '24/7 building management' },
    { icon: Users, title: 'Community Spaces', description: 'Shared lounge and meeting rooms' }
  ];

  return (
    <section id="apartments" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Residential Apartments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thoughtfully designed apartments for every lifestyle, from young professionals 
              to luxury downsizers. Levels 9-17 offer stunning city and parkland views.
            </p>
          </div>

          {/* Apartment Types */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {apartmentTypes.map((apt, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={apt.image}
                    alt={`${apt.type} apartment interior`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                    {apt.type}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {apt.type} Apartments
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{apt.target}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{apt.price}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Square className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{apt.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{apt.levels}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {apt.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    View Floor Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Building Amenities */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Building Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <amenity.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartments;