import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import MepBimServices from './MepBimServices';
import MepBimSupport from './MepBimSupport';
import MepWhyChoose from './MepWhyChoose';
import MepProjects from './MepProjects';
import MepFaq from './MepFaq';

const MepBimHero = () =>
     {
  return (
  <>
    <section className="relative bg-white text-slate-900 overflow-hidden py-16 lg:py-28 border-b border-slate-100">
      {/* Background subtle geometric accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#A43025]/5 border border-[#A43025]/20 text-[#A43025] px-3 py-1 rounded-full text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Precision MEP Engineering & BIM Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              High-Performance Solutions for <span className="text-[#A43025]">Complex Buildings</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From conceptual design to clash-free BIM coordination, we deliver sustainable Mechanical, Electrical, and Plumbing engineering tailored for modern infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center justify-center gap-2 bg-[#A43025] hover:bg-[#89281e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-[#A43025]/10 group">
                Discuss Your Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            <div className="absolute -inset-1 rounded-2xl bg-[#A43025]/10 opacity-70 blur-lg" />
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/450" 
                alt="MEP BIM Model Engineering" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <MepBimServices/>
    <MepBimSupport/>
    <MepWhyChoose/>
    <MepProjects/>
    <MepFaq/>
  </>
  );
}
export default MepBimHero;