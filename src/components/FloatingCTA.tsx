import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, X, Mail, Calendar } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isExpanded && (
        <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 w-64 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-gray-900 dark:text-white">Quick Contact</h4>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2">
            <Link 
              to="/contact"
              onClick={() => setIsExpanded(false)}
              className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Get in Touch</span>
            </Link>
            <a 
              href="tel:+61812345678" 
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
            >
              <Phone className="h-4 w-4" />
              <span>Call Sales Office</span>
            </a>
            <a 
              href="mailto:info@nexustower.com.au" 
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
            >
              <Mail className="h-4 w-4" />
              <span>Send Email</span>
            </a>
            <Link 
              to="/gallery"
              onClick={() => setIsExpanded(false)}
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
            >
              <Calendar className="h-4 w-4" />
              <span>View Gallery</span>
            </Link>
          </div>
        </div>
      )}
      
      <div className="flex space-x-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        
        <a
          href="tel:+61812345678"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;