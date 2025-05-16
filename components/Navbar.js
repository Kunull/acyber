'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span className="text-adani-blue font-bold text-2xl">adani</span>
                <span className="text-gray-600 ml-2 font-medium">| Cyber</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-adani-blue font-medium">
              Services
            </Link>
            <Link href="#benefits" className="text-gray-700 hover:text-adani-blue font-medium">
              Benefits
            </Link>
            <Link href="#portal" className="text-gray-700 hover:text-adani-blue font-medium">
              Portal
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-adani-blue font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 py-4">
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-adani-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#benefits" 
                className="text-gray-700 hover:text-adani-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="#portal" 
                className="text-gray-700 hover:text-adani-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Portal
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-adani-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="#contact" 
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
