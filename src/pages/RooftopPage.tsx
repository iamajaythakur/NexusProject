import React from 'react';
import { Waves, Wine, Utensils, Sunset, Calendar, Users, Clock, Star } from 'lucide-react';

const RooftopPage: React.FC = () => {
  const amenities = [
    { icon: Waves, title: 'Infinity Pool', description: 'Edge-to-edge pool with panoramic city views' },
    { icon: Wine, title: 'Skyline Bar', description: 'Craft cocktails and premium wine selection' },
    { icon: Utensils, title: 'Fine Dining', description: 'Contemporary Australian cuisine' },
    { icon: Sunset, title: 'Panoramic Views', description: '360° Adelaide city and hills vistas' }
  ];

  const venues = [
    {
      name: 'Infinity Pool Deck',
      description: 'Adelaide\'s highest infinity-edge pool with panoramic city views, perfect for relaxation and exclusive events',
      features: ['Infinity-edge design', 'Poolside service', 'Private cabanas', 'DJ area', 'Sunset views'],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      access: 'Private for residents/guests by day, exclusive events by night'
    },
    {
      name: 'Skyline Restaurant & Bar',
      description: 'Fine dining experience inspired by Adelaide\'s top venues like 2KW and Merrymaker, featuring contemporary Australian cuisine',
      features: ['Contemporary menu', 'Extensive wine list', 'Private dining rooms', 'Chef\'s table experience', 'Cocktail bar'],
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      access: 'Open to public with priority reservations for residents'
    }
  ];

  const eventTypes = [
    {
      type: 'Corporate Events',
      description: 'Impress clients with Adelaide\'s most exclusive venue',
      capacity: 'Up to 150 guests',
      features: ['AV equipment', 'Catering options', 'Dedicated event staff']
    },
    {
      type: 'Private Parties',
      description: 'Celebrate special occasions with stunning city views',
      capacity: 'Up to 100 guests',
      features: ['Custom lighting', 'DJ setup', 'Bar packages']
    },
    {
      type: 'Wedding Receptions',
      description: 'Exchange vows with Adelaide\'s skyline as your backdrop',
      capacity: 'Up to 120 guests',
      features: ['Bridal suite', 'Photography areas', 'Wedding coordination']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Rooftop infinity pool with Adelaide skyline at sunset"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Level 18 Rooftop
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-300 font-light">
              Adelaide's Highest Infinity Pool & Skyline Dining
            </p>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Experience Adelaide like never before at our rooftop destination featuring 
              an infinity pool, panoramic restaurant, and breathtaking 360° city views.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Make Reservation
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30">
                Private Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Venues */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Two Distinct Experiences
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Level 18 offers both relaxation and dining, with flexible access 
                ensuring the perfect experience for every occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {venues.map((venue, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                      <p className="text-blue-300 text-sm">{venue.access}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {venue.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {venue.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Rooftop Amenities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every detail has been carefully considered to create Adelaide's 
                most spectacular rooftop destination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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
      </section>

      {/* Inspired by Adelaide's Best */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Inspired by Adelaide's Finest
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our rooftop experience draws inspiration from Adelaide's most celebrated venues, 
                bringing world-class hospitality to new heights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Culinary Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Inspired by venues like 2KW and Merrymaker, our restaurant features 
                  contemporary Australian cuisine with a focus on local ingredients 
                  and innovative presentation.
                </p>
                <div className="flex items-center space-x-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-600 dark:text-gray-300">Award-winning chef team</span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Cocktail Culture
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our skyline bar features craft cocktails and an extensive wine list, 
                  showcasing South Australian producers alongside international selections.
                </p>
                <div className="flex items-center space-x-4">
                  <Wine className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">Premium beverage program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Functions */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Private Events & Functions
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Host your next event 18 levels above Adelaide with breathtaking city views 
                and world-class service.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {eventTypes.map((event, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3">{event.type}</h3>
                  <p className="text-blue-100 mb-4">{event.description}</p>
                  <div className="text-sm text-blue-200 mb-4">{event.capacity}</div>
                  <div className="space-y-2">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Enquire About Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Operating Hours & Access
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Waves className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pool Deck</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Residents/Guests</span>
                    <span className="text-gray-900 dark:text-white">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Private Events</span>
                    <span className="text-gray-900 dark:text-white">8:00 PM - Late</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Utensils className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Restaurant & Bar</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Lunch</span>
                    <span className="text-gray-900 dark:text-white">12:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Dinner</span>
                    <span className="text-gray-900 dark:text-white">6:00 PM - Late</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RooftopPage;