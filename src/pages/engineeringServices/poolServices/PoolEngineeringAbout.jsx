import React from 'react';

const PoolEngineeringAbout = () => {
  // All descriptive text blocks, structural alignment layers, and responsive typography within a single component and return statement
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans text-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
          Who We Are
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
          About Our Pool Engineering Services
        </h2>
        <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
        
        {/* Descriptive Corporate Narrative Paragraph */}
        <p className="mt-8 text-neutral-600 text-base md:text-lg leading-relaxed text-justify md:text-center">
          At <span className="font-bold text-neutral-950">NexusEDS</span>, our dedicated pool engineering sector combines advanced hydraulic dynamics with master structural calculation frameworks to deliver pristine aquatic facilities. We specialize in designing robust engineering blueprints that cover highly technical high-load water filtration loops, chemical balance automation, sub-surface plumbing architectures, and reinforced structural concrete shell layouts. By mitigating mechanical friction and calculating precise water turnover velocities, <span className="font-bold text-neutral-950">NexusEDS</span> guarantees long-term leak-proof stability, energy optimization, and absolute safety compliance for both high-end commercial resorts and custom residential aquatic infrastructure.
        </p>

        {/* Highlight Core Values Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-100">
          <div className="p-4">
            <div className="text-[#A43025] font-bold text-lg mb-1">Hydraulic Precision</div>
            <p className="text-xs text-neutral-500">Perfected flow metrics</p>
          </div>
          <div className="p-4">
            <div className="text-[#A43025] font-bold text-lg mb-1">Structural Integrity</div>
            <p className="text-xs text-neutral-500">Zero structural cracks</p>
          </div>
          <div className="p-4">
            <div className="text-[#A43025] font-bold text-lg mb-1">Eco Filtration</div>
            <p className="text-xs text-neutral-500">Minimal chemical usage</p>
          </div>
          <div className="p-4">
            <div className="text-[#A43025] font-bold text-lg mb-1">Full Compliance</div>
            <p className="text-xs text-neutral-500">IS & NSF safety codes</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PoolEngineeringAbout;