import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, ShieldCheck, Milestone } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Zero-Guesswork Site Layouts',
    desc: 'Every isometric orientation and dimensions breakdown maps structural configurations precisely to optimize field productivity.'
  },
  {
    icon: Cpu,
    title: 'Native Offsite Pre-Fabrication',
    desc: 'Enables components to be cut and welded securely in controlled shop conditions, dropping field adjustments to near zero.'
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Approved Regulatory Checks',
    desc: 'Drawings incorporate local safety guidelines and equipment buffer parameters directly to streamline building sign-offs.'
  },
  {
    icon: Milestone,
    title: 'Minimized Procurement Errors',
    desc: 'Extract automated bills of materials matching drawing counts perfectly to eliminate over-ordering or missing stock links.'
  }
];

export default function ShopDrawingsSupport() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How Our Shop Drawings Accelerate Construction
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-lg">
            Translating digital model variables into clear, high-density blueprints to bridge the gap between design theory and rapid field installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-slate-200 p-6 rounded-xl shadow-md relative group hover:border-[#A43025]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#A43025]/5 border border-[#A43025]/10 text-[#A43025] flex items-center justify-center mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}