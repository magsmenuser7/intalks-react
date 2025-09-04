import React from 'react';
import { Award, Users, Mic, ExternalLink, Youtube, Instagram, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-[#F7B58D] mx-auto"> {/* Border-4 added */}
              <img
                src="src/assets/sandeep.png"
                alt="Sandeep N"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center">
              <Mic className="w-8 h-8 text-[#111111]" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Sandeep N</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategist. Builder. Host of InTalks.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">The Story Behind InTalks</h2>
            <p className="text-gray-600 leading-relaxed">
              Sandeep N is the founder of Magsmen and the creator of InTalks and SanStrategies. 
              Recognized as Consultant of the Year 2023 and among India's Top 100 Marketing Leaders, 
              he has advised startups, scaleups, and Fortune 25 companies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through InTalks, he's creating India's first marketplace podcast for creators, brands, 
              and audiences. His vision extends beyond traditional podcasting to build a platform 
              where meaningful conversations drive real business outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With 8+ years of research in brand strategy and experience serving as a jury member 
              for MMA Global Awards, Sandeep brings a unique perspective to the creator economy 
              that bridges strategic thinking with authentic storytelling.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Philosophy</h2>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#F7B58D] pl-6">
              "Every conversation has the potential to spark a movement. InTalks exists to capture 
              those moments and amplify them into opportunities that benefit creators, brands, and 
              audiences alike."
            </blockquote>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#F7B58D] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>For Creators:</strong> Providing platforms for authentic storytelling and strategic growth
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#F7B58D] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>For Brands:</strong> Facilitating genuine connections through strategic content partnerships
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#F7B58D] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>For Audiences:</strong> Delivering insights that inspire action and drive industry evolution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Impact & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#111111]" />
              </div>
              <div className="text-2xl font-bold text-[#F7B58D] mb-2">150+</div>
              <p className="text-gray-600">Conversations with Leaders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#111111]" />
              </div>
              <div className="text-2xl font-bold text-[#F7B58D] mb-2">2023</div>
              <p className="text-gray-600">Consultant of the Year</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#111111]" />
              </div>
              <div className="text-2xl font-bold text-[#F7B58D] mb-2">Top 100</div>
              <p className="text-gray-600">Marketing Leaders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#111111]" />
              </div>
              <div className="text-2xl font-bold text-[#F7B58D] mb-2">Jury</div>
              <p className="text-gray-600">MMA Global Awards</p>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Connect with Sandeep</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to collaborate, share insights, or explore opportunities 
            in the creator economy, let's start a conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://www.linkedin.com/company/magsmen/"
              className="inline-flex items-center px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a
              href="https://magsmen.com/"
              className="inline-flex items-center px-6 py-3 border-2 border-[#F7B58D] text-[#F7B58D] font-medium rounded-lg hover:bg-[#F7B58D] hover:text-[#111111] transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Explore Magsmen
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://www.youtube.com/@Intalkspodcast" className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/intalkspodcast/" className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/intalkspodcast/" className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;