import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Sparkles, Mic2 } from 'lucide-react';

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8EE] via-[#FDF8EE] to-[#F7B58D]/20">
        {/* Floating Elements */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-[#F7B58D]/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-[#F7B58D]/30 to-transparent rounded-full blur-2xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${20 + mousePosition.y * 0.03}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
          }}
        />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M50 5L55 40L90 45L55 50L50 85L45 50L10 45L45 40z&quot; fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.05&quot;/%3E%3C/svg%3E')] animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-[#F7B58D]/20 shadow-lg transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Mic2 className="w-5 h-5 text-[#F7B58D] mr-2" />
          <span className="text-[#F7B58D] font-semibold">India's Most Authentic Creator Conversations</span>
        </div>
        
        {/* Main Headline */}
        <h1 className={`font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Where Stories
          <br />
          <span className="relative">
            <span className="bg-gradient-to-r from-[#F7B58D] via-[#FFD700] to-[#F7B58D] bg-clip-text text-transparent animate-gradient-x">
              Shape Industries
            </span>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F7B58D] to-transparent rounded-full"></div>
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Intalks brings you unfiltered conversations with India's most influential creators, 
          entrepreneurs, and visionaries. Real stories. Real insights. Real impact.
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <Link
            to="/episodes"
            className="group relative px-10 py-5 bg-gradient-to-r from-[#F7B58D] to-[#FFD700] text-[#111111] font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#F7B58D]/25 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F7B58D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Watch Latest Episode
            </span>
          </Link> */}

          <a
            href="https://www.youtube.com/watch?v=MRNKdDHcSCM&t=166s"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-[#F7B58D] to-[#FFD700] text-[#111111] font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#F7B58D]/25 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F7B58D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Watch Latest Episode
            </span>
          </a>

          <Link
            to="/become-guest"
            className="group px-10 py-5 border-2 border-[#F7B58D] text-[#F7B58D] font-bold rounded-2xl hover:bg-[#F7B58D] hover:text-[#111111] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F7B58D]/25"
          >
            <span className="flex items-center">
              Share Your Story
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>

        {/* Floating Action Hint */}
        <div className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center text-gray-500 text-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            <span>37+ episodes and counting</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F7B58D]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#F7B58D] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;