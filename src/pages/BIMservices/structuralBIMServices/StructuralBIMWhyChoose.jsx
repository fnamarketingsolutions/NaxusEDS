import React from 'react';

const blocks = [
  { code: "S-01", title: "Deflection Compliance", text: "We anchor models cleanly into calculations, ensuring steel joists and bracing parameters follow structural load profiles perfectly." },
  { code: "S-02", title: "Fabrication Integration", text: "Direct native pipeline file delivery formats translate flawlessly with factory computer-aided manufacturing machines." },
  { code: "S-03", title: "Clash Eradication", text: "Running aggressive pre-checks isolates alignment faults between rebar paths and structural steel plates early." },
  { code: "S-04", title: "As-Built Coordinate Mapping", text: "Precision updating tracks continuous modifications, providing field crews with completely certified digital layout models." }
];

export default function StructuralBIMWhyChoose() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Strategic Leverage</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Why Choose Our Structural Competency</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((item, idx) => (
            <div key={idx} className="bg-white p-6 border border-slate-300 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm rounded-xl group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#A43025] bg-red-50 px-2 py-0.5 rounded border border-[#A43025]/10">
                    {item.code}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-[#A43025] transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight min-h-[44px] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.text}
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