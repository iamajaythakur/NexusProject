import React from 'react';
import { MapPin, Star, Smartphone, Coffee, Wifi, Shield, Users, Calendar } from 'lucide-react';

const HotelPage: React.FC = () => {
  const hotelFeatures = [
    { icon: Smartphone, title: 'Digital Check-in', description: 'Seamless mobile check-in and keyless entry' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary fiber internet throughout' },
    { icon: Coffee, title: 'Premium Amenities', description: 'Quality toiletries, linens, and in-room facilities' },
    { icon: Shield, title: '24/7 Security', description: 'Safe and secure environment with concierge' }
  ];

  const roomTypes = [
    {
      type: 'Standard Room',
      size: '22-25 m²',
      features: ['Queen bed', 'City view', 'Work desk', 'En-suite bathroom', 'Smart TV', 'Mini fridge'],
      price: 'From $180/night',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: 'Superior Room',
      size: '28-32 m²',
      features: ['King bed', 'Premium view', 'Seating area', 'Premium amenities', 'Coffee machine', 'Balcony'],
      price: 'From $220/night',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      type: 'Executive Suite',
      size: '45-50 m²',
      features: ['Separate living area', 'Panoramic views', 'Work station', 'Premium bar', 'Kitchenette', 'Luxury bathroom'],
      price: 'From $350/night',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const targetAudience = [
    {
      generation: 'Gen Z',
      description: 'Digital natives seeking tech-integrated, Instagram-worthy experiences',
      preferences: ['Mobile-first booking', 'Social media integration', 'Flexible spaces', 'Sustainable practices']
    },
    {
      generation: 'Millennials',
      description: 'Experience-focused travelers valuing convenience and connectivity',
      preferences: ['Work-friendly spaces', 'Wellness amenities', 'Local experiences', 'Value for money']
    },
    {
      generation: 'Gen X',
      description: 'Business and leisure travelers seeking comfort and reliability',
      preferences: ['Professional services', 'Family-friendly options', 'Premium comfort', 'Loyalty programs']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Boutique Hotel Experience
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A contemporary 3-star hotel spanning levels Ground to 8, featuring 150-200 
                thoughtfully designed rooms targeting modern travelers across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Modern Hospitality
                </h2>
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
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-300">Targeting digital-native travelers</span>
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
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Room Categories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose from our range of thoughtfully designed rooms, each featuring 
                modern amenities and contemporary styling.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {roomTypes.map((room, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={room.image}
                      alt={room.type}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{room.type}</h3>
                      <p className="text-blue-300">{room.size}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-4">{room.price}</div>
                    
                    <div className="space-y-2 mb-6">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Designed for Modern Travelers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our hotel experience is tailored to meet the unique needs and preferences 
                of today's diverse traveler demographics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {targetAudience.map((audience, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {audience.generation}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {audience.description}
                  </p>
                  <div className="space-y-2">
                    {audience.preferences.map((preference, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{preference}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Features */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Hotel Features & Amenities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience modern hospitality with cutting-edge technology and 
                thoughtful amenities designed for today's travelers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {hotelFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Amenities */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Additional Hotel Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <Coffee className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Compact Gym</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">24/7 fitness facilities</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Guest Lounge</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Co-working and social space</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Meeting Rooms</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Business facilities available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelPage;