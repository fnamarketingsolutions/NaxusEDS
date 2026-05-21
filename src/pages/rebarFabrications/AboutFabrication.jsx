import React from 'react';
import { motion } from 'framer-motion';

const narrativeSections = [
  {
    tag: "Industrial Excellence",
    title: "Precision Rebar Fabrication Processes",
    text: "Our advanced production spaces reshape raw metal stock into specialized configuration forms matching engineering blueprints precisely. By leveraging computerized structural benders and precise automatic shears, we maintain absolute configuration matching down to the millimeter.",
    image: "/api/placeholder/550/380",
    isReverse: false
  },
  {
    tag: "Custom Adaptation",
    title: "Tailored Component Assemblies & Coatings",
    text: "From heavy industrial cages to targeted spacing accessories, we supply fully integrated reinforcement details directly to site locations. Our protective epoxy-coatings and galvanization tracks guard reinforcing structures against corrosion, locking down long-term lifecycle metrics.",
    image: "/api/placeholder/550/380",
    isReverse: true
  }
];

export default function AboutFabrication() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About Our Fabrication Quality
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            How we translate baseline material profiles into robust construction-ready reinforcement structures.
          </p>
        </div>

        <div className="space-y-24">
          {narrativeSections.map((section, idx) => (
            <div 
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
            >
              {/* Image Column wrapper responding to layout configuration triggers */}
              <motion.div 
                initial={{ opacity: 0, x: section.isReverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className={`lg:col-span-6 relative ${section.isReverse ? 'lg:order-2' : ''}`}
              >
                <div className="absolute -inset-1 rounded-2xl bg-[#A43025]/5 blur-lg opacity-40" />
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Text Blocks details panel */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`lg:col-span-6 space-y-4 text-center lg:text-left ${section.isReverse ? 'lg:order-1' : ''}`}
              >
                <span className="text-xs font-bold text-[#A43025] tracking-widest uppercase bg-[#A43025]/5 px-2.5 py-1 rounded">
                  {section.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
                  {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {section.text}
                </p>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}