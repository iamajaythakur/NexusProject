import React from 'react';
import { Building2, MapPin, Calendar, Award, Zap, Shield, Leaf, Smartphone } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    { icon: Zap, title: 'Smart Technology', description: 'App-controlled lighting, locks, and HVAC systems' },
    { icon: Shield, title: 'Security & Safety', description: '24/7 security with smart access control' },
    { icon: Leaf, title: 'Sustainability', description: 'Rooftop solar, rainwater reuse, energy-efficient design' },
    { icon: Smartphone, title: 'Digital Integration', description: 'Seamless technology throughout the building' }
  ];

  const locationHighlights = [
    { name: 'Victoria Square', distance: '250m', description: 'Adelaide\'s central public square' },
    { name: 'Gouger Street', distance: '300m', description: 'Premier dining and entertainment precinct' },
    { name: 'Adelaide Central Market', distance: '400m', description: 'Fresh produce and gourmet foods' },
    { name: 'Adelaide Railway Station', distance: '600m', description: 'Major transport hub' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About Nexus Tower
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Adelaide's most innovative mixed-use development, combining luxury living, 
                boutique hospitality, and world-class dining in the heart of the CBD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Development */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Vision & Development
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Hotel Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Levels G–8 feature our branded 3-star economy hotel with 150–200 rooms, 
                      targeting today's digital-native travelers with innovative amenities and 
                      seamless technology integration.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Residential Luxury
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Levels 9–17 offer thoughtfully designed apartments from compact 1BHK 
                      to luxury penthouses, each featuring smart-home technology, premium 
                      finishes, and stunning city views.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Adelaide skyline at golden hour"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Mixed-Use Design
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Hotel, residential, and dining seamlessly integrated
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Prime Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  124 Wakefield Street, Adelaide CBD
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Development Timeline
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Expected completion Q4 2025
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Award Winning
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Architectural excellence and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Smart Building Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Nexus Tower integrates cutting-edge technology and sustainable design 
                to create a truly modern living and hospitality experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
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
      </section>

      {/* Location Advantage */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Location Advantage
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                124 Wakefield Street places you at the center of Adelaide's most vibrant 
                district, with everything you need within walking distance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationHighlights.map((location, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{location.distance}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {location.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{location.description}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Interactive Location Map
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  124 Wakefield Street, Adelaide SA 5000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;