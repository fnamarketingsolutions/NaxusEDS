import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Absolute Dimensional Consistency',
    detail: 'We don’t just trace drawings. We re-calculate elevations and verify geometric dimensions to clean up discrepancies found in original 2D plans.'
  },
  {
    title: 'Tailored Information Density (LOD 100 - 400)',
    detail: 'We build files to fit your exact operational requirements, delivering simple design layouts or fully advanced structural construction data models.'
  },
  {
    title: 'Extensive Multi-Discipline Engineering Focus',
    detail: 'Our staff ensures your architectural components integrate cleanly with mechanical layouts, power systems, and structural framing parameters.'
  }
];

export default function CadToBimWhyChoose() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="text-sm font-bold text-[#A43025] uppercase tracking-wider">Engineering Transformation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Our Model Conversion Specialists?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Converting flat data into spatial designs requires rigorous technical oversight. We deliver precise parametric environments that optimize your long-term build efficiency.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            {reasons.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-md flex gap-4 items-start hover:border-[#A43025]/30 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#A43025] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}