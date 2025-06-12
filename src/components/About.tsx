import React from 'react';
import { Building2, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Nexus Tower
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Adelaide's most innovative mixed-use development, combining luxury living, 
              boutique hospitality, and world-class dining in the heart of the CBD.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern building architecture"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Vision & Development
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Nexus Tower represents the future of urban living in Adelaide. Our 18-level 
                mixed-use development seamlessly integrates a boutique hotel, luxury residential 
                apartments, and an iconic rooftop venue, creating a vibrant community in the 
                heart of the city.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Located at the prestigious 124 Wakefield Street address, residents and guests 
                enjoy unparalleled access to Adelaide's business district, cultural precincts, 
                and entertainment venues, while living in a space designed for the modern lifestyle.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export default About;