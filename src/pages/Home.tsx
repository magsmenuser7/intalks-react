import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Users, Eye, Heart, Sparkles, TrendingUp, Zap } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import FeaturedEpisodes from '../components/FeaturedEpisodes';
import GuestWall from '../components/GuestWall';
import ModernHero from '../components/ModernHero';
import VisionSection from '../components/VisionSection';




const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    // fetch("http://127.0.0.1:8000/api/intalks-stats/")
    fetch("https://api.mibbs.ai/api/intalks-stats/")
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setStats(res.data);
        }
      });
  }, []);

  
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Modern Hero Section */}
      <ModernHero />

      {/* Impact Metrics with Parallax */}
      <section className="relative py-32 bg-gradient-to-br from-[#FDF8EE] via-white to-[#F7B58D]/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#F7B58D]/10 rounded-full mb-6 backdrop-blur-sm border border-[#F7B58D]/20">
              <Sparkles className="w-5 h-5 text-[#F7B58D] mr-2" />
              <span className="text-[#F7B58D] font-medium">Trusted by India's Top Creators</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] via-[#F7B58D] to-[#111111] bg-clip-text text-transparent">
              Where Stories Become Movements
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#F7B58D]/20 hover:border-[#F7B58D]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#F7B58D] mb-3">
                  <AnimatedCounter end={Number(stats?.youtubestats) || 0} suffix="M+" />
                </div>
                <p className="text-gray-600 font-medium">YouTube Views</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#F7B58D] to-transparent rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#F7B58D]/20 hover:border-[#F7B58D]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#F7B58D] mb-3">
                  {/* <AnimatedCounter end={stats.instagramstats} suffix="M+" /> */}
                  <AnimatedCounter end={Number(stats?.instagramstats) || 0} suffix="M+" />
                </div>
                <p className="text-gray-600 font-medium">Instagram Views</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#F7B58D] to-transparent rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#F7B58D]/20 hover:border-[#F7B58D]/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#F7B58D] mb-3">
                  <AnimatedCounter end={Number(stats?.communitygrowthstats) || 0} suffix="M+" />
                </div>
                <p className="text-gray-600 font-medium">Community</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-[#F7B58D] to-transparent rounded-full"></div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Featured Episodes */}
      <FeaturedEpisodes />

      {/* What InTalks Is */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M50 0L60.31 39.69L100 50L60.31 60.31L50 100L39.69 60.31L0 50L39.69 39.69z&quot; fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.03&quot;/%3E%3C/svg%3E')] animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-[#F7B58D]/20 rounded-full mb-8 backdrop-blur-sm border border-[#F7B58D]/30">
              <Zap className="w-5 h-5 text-[#F7B58D] mr-2" />
              <span className="text-[#F7B58D] font-medium">More Than Just Conversations</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              InTalks is Where
              <br />
              <span className="bg-gradient-to-r from-[#F7B58D] to-[#FFD700] bg-clip-text text-transparent">
                Ideas Come Alive
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don't just host conversations. We create connections that transform 
              how creators, brands, and audiences interact in India's digital ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#F7B58D]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F7B58D] to-[#FFD700] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">For Creators</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Share your journey, connect with like-minded creators, and discover 
                  opportunities that align with your vision and values.
                </p>
                <Link
                  to="/become-guest"
                  className="inline-flex items-center text-[#F7B58D] font-medium hover:text-[#FFD700] transition-colors duration-300 group-hover:translate-x-2"
                >
                  Join the Conversation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#F7B58D]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F7B58D] to-[#FFD700] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">For Brands</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Discover authentic voices, understand creator perspectives, and 
                  build meaningful relationships that go beyond traditional partnerships.
                </p>
                <Link
                  to="/become-partner"
                  className="inline-flex items-center text-[#F7B58D] font-medium hover:text-[#FFD700] transition-colors duration-300 group-hover:translate-x-2"
                >
                  Explore Partnerships
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7B58D]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#F7B58D]/30 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F7B58D] to-[#FFD700] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">For Audiences</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Get behind-the-scenes insights, learn from real experiences, and 
                  understand how India's creator economy really works.
                </p>
                <Link
                  to="/episodes"
                  className="inline-flex items-center text-[#F7B58D] font-medium hover:text-[#FFD700] transition-colors duration-300 group-hover:translate-x-2"
                >
                  Watch Episodes
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Wall */}
      <GuestWall />

      {/* Vision Section - The Marketplace Reveal */}
      <VisionSection />

      {/* Pull Quote */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7B58D]/5 via-white to-[#F7B58D]/5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z&quot;/%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-8xl text-[#F7B58D]/20 font-serif">"</div>
            <blockquote className="text-3xl md:text-4xl font-medium text-gray-800 italic leading-relaxed mb-8">
              Not just another podcast. A catalyst for India's creator economy.
            </blockquote>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#F7B58D] to-transparent mx-auto rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 text-8xl text-[#F7B58D]/20 font-serif rotate-180">"</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M30 30l15-15v30l-15-15zm-15 0l15-15v30l-15-15z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-[#F7B58D]/20 rounded-full mb-8 backdrop-blur-sm border border-[#F7B58D]/30">
            <TrendingUp className="w-5 h-5 text-[#F7B58D] mr-2" />
            <span className="text-[#F7B58D] font-medium">Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Be Part of
            <br />
            <span className="bg-gradient-to-r from-[#F7B58D] to-[#FFD700] bg-clip-text text-transparent">
              Something Bigger?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're a creator with a story, a host with vision, or a brand with ambition 
            let's create something meaningful together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/become-guest"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#F7B58D] to-[#FFD700] text-[#111111] font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#F7B58D]/25 transition-all duration-500 hover:transform hover:-translate-y-1"
            >
              <span className="relative z-10">Share Your Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F7B58D] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            
            <Link
              to="/become-host"
              className="group px-10 py-5 border-2 border-[#F7B58D] text-[#F7B58D] font-bold rounded-2xl hover:bg-[#F7B58D] hover:text-[#111111] transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F7B58D]/25"
            >
              Host a Vertical
            </Link>
            
            <Link
              to="/become-partner"
              className="group px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-[#111111] transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/25"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;