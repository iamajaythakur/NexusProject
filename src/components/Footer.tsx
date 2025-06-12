import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Building2 className="h-8 w-8 text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">Nexus Tower</span>
                  <div className="text-xs text-gray-400">Where Adelaide Rises</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Live. Stay. Dine – In the Heart of Adelaide. 
                Premium mixed-use development at 124 Wakefield Street.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/residential" className="text-gray-400 hover:text-white transition-colors">Residential</Link></li>
                <li><Link to="/hotel" className="text-gray-400 hover:text-white transition-colors">Hotel</Link></li>
                <li><Link to="/rooftop" className="text-gray-400 hover:text-white transition-colors">Rooftop</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Opportunities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hotel Bookings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event Venue Hire</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Floor Plans</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>124 Wakefield Street</p>
                    <p>Adelaide, SA 5000</p>
                    <p>Australia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-400">+61 8 1234 5678</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-400">info@nexustower.com.au</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2025 Nexus Tower. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;