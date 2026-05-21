import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    step: '01',
    title: 'Model Aggregation',
    description: 'We consolidate disparate files (structural steel, plumbing layouts, architectural plans) into an integrated master environment.'
  },
  {
    step: '02',
    title: 'Algorithmic Matrix Auditing',
    description: 'Running rule-based clearance passes through automated tools to pinpoint cross-trade system interferences.'
  },
  {
    step: '03',
    title: 'Clash Review Coordination',
    description: 'Our engineering specialists review spatial conflicts to eliminate harmless false-positives and log structural issues.'
  },
  {
    step: '04',
    title: 'Resolution & Clearance Sign-Off',
    description: 'Updating architectural routing parameters, distributing optimized models, and issuing crystal-clear shop drawings.'
  }
];

export default function ClashWorkflow() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Coordination Workflow
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            A reliable process engineered to systematically resolve models from initial design inputs through field verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative space-y-4 group"
            >
              {/* Process Track Connector for Desktop */}
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