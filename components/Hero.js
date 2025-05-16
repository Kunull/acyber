'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-adani-blue to-adani-purple py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Defend as One - Adani
            </h1>
            <h2 className="text-xl md:text-2xl text-white opacity-90 mb-8">
              Threat Intelligence Operationalisation Services for Partners and Suppliers
            </h2>
            <p className="text-white opacity-80 text-lg mb-8">
              Empowering you with real-time, contextual, and AI-processed Cyber and OT threat intelligence through the Adani Collaborate Portal.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#services" className="btn-primary bg-white text-adani-blue hover:bg-gray-100">
                Explore Services
              </Link>
              <Link href="#contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-xl shadow-2xl p-6 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-adani-light-blue rounded-full">
                    <svg className="w-6 h-6 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Adani Collaborate Portal</h3>
                    <p className="text-gray-600">Unified Threat Intelligence</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-adani-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Real-time threat awareness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-adani-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">AI-analyzed intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-adani-blue mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Seamless tool integration</span>
                  </li>
                </ul>
                <div className="bg-adani-light-blue p-4 rounded-lg">
                  <p className="text-adani-blue font-medium">
                    As cyber threats targeting Indian enterprises grow, Adani delivers high-fidelity intelligence to proactively defend against emerging threats.
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 -right-4 w-24 h-24 bg-adani-purple opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-adani-maroon opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
