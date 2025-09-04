import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
     { name: 'About', path: '/about' },
    { name: 'Episodes', path: '/episodes' },
    { name: 'Guests', path: '/guests' },
    { name: 'Become a Guest', path: '/become-guest' },
    { name: 'Become a Host', path: '/become-host' },
    { name: 'Partners', path: '/become-partner' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#FDF8EE]/95 backdrop-blur-sm border-b border-[#F7B58D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-full h-10 rounded-full flex items-center justify-center">
              {/* <Mic className="w-4 h-4 text-[#111111]" /> */}

              <img
                src="src/assets/intalks-logo.png"
                alt="icon"
                className="w-auto h-14 object-cover"
              />
            </div>
            {/* <span className="font-bold text-xl text-[#111111]">InTalks</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#F7B58D] ${
                  isActive(link.path) 
                    ? 'text-[#F7B58D] border-b-2 border-[#F7B58D] pb-1' 
                    : 'text-[#111111]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#111111] hover:text-[#F7B58D] transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2 mb-4 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-[#F7B58D] bg-[#F7B58D]/10'
                      : 'text-[#111111] hover:text-[#F7B58D] hover:bg-[#F7B58D]/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;