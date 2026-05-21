import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const technicalDifferentiators = [
  {
    title: 'Extensive Multi-Discipline Background',
    info: 'Our staff has extensive hands-on experience handling complex engineering parameters, bringing invaluable field insights to digital layouts.'
  },
  {
    title: 'Strict Quality Validation Workflows',
    info: 'We test and re-verify internal data links multiple times to prevent tracking mistakes before delivery.'
  },
  {
    title: 'Scalable Execution Frameworks',
    info: 'Our advanced coordination platforms can comfortably handle massive projects, tracking complex details across high-rise installations.'
  }
];

export default function BimCoordWhyChoose() {
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
            <span className="text-sm font-bold text-[#A43025] uppercase tracking-wider">Operational Precision</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Our BIM Coordination Experts?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Achieving flawless layout alignment requires strong process control. We bring structural logic and field visibility together to safeguard project investments.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            {technicalDifferentiators.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-md flex gap-4 items-start hover:border-[#A43025]/30 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#A43025] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}