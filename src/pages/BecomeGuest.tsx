import React, { useState } from 'react';
import { CheckCircle, Clock, Video, Users, Star, Calendar } from 'lucide-react';

const BecomeGuest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    company: '',
    topicIdea: '',
    links: '',
    availability: '',
    consent: false
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
          <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Our team reviews all submissions weekly. If it fits an upcoming theme, 
            we will reach out within 7 business days.
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Story, Amplified</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If your journey inspires creators and brands, InTalks is your stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits & Process */}
          <div className="space-y-8">
            {/* What We Look For */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">What We Look For</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#F7B58D] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Real Execution Stories</h3>
                    <p className="text-gray-600">Operators and creators with authentic, hands-on experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#F7B58D] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Clear Lessons & Data</h3>
                    <p className="text-gray-600">Insights backed by results and measurable outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#F7B58D] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Actionable Topics</h3>
                    <p className="text-gray-600">Content that sparks movement and drives industry forward</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F7B58D] rounded-full flex items-center justify-center flex-shrink-0 text-[#111111] font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Discovery Call</h3>
                    <p className="text-gray-600">Short pre-call to define your angle and key takeaways</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F7B58D] rounded-full flex items-center justify-center flex-shrink-0 text-[#111111] font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Recording Session</h3>
                    <p className="text-gray-600">60–90 minute shoot, either in studio or remote</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F7B58D] rounded-full flex items-center justify-center flex-shrink-0 text-[#111111] font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Content Delivery</h3>
                    <p className="text-gray-600">Professional content pack with reels within 10–14 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Benefits */}
            <div className="bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-[#F7B58D]" />
                  <span>Discovery across 1.5 Cr+ YouTube views and 2 Cr+ Instagram views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-[#F7B58D]" />
                  <span>Professional content pack for your own channels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F7B58D]" />
                  <span>Connection to relevant brand partners in our network</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Apply to be a Guest</h2>
            
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    placeholder="e.g., Content Creator, Founder, Marketing Director"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company or Channel
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="topicIdea" className="block text-sm font-medium text-gray-700 mb-2">
                  Topic Idea *
                </label>
                <textarea
                  id="topicIdea"
                  name="topicIdea"
                  required
                  rows={4}
                  placeholder="What would you like to discuss? What insights can you share that would benefit creators and brands?"
                  value={formData.topicIdea}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="links" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Links
                </label>
                <textarea
                  id="links"
                  name="links"
                  rows={3}
                  placeholder="LinkedIn, website, portfolio, social media profiles..."
                  value={formData.links}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
                >
                  <option value="">Select your availability</option>
                  <option value="immediate">Available immediately</option>
                  <option value="2-weeks">Available in 2 weeks</option>
                  <option value="1-month">Available in 1 month</option>
                  <option value="flexible">Flexible scheduling</option>
                </select>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#F7B58D] border-gray-300 rounded focus:ring-[#F7B58D]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to being recorded and clipped for social distribution across InTalks channels. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#F7B58D] text-[#111111] font-semibold rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeGuest;