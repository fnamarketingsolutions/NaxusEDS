import React from 'react';
import {
  ShieldCheck,
  Ruler,
  Cpu,
  Layers3
} from 'lucide-react';

const coreDifferentiators = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Global Engineering Standards",
    desc: "Every blueprint and CAD file strictly maps directly to ASME, AIA, or customized local municipal regulatory frameworks."
  },
  {
    icon: <Ruler size={24} />,
    title: "Millimeter Accuracy Protocols",
    desc: "Our quality assurance team cross-checks model vectors using multi-tier coordinate confirmation algorithms."
  },
  {
    icon: <Cpu size={24} />,
    title: "Advanced BIM Software Stack",
    desc: "Leveraging the most up-to-date instances of Revit, AutoCAD, and Navisworks for high-fidelity parametric intelligence."
  },
  {
    icon: <Layers3 size={24} />,
    title: "Rapid Project Scalability",
    desc: "Easily access flexible drafting pipelines built to ingest multi-million dollar structural projects fluidly."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">
            The NexusEDS Value
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Forward-Thinking Developers Rely on NexusEDS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreDifferentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-lg"
            >

              {/* Left Side Icon + Content */}
              <div className="flex items-start gap-5">

                {/* Icon Block */}
                <div className="min-w-[56px] h-14 w-14 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] border border-[#A43025]/20 shadow-sm">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}