import React from 'react';
import { Home, Users, Bed, Square, Wifi, Car, Download, Eye } from 'lucide-react';

const ResidentialPage: React.FC = () => {
  const apartmentTypes = [
    {
      type: '1BHK',
      size: '50-60 m²',
      levels: 'Levels 9-12',
      target: 'Gen Z Professionals',
      price: 'From $480,000',
      features: ['Open plan living', 'Modern kitchen', 'Built-in wardrobes', 'City views', 'Smart home tech'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: '2BHK',
      size: '70-85 m²',
      levels: 'Levels 13-15',
      target: 'Millennials & Small Families',
      price: 'From $650,000',
      features: ['Separate bedrooms', 'European appliances', 'Study nook', 'Balcony', 'Premium finishes'],
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: '3BHK',
      size: '100-120 m²',
      levels: 'Levels 16-17',
      target: 'Gen X Families',
      price: 'From $850,000',
      features: ['Master suite', 'Guest bathroom', 'Large living areas', 'Premium finishes', 'Multiple balconies'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: 'Penthouse',
      size: '150-200 m²',
      levels: 'Level 17',
      target: 'Baby Boomers',
      price: 'From $1,200,000',
      features: ['Private terrace', 'Panoramic views', 'Butler\'s pantry', 'Premium fixtures', 'Luxury finishes'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed Internet', description: 'Fiber optic connectivity throughout' },
    { icon: Car, title: 'Secure Parking', description: 'Allocated spaces with EV charging' },
    { icon: Home, title: '24/7 Concierge', description: 'Professional building management' },
    { icon: Users, title: 'Community Spaces', description: 'Shared lounge and meeting rooms' }
  ];

  const smartFeatures = [
    'App-controlled lighting and temperature',
    'Smart locks with keyless entry',
    'Voice-activated home automation',
    'Energy monitoring systems',
    'Integrated security cameras',
    'Smart appliance connectivity'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Residential Apartments
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Thoughtfully designed apartments for every lifestyle, from young professionals 
                to luxury downsizers. Levels 9-17 offer stunning city and parkland views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {apartmentTypes.map((apt, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-64">
                    <img
                      src={apt.image}
                      alt={`${apt.type} apartment interior`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                      {apt.type}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>View Floor Plan</span>
                      </button>
                      <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download Brochure</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Smart Home Technology
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Every apartment features integrated smart home technology, allowing residents 
                  to control their environment through a single app or voice commands.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {smartFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Smart home technology interface"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Amenities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Building Amenities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Residents enjoy access to premium amenities and services designed 
                to enhance your lifestyle and provide ultimate convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {amenities.map((amenity, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
                  <amenity.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
                </div>
              ))}
            </div>

            {/* Rooftop Access */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Exclusive Rooftop Access</h3>
              <p className="text-xl mb-6 text-blue-100">
                Residents enjoy priority access to Level 18's infinity pool and rooftop amenities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold mb-2">Infinity Pool</div>
                  <p className="text-blue-100">Private access during designated hours</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Rooftop Lounge</div>
                  <p className="text-blue-100">Exclusive resident seating areas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Event Space</div>
                  <p className="text-blue-100">Private function room bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialPage;