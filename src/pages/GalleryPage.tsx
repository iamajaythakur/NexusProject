import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    {
      src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Rooftop infinity pool with Adelaide skyline at sunset',
      category: 'Rooftop'
    },
    {
      src: 'https://u.cubeupload.com/ajaythakur/e63WhatsAppImage2025061.jpeg',
      alt: 'Adelaide city skyline at golden hour',
      category: 'Exterior'
    },
    {
      src: 'https://u.cubeupload.com/ajaythakur/WhatsAppImage2025061.jpeg',
      alt: 'Modern building architecture and facade',
      category: 'Architecture'
    },
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Luxury 1BHK apartment interior with modern furnishing',
      category: 'Apartments'
    },
    {
      src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Contemporary hotel room with city views',
      category: 'Hotel'
    },
    {
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Fine dining restaurant with panoramic views',
      category: 'Dining'
    },
    {
      src: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Modern 2BHK apartment living space',
      category: 'Apartments'
    },
    {
      src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Luxury penthouse interior with premium finishes',
      category: 'Penthouse'
    },
    {
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Superior hotel room with premium amenities',
      category: 'Hotel'
    },
    {
      src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: 'Executive suite with separate living area',
      category: 'Hotel'
    },
    {
      src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      alt: '3BHK apartment with spacious layout',
      category: 'Apartments'
    },
    {
      src: 'https://u.cubeupload.com/ajaythakur/RoofTop.jpeg',
      alt: 'Rooftop bar with cocktails and city lights',
      category: 'Rooftop'
    }
  ];

  const categories = ['All', 'Architecture', 'Apartments', 'Hotel', 'Rooftop', 'Dining', 'Penthouse', 'Exterior'];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Project Gallery
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore high-quality renders, architectural details, and lifestyle scenes 
                showcasing the complete Nexus Tower experience across all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Download Project Materials</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Get access to floor plans, brochures, and high-resolution images
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Download Brochure</span>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Floor Plans</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-6xl max-h-full flex flex-col items-center">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                <span className="text-blue-400 font-medium">{filteredImages[selectedImage].category}</span>
                <p className="text-sm mt-1">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;