import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowUpRight } from 'lucide-react';
import AboutFabrication from './AboutFabrication';
import MaterialLogisticsService from './MaterialLogisticsService';

const categories = [
  {
    title: "Rebar",
    items: ["A-615 black rebar", "A-706 low-alloy rebar", "Epoxy-coated rebar", "Galvanized rebar", "Stock paving rebar", "Threaded rebar"]
  },
  {
    title: "Smooth Bar",
    items: ["Smooth round bar", "Flat bar"]
  },
  {
    title: "Wire Mesh",
    items: ["Flat welded wire fabric", "Rolled welded wire fabric"]
  },
  {
    title: "Concrete Accessories",
    items: ["Plastic grade chairs", "Wall high chairs", "Metal grade chairs with plates", "Beam & slab bolsters", "Standees", "Formsavers", "Sand plates", "Polyethylene", "Bar couplers", "Tie wire", "Bar ties"]
  }
];

export default function RebarFabricationHero() {
  return (
   <>
    <section className="relative bg-white text-slate-900 overflow-hidden py-16 lg:py-24 border-b border-slate-100">
      {/* Background industrial detailing matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side Content & Lists */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Our Construction <span className="text-[#A43025]">Products</span>
              </h1>
              <div className="h-1 w-16 bg-[#A43025] rounded-full" />
              <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                NaxusEDS delivers premium, high-performance reinforced concrete and steel reinforcement packages engineered for foundational stability across residential, infrastructure, and heavy commercial environments.
              </p>
            </div>

            {/* Structured Product Lists Mapping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {categories.map((cat, idx) => (
                <div key={idx} className="space-y-3 bg-slate-50/50 p-5 rounded-xl border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-3 bg-[#A43025] rounded-full" />
                    {cat.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-[#A43025] font-bold mt-0.5">&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="inline-flex items-center justify-center gap-2 bg-[#A43025] hover:bg-[#89281e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-[#A43025]/10 group">
                Request Material Takeoffs
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Side Image Grid Stack */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 auto-rows-max"
          >
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md col-span-2 aspect-[16/9]">
              <img src="/api/placeholder/600/350" alt="Heavy steel rebar inventory supply pile" className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md aspect-square">
              <img src="/api/placeholder/300/300" alt="Epoxy coated paving rebar close up layout" className="w-full h-full object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md aspect-square translate-y-4">
              <img src="/api/placeholder/300/300" alt="Welded structural steel wire fabric mesh mesh sheets" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <AboutFabrication/>
    <MaterialLogisticsService/>
   </>
  );
}