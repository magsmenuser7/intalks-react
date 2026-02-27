import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Youtube, Instagram, Linkedin, Twitter, Facebook, X, Mail } from 'lucide-react';
import logo2 from '../assets/intalks-logo-white.png';


const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-auto h-10 rounded-full flex items-center justify-center">
                {/* <Mic className="w-4 h-4 text-[#111111]" /> */}
                <img
                src={logo2}
                alt="icon"
                className="w-auto h-14 object-contain"
              />

              </div>
              {/* <span className="font-bold text-xl">InTalks</span> */}
            </div>
            <p className="text-gray-300 mb-6 max-w-sm text-justify">
              As Intalks evolved, we brought in voices from diverse industries including healthcare, food and hospitality, footwear, film, education, and technology. Each episode uncovers real-life case scenarios, clears common myths, and shares practical insights enriching everyday lives with meaningful conversations.</p>
            <div className="flex space-x-3">
              {/* YouTube */}
              <a
    href="https://www.youtube.com/@Intalkspodcast"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-80 transition"
    aria-label="YouTube"
  >
    <Youtube className="w-4 h-4" />
  </a>

  {/* Spotify */}
  <a
    href="https://open.spotify.com/show/0FQetn2LQ7EpldSluRaZp1?si=1a924b86b74840ad&nd=1&dlsi=301d03dd27384c14"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DB954] text-white hover:opacity-80 transition"
    aria-label="Spotify"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className="w-4 h-4 fill-current"
    >
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 
      248-111 248-248S385 8 248 8zm102.6 365.8c-4.2 
      6.8-13.2 8.9-20 4.7-54.7-33.4-123.6-41-204.7-23.4
      -7.9 1.7-15.8-3.3-17.5-11.2-1.7-7.9 3.3-15.8 
      11.2-17.5 88.2-19 164.7-10.2 226.5 26.6 
      6.8 4.2 8.9 13.2 4.5 20.8zm28.4-63.6c-5.3 
      8.4-16.5 11-24.9 5.7-62.7-38.3-158.1-49.5
      -231.5-28.1-9.4 2.6-19.3-2.6-21.9-11.9
      -2.6-9.4 2.6-19.3 11.9-21.9 82.4-23.8 
      188.5-11.4 260.6 32.5 8.4 5.3 
      11 16.5 5.8 24.9zm2.5-66.2c-74.7-44.4-198.1-48.6
      -269.1-27.7-11 3.3-22.9-3-26.2-14-3.3-11 
      3-22.9 14-26.2 80.8-24.5 216.5-19.5 
      300.9 31.4 10.1 6 13.5 19.2 
      7.5 29.3-6.1 10.1-19.3 13.5-29.4 7.2z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/people/Intalks-Podcast/61564445152535/"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
    aria-label="Facebook"
  >
    <Facebook className="w-4 h-4" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/intalkspodcast/"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E4405F] text-white hover:opacity-80 transition"
    aria-label="Instagram"
  >
    <Instagram className="w-4 h-4" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/intalkspodcast/"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077B5] text-white hover:opacity-80 transition"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-4 h-4" />
  </a>

  {/* Twitter */}
  <a
    href="https://x.com/IntalksPodcast"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition"
    aria-label="Twitter"
  >
    <X className="w-4 h-4" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/episodes" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Episodes</Link></li>
              <li><Link to="/guests" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Guests</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">About</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Press</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/become-guest" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Become a Guest</Link></li>
              <li><Link to="/become-host" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Become a Host</Link></li>
              <li><Link to="/become-partner" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Become a Partner</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#F7B58D] transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

            <div>
            <h3 className="font-semibold text-lg mb-4">Address</h3>
            <p className="text-gray-300 leading-relaxed">
              Brodipet 6th Line
              Beside Arundalpet Police Station
              Guntur, Andhra Pradesh - 522002
            </p>
          </div>

         

        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-lg mb-2">Ideas that travel fast</h3>
              <p className="text-gray-300">Get the latest insights from India's creator economy.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
              <button className="px-6 py-2 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 Intalks. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#F7B58D] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#F7B58D] transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-[#F7B58D] transition-colors duration-200">Brand Assets</a>
          </div>
        </div>
      </div>
        <p></p>
    </footer>
  );
};



export default Footer;