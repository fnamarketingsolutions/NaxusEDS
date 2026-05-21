import React from 'react';

const feedbackList = [
  {
    quote: "NaxusEDS transformed our architectural sketches into a spatial 3D sequence that helped secure critical city approvals ahead of schedule.",
    client: "Principal Architect",
    company: "Metro Planning Group"
  },
  {
    quote: "The physical light bouncing properties inside their rendering engine accurately predicted real-world lux levels inside our building framework.",
    client: "Structural Lead",
    company: "Apex Engineering Corp"
  },
  {
    quote: "Millimeter precision layout mapping. Their 3D visualization files became the absolute single source of truth for our premium marketing presentation.",
    client: "Managing Director",
    company: "Vanguard Properties"
  }
];

export default function VisualizationTestimonials() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Validation</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Client Endorsements</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Testimonials 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbackList.map((item, index) => (
            <div key={index} className="bg-white p-8 border border-slate-300 rounded-xl shadow-sm flex flex-col justify-between hover:border-slate-400 transition-colors duration-300 group">
              <div>
                <span className="text-4xl font-serif text-[#A43025] block mb-2 opacity-60">“</span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  {item.quote}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col">
                <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.client}</span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{item.company}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}