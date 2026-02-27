import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Network, Rocket, Users, TrendingUp } from 'lucide-react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8EE] via-white to-[#F7B58D]/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;80&quot; height=&quot;80&quot; viewBox=&quot;0 0 80 80&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpath d=&quot;M40 40c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm-20 0c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Introduction */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-6 py-3 bg-[#F7B58D]/10 rounded-full mb-8 backdrop-blur-sm border border-[#F7B58D]/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Rocket className="w-5 h-5 text-[#F7B58D] mr-2" />
            <span className="text-[#F7B58D] font-medium">The Future We're Building</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Beyond Conversations:
            <br />
            <span className="bg-gradient-to-r from-[#F7B58D] via-[#FFD700] to-[#F7B58D] bg-clip-text text-transparent">
              A Creator Marketplace
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Intalks is evolving into India's first comprehensive marketplace where creators, brands, 
            and audiences don't just connect they collaborate, create, and build the future together.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Creator Discovery */}
          <div className={`group relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#F7B58D]/20 hover:border-[#F7B58D]/40 transition-all duration-500 hover:transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7B58D] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creator Discovery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A curated platform where brands discover authentic creators based on values, 
                audience alignment, and proven collaboration success.
              </p>
              <div className="flex items-center text-[#F7B58D] font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Strategic Matching */}
          <div className={`group relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#F7B58D]/20 hover:border-[#F7B58D]/40 transition-all duration-500 hover:transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7B58D] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Matching</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered matching that goes beyond follower counts to create partnerships 
                based on audience overlap, brand values, and collaboration potential.
              </p>
              <div className="flex items-center text-[#F7B58D] font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>In Development</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Community Building */}
          <div className={`group relative transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#F7B58D]/20 hover:border-[#F7B58D]/40 transition-all duration-500 hover:transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7B58D] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Hub</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A thriving ecosystem where creators collaborate, share resources, 
                and build lasting relationships that extend beyond individual projects.
              </p>
              <div className="flex items-center text-[#F7B58D] font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Beta Access</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Marketplace Features Preview */}
        <div className={`bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] rounded-3xl p-12 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#F7B58D]/20 rounded-full mb-8 backdrop-blur-sm border border-[#F7B58D]/30">
            <Zap className="w-5 h-5 text-[#F7B58D] mr-2" />
            <span className="text-[#F7B58D] font-medium">Marketplace Features</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What's Coming to Intalks
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <TrendingUp className="w-8 h-8 text-[#F7B58D] mb-4 mx-auto" />
              <h4 className="text-white font-semibold mb-2">Performance Analytics</h4>
              <p className="text-gray-300 text-sm">Real-time collaboration metrics and ROI tracking</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <Users className="w-8 h-8 text-[#F7B58D] mb-4 mx-auto" />
              <h4 className="text-white font-semibold mb-2">Creator Profiles</h4>
              <p className="text-gray-300 text-sm">Comprehensive portfolios with verified metrics</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <Target className="w-8 h-8 text-[#F7B58D] mb-4 mx-auto" />
              <h4 className="text-white font-semibold mb-2">Smart Matching</h4>
              <p className="text-gray-300 text-sm">AI-powered brand-creator compatibility</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <Network className="w-8 h-8 text-[#F7B58D] mb-4 mx-auto" />
              <h4 className="text-white font-semibold mb-2">Collaboration Tools</h4>
              <p className="text-gray-300 text-sm">End-to-end project management platform</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/become-guest"
              className="px-8 py-4 bg-gradient-to-r from-[#F7B58D] to-[#FFD700] text-[#111111] font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#F7B58D]/25 transition-all duration-500 hover:transform hover:-translate-y-1"
            >
              Join as Early Creator
            </Link>
            <Link
              to="/become-partner"
              className="px-8 py-4 border-2 border-[#F7B58D] text-[#F7B58D] font-bold rounded-2xl hover:bg-[#F7B58D] hover:text-[#111111] transition-all duration-500 hover:transform hover:-translate-y-1"
            >
              Partner with Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;