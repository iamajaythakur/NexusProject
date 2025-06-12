import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Play, Building2, Hotel, Waves, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Rooftop infinity pool with Adelaide skyline at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Nexus Tower
            </h1>
            <div className="text-2xl md:text-4xl font-light mb-4 text-blue-300">
              Where Adelaide Rises
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-light">
              Live. Stay. Dine – In the Heart of Adelaide
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link 
              to="/residential"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Apartments</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/hotel"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 flex items-center space-x-2"
            >
              <span>Book Hotel Stay</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/rooftop"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 flex items-center space-x-2"
            >
              <span>Discover Rooftop</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">18</div>
              <div className="text-sm uppercase tracking-wide font-medium">Levels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-sm uppercase tracking-wide font-medium">Hotel Rooms & Apartments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-sm uppercase tracking-wide font-medium">Rooftop Infinity Pool</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Three Experiences, One Address
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                124 Wakefield Street brings together luxury living, boutique hospitality, 
                and world-class dining in Adelaide's most innovative mixed-use development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Residential */}
              <Link to="/residential" className="group">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="mb-6">
                    <Building2 className="h-16 w-16 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Residential
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Levels 9-17 feature thoughtfully designed apartments from compact 1BHK 
                      to luxury penthouses with smart-home technology.
                    </p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">1BHK to Penthouse options</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Smart home features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">City & parkland views</span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                    <span>Explore Apartments</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Hotel */}
              <Link to="/hotel" className="group">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="mb-6">
                    <Hotel className="h-16 w-16 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Boutique Hotel
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Levels G-8 feature a branded 3-star economy hotel with 150-200 rooms, 
                      designed for digital-native travelers.
                    </p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Digital check-in</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Compact gym & lounge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Free high-speed WiFi</span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                    <span>Book Hotel Stay</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Rooftop */}
              <Link to="/rooftop" className="group">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="mb-6">
                    <Waves className="h-16 w-16 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Rooftop Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Level 18 features an infinity-edge pool and panoramic bar/restaurant 
                      inspired by Adelaide's finest venues.
                    </p>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Infinity-edge pool</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Panoramic city views</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Fine dining & cocktails</span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                    <span>Discover Rooftop</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Prime Adelaide Location
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  124 Wakefield Street places you at the heart of Adelaide's vibrant CBD, 
                  with world-class dining, shopping, and cultural attractions at your doorstep.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Victoria Square - 250m walk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Gouger Street dining - 300m walk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Adelaide Central Market - 400m walk</span>
                  </div>
                </div>
                <Link 
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <img
                  src="https://u.cubeupload.com/ajaythakur/48aWhatsAppImage2025061.jpeg"
                  alt="Adelaide city skyline at golden hour"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Nexus Tower?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Register your interest today and be first to know about exclusive pre-launch offers, 
              floor plan releases, and special pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/gallery"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>View Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;