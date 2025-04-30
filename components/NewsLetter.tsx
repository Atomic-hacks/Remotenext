'use client'

import { CheckCircle } from "lucide-react";
import { useState } from "react";

export const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would send this to your API
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
    };
    
    return (
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Remote Work Trends</h2>
            <p className="text-lg mb-8 text-blue-100">
              Subscribe to our newsletter for the latest remote job opportunities, industry insights, and tips for managing remote teams.
            </p>
            
            {isSubmitted ? (
              <div className="bg-blue-700 p-6 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-2 text-green-400" />
                <p className="text-white font-medium">Thank you for subscribing! Check your inbox soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  };