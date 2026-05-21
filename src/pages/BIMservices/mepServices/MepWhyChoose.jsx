import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const differentiators = [
  {
    title: 'Cross-Functional Mastery',
    detail: 'We do not run siloed teams. Mechanical layout designers sit right next to structural electrical detailers to maintain organic system cohesion.'
  },
  {
    title: 'Regulatory & Code Compliance',
    detail: 'Our output guarantees alignment with updated global standards, local civil fire guidelines, and regional green building expectations.'
  },
  {
    title: 'Sustainability Native Architecture',
    detail: 'Every HVAC profile and plumbing layout is evaluated for lifetime carbon overheads, energy efficiency ratings, and structural load minimization.'
  }
];

export default function MepWhyChoose() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-sm font-bold text-[#A43025] uppercase tracking-wider">The Engineering Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Our MEP Specialists?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Modern architectural spaces require mechanical systems that act seamlessly as an ecosystem. We balance extreme performance with cost and long-term asset maintenance considerations.
            </p>
          </div>

          {/* Right Blocks Content */}
          <div className="lg:col-span-7 space-y-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-md flex gap-4 items-start hover:border-[#A43025]/30 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-[#A43025] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}