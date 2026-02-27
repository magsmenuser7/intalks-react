import React, { useState } from 'react';
import { CheckCircle, Mic, Users, TrendingUp, Star, Video, Award } from 'lucide-react';

const BecomeHost = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handles: '',
    niche: '',
    sampleVideo: '',
    whyYou: '',
    availability: '',
    nda: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Welcome aboard. You will hear from us shortly as we review your application 
            and match you with the right vertical opportunity.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Host an Intalks Vertical</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your niche. Our platform. A shared audience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Benefits & What We Expect */}
          <div className="space-y-8">
            {/* Why Host on InTalks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Why Host on Intalks</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Built-in Audience & Distribution</h3>
                    <p className="text-gray-600">Tap into our 1.5 Cr+ YouTube views and 2 Cr+ Instagram views</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Video className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Production Support & Editorial</h3>
                    <p className="text-gray-600">Full production backing and editorial guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Access to Brand Partnerships</h3>
                    <p className="text-gray-600">Monetize through strategic brand integrations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Expect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">What We Expect</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-[#F7B58D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Consistent Cadence</h3>
                    <p className="text-gray-600">Regular episode schedule and reliable delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#F7B58D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Topic Expertise</h3>
                    <p className="text-gray-600">Deep knowledge in your chosen vertical</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mic className="w-5 h-5 text-[#F7B58D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">On-Camera Clarity & Community Mindset</h3>
                    <p className="text-gray-600">Natural hosting ability and audience-first approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Available Verticals */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Verticals Open Now</h2>
            <div className="space-y-4">
              <div className="p-4 border border-[#F7B58D]/20 rounded-lg hover:bg-[#F7B58D]/5 transition-colors duration-200">
                <h3 className="font-semibold text-[#F7B58D] mb-1">Fintech Creators</h3>
                <p className="text-sm text-gray-600">Focus on financial literacy, fintech innovations, and creator monetization</p>
              </div>
              <div className="p-4 border border-[#F7B58D]/20 rounded-lg hover:bg-[#F7B58D]/5 transition-colors duration-200">
                <h3 className="font-semibold text-[#F7B58D] mb-1">Beauty and D2C</h3>
                <p className="text-sm text-gray-600">Beauty brands, D2C strategies, and influencer marketing</p>
              </div>
              <div className="p-4 border border-[#F7B58D]/20 rounded-lg hover:bg-[#F7B58D]/5 transition-colors duration-200">
                <h3 className="font-semibold text-[#F7B58D] mb-1">SaaS and Startup Ops</h3>
                <p className="text-sm text-gray-600">Software, startup operations, and scaling strategies</p>
              </div>
              <div className="p-4 border border-[#F7B58D]/20 rounded-lg hover:bg-[#F7B58D]/5 transition-colors duration-200">
                <h3 className="font-semibold text-[#F7B58D] mb-1">Regional Creator Economy</h3>
                <p className="text-sm text-gray-600">Local language content and regional market insights</p>
              </div>
              <div className="p-4 border border-[#F7B58D]/20 rounded-lg hover:bg-[#F7B58D]/5 transition-colors duration-200">
                <h3 className="font-semibold text-[#F7B58D] mb-1">Media & Entertainment Business</h3>
                <p className="text-sm text-gray-600">Entertainment industry, media business, and content distribution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Apply to Host a Vertical</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="handles" className="block text-sm font-medium text-gray-700 mb-2">
                Social Media Handles *
              </label>
              <input
                type="text"
                id="handles"
                name="handles"
                required
                placeholder="Instagram, YouTube, LinkedIn, etc."
                value={formData.handles}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-2">
                Your Niche/Vertical *
              </label>
              <select
                id="niche"
                name="niche"
                required
                value={formData.niche}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
              >
                <option value="">Select your vertical</option>
                <option value="fintech">Fintech Creators</option>
                <option value="beauty-d2c">Beauty and D2C</option>
                <option value="saas-startup">SaaS and Startup Ops</option>
                <option value="regional">Regional Creator Economy</option>
                <option value="media-entertainment">Media & Entertainment Business</option>
                <option value="other">Other (please specify in "Why You" section)</option>
              </select>
            </div>

            <div>
              <label htmlFor="sampleVideo" className="block text-sm font-medium text-gray-700 mb-2">
                Sample Video Link *
              </label>
              <input
                type="url"
                id="sampleVideo"
                name="sampleVideo"
                required
                placeholder="Link to a video showcasing your hosting/presenting skills"
                value={formData.sampleVideo}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="whyYou" className="block text-sm font-medium text-gray-700 mb-2">
                Why You? *
              </label>
              <textarea
                id="whyYou"
                name="whyYou"
                required
                rows={4}
                placeholder="Tell us about your expertise, audience, and what unique perspective you'd bring to Intalks..."
                value={formData.whyYou}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability *
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
              >
                <option value="">Select your availability</option>
                <option value="immediate">Available to start immediately</option>
                <option value="1-month">Available within 1 month</option>
                <option value="2-months">Available within 2 months</option>
                <option value="flexible">Flexible timeline</option>
              </select>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="nda"
                name="nda"
                required
                checked={formData.nda}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-[#F7B58D] border-gray-300 rounded focus:ring-[#F7B58D]"
              />
              <label htmlFor="nda" className="text-sm text-gray-600">
                I acknowledge that hosting details and partnership information may be subject to confidentiality agreements. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#F7B58D] text-[#111111] font-semibold rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              Submit Host Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeHost;