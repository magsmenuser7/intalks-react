import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-[#F7B58D] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Wrong door. Right place.</h2>
          <p className="text-gray-600 mb-8">
            This page doesn't exist, but powerful stories do. Find episodes, guests, 
            and ideas that travel.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-[#F7B58D] text-[#111111] font-semibold rounded-full hover:bg-[#F7B58D]/90 transition-all duration-300 hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="pt-4">
            <Link
              to="/episodes"
              className="inline-flex items-center text-[#F7B58D] font-medium hover:text-[#F7B58D]/80 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Browse Episodes
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-4 text-[#F7B58D]/20">
          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;