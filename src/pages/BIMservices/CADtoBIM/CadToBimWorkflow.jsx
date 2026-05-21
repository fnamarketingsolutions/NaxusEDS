import React from 'react';
import { motion } from 'framer-motion';

const tracks = [
  {
    index: '01',
    heading: 'Source Data Assessment',
    summary: 'Evaluating input sheets, legacy CAD lines, and site scan configurations to establish exact dimensional controls.'
  },
  {
    index: '02',
    heading: 'Parametric Base Modeling',
    summary: 'Constructing basic architectural elevations and structural footprints inside an advanced 3D framework.'
  },
  {
    index: '03',
    heading: 'Component Data Integration',
    summary: 'Adding specialized engineering metadata, manufacturer tracking details, and system parameters into the model framework.'
  },
  {
    index: '04',
    heading: 'Model Verification & Handover',
    summary: 'Conducting full visual audits and quality reviews before exporting clean, open-format BIM files to your team.'
  }
];

export default function CadToBimWorkflow() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Conversion Process
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            A reliable blueprint conversion pipeline built to maintain complete geometric accuracy from inputs through delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {tracks.map((track, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative space-y-4 group"
            >
              {/* Horizontal connecting track line */}
              {idx !== tracks.length - 1 && (
                <div className="hidden md:block absolute top-6 left-16 w-full h-[2px] bg-slate-100 group-hover:bg-[#A43025]/20 transition-colors z-0" />
              )}
              
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#A43025] bg-white text-[#A43025] flex items-center justify-center font-bold text-lg group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 shadow-sm">
                {track.index}
              </div>
              
              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#A43025] transition-colors">
                  {track.heading}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {track.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}