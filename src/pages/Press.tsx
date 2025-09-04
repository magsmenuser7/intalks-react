import React from 'react';
import { ExternalLink, Download, Calendar, Building } from 'lucide-react';

interface PressItem {
  id: number;
  outlet: string;
  logo: string;
  headline: string;
  date: string;
  link: string;
  type: 'article' | 'interview' | 'feature' | 'award';
}

const Press = () => {
  const pressItems: PressItem[] = [
    {
      id: 1,
      outlet: "Economic Times",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      headline: "InTalks: Redefining Creator-Brand Partnerships in India",
      date: "December 2024",
      link: "#",
      type: "feature"
    },
    {
      id: 2,
      outlet: "YourStory",
      logo: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      headline: "How InTalks is Building India's First Marketplace Podcast",
      date: "November 2024",
      link: "#",
      type: "interview"
    },
    {
      id: 3,
      outlet: "Entrepreneur India",
      logo: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      headline: "The Strategic Mind Behind InTalks: Sandeep N's Journey",
      date: "October 2024",
      link: "#",
      type: "article"
    },
    {
      id: 4,
      outlet: "MMA Global",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      headline: "Sandeep N Named Consultant of the Year 2023",
      date: "September 2024",
      link: "#",
      type: "award"
    },
    {
      id: 5,
      outlet: "Marketing Mind",
      logo: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
      headline: "Top 100 Marketing Leaders: The InTalks Revolution",
      date: "August 2024",
      link: "#",
      type: "feature"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'award':
        return '🏆';
      case 'interview':
        return '🎤';
      case 'feature':
        return '⭐';
      default:
        return '📰';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-blue-100 text-blue-800';
      case 'feature':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Press & Media</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Coverage and recognition from leading media outlets and industry publications.
          </p>
        </div>

        {/* Media Kit CTA */}
        <div className="bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Media Kit</h2>
          <p className="text-gray-600 mb-6">
            Everything you need to feature InTalks: brand guidelines, high-res photos, 
            audience data, and story angles.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200">
            <Download className="w-5 h-5 mr-2" />
            Download Media Kit
          </button>
        </div>

        {/* Press Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pressItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={item.logo}
                  alt={item.outlet}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">{item.outlet}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-[#F7B58D] transition-colors duration-200">
                  {item.headline}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#F7B58D] font-medium hover:text-[#F7B58D]/80 transition-colors duration-200"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Media Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F7B58D] mb-2">25+</div>
              <p className="text-gray-600">Media Mentions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F7B58D] mb-2">5M+</div>
              <p className="text-gray-600">Earned Media Reach</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F7B58D] mb-2">15+</div>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>

        {/* Contact for Media */}
        <div className="bg-[#111111] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            For interviews, story angles, or collaboration opportunities, our media team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@intalks.in"
              className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              press@intalks.in
            </a>
            <a
              href="tel:+911234567890"
              className="px-6 py-3 border-2 border-[#F7B58D] text-[#F7B58D] font-medium rounded-lg hover:bg-[#F7B58D] hover:text-[#111111] transition-colors duration-200"
            >
              +91 12345 67890
            </a>
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            <p>Response time: Within 48 hours</p>
          </div>
        </div>

        {/* Empty State (commented out since we have content) */}
        {/* 
        {pressItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#F7B58D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-[#F7B58D]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Coverage goes here</h3>
            <p className="text-gray-600 mb-4">
              Want to feature us? Write to partnerships@intalks.in
            </p>
          </div>
        )}
        */}
      </div>
    </div>
  );
};

export default Press;