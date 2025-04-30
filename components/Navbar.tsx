'use client'
import { useState } from 'react';
import { Briefcase, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">RemoteConnect</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Testimonials
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Testimonials
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Contact
            </a>

            <div className="flex space-x-4 pt-2">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

