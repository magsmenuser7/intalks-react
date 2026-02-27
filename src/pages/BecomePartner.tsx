import React, { useState } from 'react';
import { CheckCircle, Target, TrendingUp, Users, Video, Award, Play } from 'lucide-react';

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    brand: '',
    category: '',
    contact: '',
    email: '',
    phone: '',
    objective: '',
    kpis: '',
    timeline: '',
    budget: '',
    message: '',
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
          <h1 className="text-2xl font-bold mb-4">Partnership Proposal Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thanks for your interest in partnering with Intalks. Our partnerships team will craft a tailored integration plan and reach out within 3 business days.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
          >
            Submit Another Proposal
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Where Brands Meet Conversations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategic podcast integrations that audiences trust and value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Integration Formats & Benefits */}
          <div className="space-y-8">
            {/* Integration Formats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Integration Formats</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Video className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Full Episode Sponsorship</h3>
                    <p className="text-gray-600">Brand integration throughout the entire conversation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Play className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Segment Sponsor</h3>
                    <p className="text-gray-600">Strategic placement in specific episode segments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Product Demo & Live Try-out</h3>
                    <p className="text-gray-600">Real-time product demonstrations during episodes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Creator Matchmaking</h3>
                    <p className="text-gray-600">Connect with creators through Intalks network</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[#F7B58D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Community Activations</h3>
                    <p className="text-gray-600">Live sessions and community engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F7B58D]" />
                  <span>Bespoke brief shaping and content strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F7B58D]" />
                  <span>On-air talking points aligned to business outcomes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F7B58D]" />
                  <span>Multi-format deliverables: episodes, shorts, stills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F7B58D]" />
                  <span>Measurement framework: reach, engagement, conversions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F7B58D]" />
                  <span>Access to 15.6M YouTube and 16.1 M+ Instagram views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Packages */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Partnership Packages</h2>
              
              {/* Starter Package */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6 hover:border-[#F7B58D] transition-colors duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Starter</h3>
                  <span className="bg-[#F7B58D]/10 text-[#F7B58D] px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Perfect for brands looking to test the waters</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">1 Episode Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">6 Social Media Reels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Performance Analytics</span>
                  </li>
                </ul>
              </div>

              {/* Growth Package */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6 hover:border-[#F7B58D] transition-colors duration-200">
                <h3 className="text-lg font-bold mb-4">Growth</h3>
                <p className="text-gray-600 mb-4">For brands ready to scale their creator partnerships</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">3 Episode Integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">24 Social Media Reels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Talent Collaboration Matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Advanced Analytics & Insights</span>
                  </li>
                </ul>
              </div>

              {/* Signature Package */}
              <div className="border-2 border-[#F7B58D] rounded-xl p-6 bg-[#F7B58D]/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Signature</h3>
                  <span className="bg-[#F7B58D] text-[#111111] px-3 py-1 rounded-full text-sm font-bold">
                    Premium
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Complete brand integration and custom series</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">6 Episode Integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Custom Episode Series</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Live Community Activation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Dedicated Account Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#F7B58D]" />
                    <span className="text-sm">Comprehensive Performance Dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Partner With Intalks</h2>
          <p className="text-gray-600 text-center mb-8">
            Tell us about your brand and objectives, and we'll craft a tailored integration plan.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Name *
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  required
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
                >
                  <option value="">Select category</option>
                  <option value="fintech">Fintech</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="fashion">Fashion</option>
                  <option value="food">Food & Beverage</option>
                  <option value="tech">Technology</option>
                  <option value="education">Education</option>
                  <option value="health">Health & Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
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
              <label htmlFor="objective" className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Objective *
              </label>
              <textarea
                id="objective"
                name="objective"
                required
                rows={3}
                placeholder="What are you looking to achieve through this partnership?"
                value={formData.objective}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">ASAP (Within 2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="flexible">Flexible timing</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1l">Under ₹1 Lakh</option>
                  <option value="1-5l">₹1-5 Lakh</option>
                  <option value="5-10l">₹5-10 Lakh</option>
                  <option value="10l-plus">₹10 Lakh+</option>
                  <option value="custom">Custom (discuss)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="kpis" className="block text-sm font-medium text-gray-700 mb-2">
                Key Success Metrics
              </label>
              <input
                type="text"
                id="kpis"
                name="kpis"
                placeholder="e.g., Brand awareness, Lead generation, Sales, App downloads..."
                value={formData.kpis}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us more about your brand, target audience, or specific requirements..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
              />
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
                I agree to Intalks contacting me about partnership opportunities and consent to my information being used for proposal development. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#F7B58D] text-[#111111] font-semibold rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              Submit Partnership Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;