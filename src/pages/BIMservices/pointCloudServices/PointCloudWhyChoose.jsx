import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const valueProps = [
  {
    title: 'Extensive Point Filtering Expertise',
    detail: 'We utilize advanced indexing tools to scrub stray noise objects (like machinery or personnel shadows) out of data plots to construct perfect structural models.'
  },
  {
    title: 'Rigorous Verification Matrix',
    detail: 'Every extracted surface undergoes systematic geometric testing against actual control coordinates to keep your models fully consistent.'
  },
  {
    title: 'Multidisciplinary Structural Visibility',
    detail: 'Our modeling engineers understand complex field structures, ensuring that hidden mechanical pipe links trace properly.'
  }
];

export default function PointCloudWhyChoose() {
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
            <span className="text-sm font-bold text-[#A43025] uppercase tracking-wider">Technical Capability</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Our Scan to BIM Engineers?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Processing data clouds requires high precision and engineering experience. We turn unorganized laser arrays into parametric as-built intelligence to secure your structural investments.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            {valueProps.map((item, index) => (
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