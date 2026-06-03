import React from 'react';

export default function Models() {
  // All configuration, imagery, and structural JSX contained inside a single component file and a single return statement
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Execution Framework
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Strategic Engagement Models
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            Flexible operational structures tailored by NexusEDS to match your civil engineering project scale, risk profile, and resource requirements.
          </p>
        </div>

        {/* Engagement Models Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Model 1: Design-Bid-Build (DBB) */}
          <div className="group bg-white border border-neutral-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between">
            <div>
              {/* Top Image Block */}
              <div className="w-full h-48 bg-neutral-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" 
                  alt="Design-Bid-Build Blueprints" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
              </div>
              
              {/* Content Block */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                  Design-Bid-Build
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  A traditional sequential delivery model. NexusEDS delivers fully comprehensive, accurate engineering designs and structural calculations first, allowing you to secure competitive, fixed-price contractor bidding with zero ambiguity.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Max Price Control</span>
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Linear Flow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Model 2: Design-Build (DB) */}
          <div className="group bg-white border border-neutral-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between">
            <div>
              {/* Top Image Block */}
              <div className="w-full h-48 bg-neutral-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80" 
                  alt="Design-Build Construction Site" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
               
              </div>
              
              {/* Content Block */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                  Design-Build (DB)
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Single-point accountability workflow. At NexusEDS, we unify architectural structural engineering plans directly with construction execution under one single contract, overlapping timelines to drastically minimize delivery delays.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Fast-Track Delivery</span>
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Unified Risk</span>
                </div>
              </div>
            </div>
            

          </div>

          {/* Model 3: Construction Management at Risk (CMAR) */}
          <div className="group bg-white border border-neutral-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between">
            <div>
              {/* Top Image Block */}
              <div className="w-full h-48 bg-neutral-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80" 
                  alt="CMAR Engineering Collaboration" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 
              </div>
              
              {/* Content Block */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                  CM at Risk (CMAR)
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Collaborative guaranteed pricing. NexusEDS joins forces as your technical consultant during the structural design phase itself, providing real-time cost feedback before guaranteeing a strict Maximum Price (GMP) to protect budgets.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Guaranteed Max Price</span>
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Open-Book</span>
                </div>
              </div>
            </div>
           
          </div>

          {/* Model 4: Engineering, Procurement & Construction (EPC) */}
          <div className="group bg-white border border-neutral-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between">
            <div>
              {/* Top Image Block */}
              <div className="w-full h-48 bg-neutral-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                  alt="EPC Infrastructure Project" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 
              </div>
              
              {/* Content Block */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                  EPC / Turnkey
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Complete end-to-end master ownership. Best suited for heavy infrastructure, NexusEDS completely oversees full design engineering, raw material procurement, and complex site construction to deliver a fully operational facility.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Turnkey Ownership</span>
                  <span className="text-[11px] bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Complex Infra</span>
                </div>
              </div>
            </div>
          
          </div>

        </div>

      </div>
    </section>
  );
}