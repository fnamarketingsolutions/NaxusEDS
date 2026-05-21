import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    step: '01',
    title: 'Clash-Free Verification Pass',
    description: 'Re-verifying model spatial parameters to ensure all components achieve complete structural synchronization before extracting plans.'
  },
  {
    step: '02',
    title: 'Sheet Layout Scaling',
    description: 'Setting section alignments, isolating individual trade tracking modules, and adjusting elevation grid configurations.'
  },
  {
    step: '03',
    title: 'Annotation & Metric Overlay',
    description: 'Injecting dimensions, equipment labels, elevation pointers, sleeve coordinates, and bill of materials references.'
  },
  {
    step: '04',
    title: 'Final Document Quality Audit',
    description: 'Cross-checking sheets against regional submittal regulations and site specifications to ensure flawless contractor delivery.'
  }
];

export default function ShopDrawingsWorkflow() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Document Extraction Workflow
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            A reliable blueprint development line engineered to extract perfect, coordinate-accurate submittals straight from data files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative space-y-4 group"
            >
              {/* Process line for horizontal layout structures */}
              {index !== phases.length - 1 && (
                <div className="hidden md:block absolute top-6 left-16 w-full h-[2px] bg-slate-100 group-hover:bg-[#A43025]/20 transition-colors z-0" />
              )}
              
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#A43025] bg-white text-[#A43025] flex items-center justify-center font-bold text-lg group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 shadow-sm">
                {phase.step}
              </div>
              
              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#A43025] transition-colors">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}