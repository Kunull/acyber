'use client';

import Image from 'next/image';

export default function Portal() {
  return (
    <section id="portal" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="section-heading">Technology Backbone</h2>
            <h3 className="text-2xl font-semibold mb-6 text-adani-purple">Adani Collaborate Portal</h3>
            <p className="text-gray-700 mb-6">
              A unified, secure portal for Adani partners to access all types of Threat Intelligence data. From IOC threat feeds and security advisories to sandbox malware analysis, compromised credential monitoring, threat intelligence operationalisation/actioning and WhatsApp intel actioning—everything is accessible in one Portal.
            </p>
            <p className="text-gray-700 mb-8">
              With role-based access, easy search, and direct actioning capabilities, Adani Collaborate Portal simplifies threat intel consumption and operationalisation, eliminating the need for multiple tools or manual processes.
            </p>
            
            <div className="bg-adani-light-purple p-6 rounded-lg border-l-4 border-adani-purple">
              <h4 className="text-lg font-semibold text-adani-purple mb-3">Key Portal Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-adani-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-adani-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Advanced search capabilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-adani-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">One-click threat actioning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-adani-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Seamless integration with security tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-adani-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Automated threat intelligence workflows</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Portal mockup image would go here */}
              <div className="bg-gray-800 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-gray-300 text-sm">Adani Collaborate Portal</div>
              </div>
              
              <div className="p-4 bg-adani-blue/5">
                <div className="flex items-center justify-between mb-6 p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-adani-blue flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Welcome, Partner</div>
                      <div className="text-sm text-gray-500">Last login: Today, 10:30 AM</div>
                    </div>
                  </div>
                  <div className="bg-adani-light-blue px-3 py-1 rounded-full text-adani-blue text-sm font-medium">
                    Premium Access
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">Active Threats</div>
                    <div className="text-2xl font-bold text-adani-maroon">24</div>
                    <div className="text-xs text-gray-500 mt-2">+3 from yesterday</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">IOCs Blocked</div>
                    <div className="text-2xl font-bold text-adani-green">1,248</div>
                    <div className="text-xs text-gray-500 mt-2">Last 30 days</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Recent Threat Advisories</div>
                    <div className="text-adani-blue text-sm">View All</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Critical Vulnerability in Apache Log4j</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium">New Ransomware Campaign Targeting Energy Sector</div>
                        <div className="text-xs text-gray-500">Yesterday</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <div className="bg-adani-light-purple px-4 py-2 rounded-md text-adani-purple text-sm font-medium cursor-pointer">
                    Upload Sample
                  </div>
                  <div className="bg-adani-light-blue px-4 py-2 rounded-md text-adani-blue text-sm font-medium cursor-pointer">
                    Search IOCs
                  </div>
                  <div className="bg-adani-light-maroon px-4 py-2 rounded-md text-adani-maroon text-sm font-medium cursor-pointer">
                    View Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
