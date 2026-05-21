import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, RefreshCw, Layers } from 'lucide-react';

const supportItems = [
  {
    icon: Database,
    title: 'Rich Embedded Asset Metadata',
    desc: 'Lines turn into smart spatial variables, housing manufacturer parameters, materials info, and maintenance criteria directly.'
  },
  {
    icon: Zap,
    title: 'Immediate Simulation Readiness',
    desc: '3D output allows teams to run immediate energy simulations, structural analyses, and lighting distribution studies.'
  },
  {
    icon: RefreshCw,
    title: 'Flawless Collaborative Audits',
    desc: 'Migrating to standard cloud spaces ensures remote engineering teams can work on design assets at the exact same time.'
  },
  {
    icon: Layers,
    title: 'Clash Resolution Preparation',
    desc: 'Converting to true 3D layout formats prepares files for automated clash matrix scans and collision clearing pathways.'
  }
];

export default function CadToBimSupport() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How CAD to BIM Supports Modern Projects
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-lg">
            Upgrading flat sketches into data-rich infrastructure models to give stakeholders total control over building parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportItems.map((item, index) => {
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