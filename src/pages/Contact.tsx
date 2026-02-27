import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CheckCircle, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_ztfkvtu";
    const templateID = "template_eepqtnx";
    const publicKey = "lGEySRjC5bz4G2JLr";

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully!", res.status);
        // 👉 RESET FORM AFTER SUCCESS
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("Email send failed:", err);
        alert("Failed to send message. Try again!");
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">All set. Welcome to Intalks.</h1>
          <p className="text-gray-600 mb-6">
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
          >
            Send Another Message
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a creator, a guest, or a brand let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#F7B58D] text-[#111111] font-semibold rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">

            {/* Quick Connect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Quick Connect</h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/9044910449"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#F7B58D] hover:bg-[#F7B58D]/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">Quick chat for immediate queries</p>
                  </div>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=explore@intalks.in"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#F7B58D] hover:bg-[#F7B58D]/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 text-sm">explore@intalks.in</p>
                  </div>
                </a>

                <a
                  href="tel:+919044910449"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#F7B58D] hover:bg-[#F7B58D]/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-[#F7B58D]/20 rounded-full flex items-center justify-center group-hover:bg-[#F7B58D]/30 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-[#F7B58D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600 text-sm">For partnerships & collaborations</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Studio Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Studio Location</h2>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F7B58D]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F7B58D]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Intalks Studio</h3>
                  <p className="text-gray-600 mb-4">
                    Brodipet 6th line beside arundalpet police station,<br />
                    Guntur, Andhra Pradesh-522002
                  </p>
                  <p className="text-sm text-gray-500">
                    Available for in-person recordings and brand collaborations.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">Response Times</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">General Inquiries</span>
                  <span className="font-medium">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Guest Applications</span>
                  <span className="font-medium">7 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Partnership Proposals</span>
                  <span className="font-medium">3 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Media & Press</span>
                  <span className="font-medium">48 hours</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;













