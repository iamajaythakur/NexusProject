import React from 'react';
import { MapPin, Star, Smartphone, Coffee, Wifi, Shield } from 'lucide-react';

const Hotel: React.FC = () => {
  const hotelFeatures = [
    { icon: Smartphone, title: 'Digital Check-in', description: 'Seamless mobile check-in experience' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary throughout the hotel' },
    { icon: Coffee, title: 'Premium Amenities', description: 'Quality toiletries and linens' },
    { icon: Shield, title: '24/7 Security', description: 'Safe and secure environment' }
  ];

  const roomTypes = [
    {
      type: 'Standard Room',
      size: '22-25 m²',
      features: ['Queen bed', 'City view', 'Work desk', 'En-suite bathroom'],
      price: 'From $180/night'
    },
    {
      type: 'Superior Room',
      size: '28-32 m²',
      features: ['King bed', 'Premium view', 'Seating area', 'Premium amenities'],
      price: 'From $220/night'
    },
    {
      type: 'Executive Suite',
      size: '45-50 m²',
      features: ['Separate living area', 'Panoramic views', 'Work station', 'Premium bar'],
      price: 'From $350/night'
    }
  ];

  return (
    <section id="hotel" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Boutique Hotel Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A contemporary 3-star hotel spanning levels Ground to 8, featuring 150-200 
              thoughtfully designed rooms targeting modern travelers across generations.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Modern Hospitality
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our boutique hotel caters to Gen Z, Millennial, and Gen X travelers seeking 
                value without compromising on style and comfort. Every room features modern 
                amenities, contemporary design, and the latest technology for the connected traveler.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">Prime CBD location with easy transport access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">150-200 contemporary rooms across 9 levels</span>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern hotel room interior"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Room Types */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Room Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roomTypes.map((room, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {room.type}
                  </h4>
                  <p className="text-blue-600 font-medium mb-4">{room.size}</p>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {room.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Features */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Hotel Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotelFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;