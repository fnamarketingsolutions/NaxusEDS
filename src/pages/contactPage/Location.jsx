import React from 'react';
import SectionReveal from '../../components/SectionReveal';

// ==========================================================================
// BLOCK 1 SUB-COMPONENT: USA BLOCK (Text Left, Map Right using Flexbox)
// ==========================================================================
const UsaBlock = () => {
  const usaEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.845019941196!2d-96.7323864!3d32.6370163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9de3d9ecd99d%3A0x7862058a2d561d28!2s9559%20Lancaster%20Hutchins%20Rd%2C%20Dallas%2C%20TX%2075241%2C%20USA!5e0!3m2!1sen!2s!4v1716300000000!5m2!1sen!2s";

  return (
    <SectionReveal as="div" className="w-full bg-gray-50 border-y border-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Content Block (Takes up 45% width on desktop) */}
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A43025] block mb-2">
            Global Headquarters
          </span>
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            United States Division
          </h3>
          <div className="text-gray-800 font-medium text-lg leading-relaxed mb-6">
            <p>9559 Lancaster Hutchins Rd,</p>
            <p>Dallas, TX 75241</p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
            Our main corporate control facility houses our light gauge structural engineers, estimation departments, and core cold-form profile mill lines.
          </p>
        </div>

        {/* Right Side: Map Block (Takes up 55% width on desktop) */}
        <div className="w-full lg:w-[55%]">
          <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-2">
            <iframe
              title="USA Office Location Map"
              src={usaEmbedUrl}
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </SectionReveal>
  );
};

// ==========================================================================
// BLOCK 2 SUB-COMPONENT: INDIA BLOCK (Text Right, Map Left using flex-row-reverse)
// ==========================================================================
const IndiaBlock = () => {
  const indiaEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.152431604121!2d78.4410976!3d17.499026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb903fe17af155%3A0xa777a3931a875662!2sHMT%20Township%2C%20Hyderabad%2C%20Telangana%20500054%2C%20India!5e0!3m2!1sen!2s!4v1716300000000!5m2!1sen!2s";

  return (
    <SectionReveal as="div" className="w-full bg-white py-16 lg:py-24">
      {/* flex-row-reverse flips layout sequence natively on large viewports */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
        
        {/* Right Side on Desktop: Content Block (Takes up 45% width) */}
        <div className="w-full lg:w-[45%] text-center lg:text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A43025] block mb-2">
            Operations Center
          </span>
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            India Division
          </h3>
          <div className="text-gray-800 font-medium text-lg leading-relaxed mb-6">
            <p>D.No 49-404/2/C/401,</p>
            <p>Hmt Township, Hyderabad,</p>
            <p>Telangana, India - 500054</p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto lg:ml-auto lg:mr-0">
            Our technology and engineering office manages architectural detailed layout modeling, 3D BIM coordination, and processing international component drafting workflows.
          </p>
        </div>

        {/* Left Side on Desktop: Map Block (Takes up 55% width) */}
        <div className="w-full lg:w-[55%]">
          <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50 p-2">
            <iframe
              title="India Office Location Map"
              src={indiaEmbedUrl}
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </SectionReveal>
  );
};



export default function LocationsSection() {
  return (
    <SectionReveal className="bg-white py-12">
      {/* Section Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl relative inline-block pb-4">
          Our Global Locations
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#A43025]"></span>
        </h2>
      </div>

      {/* Rendering the independent Flexbox layout blocks */}
      <div className="flex flex-col gap-4">
        <UsaBlock />
        <IndiaBlock />
      </div>
    </SectionReveal>
  );
}