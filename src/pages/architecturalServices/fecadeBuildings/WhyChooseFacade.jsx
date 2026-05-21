import React from 'react';

const reasons = [
  {
    num: "01",
    title: "Thermal Performance",
    desc: "Advanced thermal break engineering to minimize cold bridging and lower long-term building HVAC expenditures."
  },
  {
    num: "02",
    title: "Acoustic Insulation",
    desc: "Meticulous glass layer and airspace design to damp external city noise frequencies down to targeted decibel levels."
  },
  {
    num: "03",
    title: "Structural Rigidity",
    desc: "Facade systems engineered to easily withstand peak local wind loads, seismic movements, and dead-load stress vectors."
  },
  {
    num: "04",
    title: "Moisture Mitigation",
    desc: "Sophisticated pressure-equalized rainscreen details that prevent water ingress while venting internal condensation."
  },
  {
    num: "05",
    title: "Material Longevity",
    desc: "Strict specification of non-corrosive anchors, gaskets, and finishes to stop premature atmospheric degradation."
  },
  {
    num: "06",
    title: "Regulatory Compliance",
    desc: "Every assembly drawing completely conforms to international structural glazing, fire-safety, and local boundary laws."
  },
  {
    num: "07",
    title: "Value Engineering",
    desc: "Optimizing unitized profile weights and glass glass cuts to lower structural production cost without risking layout integrity."
  },
  {
    num: "08",
    title: "Fabrication Precision",
    desc: "Millimeter-accurate assembly drafting maps directly into CNC manufacturing pipelines for flawless onsite fits."
  }
];

export default function WhyChooseFacade() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">
            Engineering Excellence
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Why Choose NaxusEDS Facade Systems
          </h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* 4x2 Grid Layout Structure */}
        {/* lg:grid-cols-4 guarantees 4 items across. 8 items total break cleanly into 2 horizontal rows. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 border border-slate-300 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm group rounded-xl relative"
            >
              <div>
                {/* Structural Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#A43025] bg-red-50 px-2 py-0.5 rounded border border-[#A43025]/10">
                    SEC-{item.num}
                  </span>
                  <span className="text-xl font-black text-slate-200 group-hover:text-[#A43025] transition-colors duration-300">
                    {item.num}
                  </span>
                </div>

                {/* Title Accent Boundary */}
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight mb-2 pb-2 border-b border-slate-100 min-h-[48px] flex items-center">
                  {item.title}
                </h3>
                
                {/* Core Architectural Narrative */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[72px]">
                  {item.desc}
                </p>
              </div>

              {/* Base Structural Line Marker */}
              <div className="mt-4 pt-1 flex justify-end">
                <div className="w-0 group-hover:w-8 h-[2px] bg-[#A43025] transition-all duration-300" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}