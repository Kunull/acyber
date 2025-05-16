'use client';

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "Real-Time Threat Awareness",
      description: "Stay ahead of evolving threats with continuously updated, high-fidelity intelligence tailored to your organization's risk profile.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Operationalised Intelligence at Scale",
      description: "Operationalise intel into your security and IT tools through pre-built integrations and automated workflows.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Intelligence You Can Trust",
      description: "Access AI-analyzed, expert-validated intelligence—delivered with the context needed to drive faster and smarter decisions.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Seamless Integration with Existing Tools",
      description: "Effortlessly connect to your SIEM, EDR, firewalls, and ticketing systems with pre-built integrations—no rip-and-replace needed.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "One Portal. Everything You Need.",
      description: "Eliminate the need for separate investments in enterprise-grade TIP, SOAR, credential monitoring tools, or premium threat feeds.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why This Matters For Your Organization</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Adani's Threat Intelligence Services can transform your security posture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="mb-6 text-adani-blue">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
