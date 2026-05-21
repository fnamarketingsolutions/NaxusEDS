import React from 'react';

const workflowSteps = [
  {
    step: "01",
    title: "As-Built / Design Ingestion",
    desc: "We absorb your schematic sketches, point clouds, or baseline PDFs into our local environment.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Parametric Drafting & BIM",
    desc: "Engineers process structural vectors into smart, coordinated components and layers.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Rigid Quality Audit",
    desc: "A strict verification check eliminates spatial clashes and regulatory anomalies.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Production Handover",
    desc: "You receive clean, layered, production-ready vector assets (DWG/RVT) built to scale.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Workflow() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">
            Execution Strategy
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Streamlined Delivery Pipeline
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 group"
            >

              {/* Image Block */}
              <div className="w-full h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-[#A43025] transition-colors duration-300">
                    {item.step}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#A43025]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}