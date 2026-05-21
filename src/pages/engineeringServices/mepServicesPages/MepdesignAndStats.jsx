import React, { useState, useEffect } from 'react';

export default function MepDesignAndStats() {
  // --- Pure Counter Hook logic integrated into the single return framework using inline components ---
  // CountUp logic for 125
  const [countExperience, setCountExperience] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 125;
    const duration = 2000;
    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCountExperience(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  // CountUp logic for 175,000
  const [countProjects, setCountProjects] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 175000;
    const duration = 2000;
    const steps = 60;
    const stepValue = Math.floor(end / steps);
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += stepValue;
      if (currentStep >= steps) {
        setCountProjects(end);
        clearInterval(timer);
      } else {
        setCountProjects(start);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  // CountUp logic for 22
  const [countStates, setCountStates] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 22;
    const duration = 2000;
    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCountStates(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      
      {/* SECTION 1: MEP Engineering & Services Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              MEP Engineering for Tomorrow's Buildings
            </h2>
            <div className="w-16 h-1 bg-[#A43025] rounded-full"></div>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed pt-2">
              At <span className="font-bold text-neutral-900">NaxusEDS</span>, we're at the forefront of integrating Mechanical, Electrical, and Plumbing (MEP) engineering services into the fabric of modern design and construction. Our mission is to bring your building into the future through innovative design, sustainable practices, and a deep understanding of the construction industry.
            </p>
          </div>

          {/* Right Column: List of Services */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#A43025] border-b border-neutral-200 pb-3 mb-5">
              MEP Design Services
            </h3>
            <ul className="space-y-4">
              {[
                "Commercial & Residential Plans",
                "New Build or Renovation (MEP)",
                "Mechanical Plans",
                "Electrical Plans",
                "Plumbing Plans",
                "Energy Calculations",
                "Photometric Plans, Site Lighting"
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3 group text-neutral-700 hover:text-neutral-950 transition-colors duration-200">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A43025] shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="text-sm md:text-base font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <hr className="border-neutral-200" />
      </div>

      {/* SECTION 2: Why Choose Us & Key Statistics */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Header Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Why Choose NaxusEDS for Your MEP Design Services?
          </h2>
        </div>

        {/* 3-Column Stats Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center items-start">
          
          {/* Stat Block 1: Experience */}
          <div className="flex flex-col items-center px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Top in the Industry
            </span>
            <div className="text-5xl lg:text-6xl font-black text-[#A43025] tracking-tight mb-2 min-w-[120px]">
              {countExperience}
            </div>
            <h4 className="text-base font-bold text-neutral-900 mb-4 min-h-[24px]">
              Over 125 Years of Combined
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
              With over 125 years of combined experience in the realm of MEP and Structural Engineering, we've seen it all. Our seasoned team has honed their skills on a myriad of projects, ensuring your project gets fast, accurate, and optimized execution structures.
            </p>
          </div>

          {/* Stat Block 2: Projects */}
          <div className="flex flex-col items-center px-2 border-y md:border-y-0 md:border-x border-neutral-200 py-10 md:py-0">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Fast. Affordable. Reliable.
            </span>
            <div className="text-5xl lg:text-6xl font-black text-[#A43025] tracking-tight mb-2 min-w-[200px]">
              {countProjects.toLocaleString()}
            </div>
            <h4 className="text-base font-bold text-neutral-900 mb-4 min-h-[24px]">
              Over 185,000 Projects Completed
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
              With more than 185,000 projects completed nationwide, we bring unmatched expertise to every structural and engineering deployment. From residential homes and commercial restaurants to institutional systems of every size and beyond, our team has proven delivery records.
            </p>
          </div>

          {/* Stat Block 3: Coverage */}
          <div className="flex flex-col items-center px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Commitment to Excellence
            </span>
            <div className="text-5xl lg:text-6xl font-black text-[#A43025] tracking-tight mb-2 min-w-[80px]">
              {countStates}
            </div>
            <h4 className="text-base font-bold text-neutral-900 mb-4 min-h-[24px]">
              States and Growing
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
              Our growth as one of the fastest-growing Engineering Firms in the country is a testament to our commitment to setting and surpassing industry standards. We are licensed in 22 states and counting. Every single project we manage receives comprehensive master compliance assurance.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}