import React from 'react';
import { ShieldAlert, Cpu, BarChart3, Clock4 } from 'lucide-react';

const steps = [
  {
    icon: ShieldAlert,
    title: 'Zero Clash Construction',
    description: 'We run high-fidelity algorithmic clash detection tests to identify and eliminate system intersections before field crews break ground.'
  },
  {
    icon: Cpu,
    title: 'LOD 400 Detail Accuracy',
    description: 'Models include exact manufacturing data, dimensions, and maintenance clearance paths for precise installation parameters.'
  },
  {
    icon: BarChart3,
    title: 'Precise Quantity Takeoffs',
    description: 'Automatically extract material schedules and structural volumes straight from verified layouts to protect margins.'
  },
  {
    icon: Clock4,
    title: 'Faster Project Delivery',
    description: 'Pre-fabricated multi-trade components are constructed directly from spatial files, shaving weeks off field installation cycles.'
  }
];

export default function MepBimSupport() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How Our MEP BIM Services Support Your Projects
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-lg">
            By shifting coordination conflicts from the physical field to a rich digital data model, we dramatically lower structural risk profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 p-6 rounded-xl shadow-md relative group hover:border-[#A43025]/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#A43025]/5 border border-[#A43025]/10 text-[#A43025] flex items-center justify-center mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}