import React from 'react';

const models = [
  {
    name: "Dedicated BIM Studio",
    subtitle: "Retainer-Based Scale",
    points: [
      "Exclusive team of BIM modelers allocated to your company",
      "Seamless scaling suited for continuous multi-phase project pipelines",
      "Direct integration into your internal version tracking protocols"
    ]
  },
  {
    name: "Fixed-Price Milestones",
    subtitle: "Project-Based Parameters",
    points: [
      "Rigid scope definitions based entirely on specific structural drawings",
      "Pre-determined cost bounds locked directly to phase completion gates",
      "Ideal for straightforward architectural modeling deliverables"
    ]
  },
  {
    name: "Hourly Resource Taper",
    subtitle: "On-Demand Agility",
    points: [
      "Flexible hourly allocation based on immediate system review needs",
      "Excellent for quick clash-resolution tasks and emergency audits",
      "Transparent timesheet tracking matching project sprints perfectly"
    ]
  }
];

export default function BIMEngagementModels() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Collaboration Matrix</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">BIM Engagement Models</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl shadow-sm flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{model.name}</h3>
                  <p className="text-xs font-mono font-bold text-[#A43025] uppercase tracking-widest mt-1">{model.subtitle}</p>
                </div>
                <ul className="space-y-3">
                  {model.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <span className="text-[#A43025] font-bold mt-0.5">▪</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <button className="w-full py-3 bg-slate-50 group-hover:bg-[#A43025] text-slate-800 group-hover:text-white font-bold text-xs uppercase tracking-wider rounded-md border border-slate-200 group-hover:border-[#A43025] transition-all duration-300">
                  Select This Model
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}