import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Adelaide cityscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Live. Stay. Dine.
          <span className="block text-4xl md:text-6xl text-blue-400 mt-2">
            In the Heart of Adelaide.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience Adelaide's most ambitious mixed-use development at 124 Wakefield Street. 
          Where modern luxury meets urban convenience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
          >
            Register Interest
          </button>
          <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Play className="h-6 w-6" />
            <span className="font-medium">Watch Video Tour</span>
          </button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">18</div>
            <div className="text-sm uppercase tracking-wide">Levels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">200+</div>
            <div className="text-sm uppercase tracking-wide">Hotel Rooms & Apartments</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">1</div>
            <div className="text-sm uppercase tracking-wide">Rooftop Infinity Pool</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;