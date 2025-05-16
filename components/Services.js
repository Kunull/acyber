'use client';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Cyber Threat Intelligence Feeds",
      description: "Context-rich, high-fidelity threat intelligence containing Indicators of Compromise (IOCs), malware hashes, and TTPs—tailored to your sector and risk profile.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Threat Advisories",
      description: "AI-curated and analyst-reviewed early warning threat advisories delivering strategic and operational intelligence on malware, vulnerabilities, threat actors, and incidents.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Compromised Credential Monitoring",
      description: "Continuous monitoring for exposed credentials related to your organization's domains—enabling early detection and proactive credential resets.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Threat Intel Operationalisation",
      description: "Operationalise threat intelligence through response playbooks and seamless integrations with your existing security and IT tools—enabling automated mitigation.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "WhatsApp Intel Actioning",
      description: "Simply forward threat intel advisories received via WhatsApp to your dedicated portal mailbox for automatic parsing, enrichment, and actioning.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Malware Sandbox as a Service",
      description: "Upload suspicious files or URLs via the portal to instantly receive dynamic behavioral analysis, AI-driven threat classification, and associated IOCs.",
      icon: (
        <svg className="w-12 h-12 text-adani-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Threat Intelligence Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivered Via Adani Collaborate Portal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="feature-card group">
              <div className="mb-6 text-adani-blue group-hover:text-adani-purple transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-adani-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
