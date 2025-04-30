'use client'
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would send this to your API
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    };
    
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions about our remote talent solutions? Contact us today to discuss your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@remoteconnect.com" className="text-gray-700 hover:text-blue-600">
                        info@remoteconnect.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+1-555-123-4567" className="text-gray-700 hover:text-blue-600">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-gray-700">
                        123 Remote Work Plaza<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM (PST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 1:00 PM (PST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  Our support team is distributed globally, allowing us to offer assistance in multiple time zones.
                </p>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700 mb-4">
                    Your message has been successfully sent. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree with the {' '}
                      <a href="#" className="text-blue-600 hover:underline">privacy policy</a>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
