import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, ShieldCheck, FileSpreadsheet } from 'lucide-react';

const particulars = [
  {
    icon: Sliders,
    title: 'Millimeter-Level Accuracy Checks',
    desc: 'We map objects to within localized millimeter tolerances, minimizing deviations between data sets and structural design elements.'
  },
  {
    icon: Cpu,
    title: 'Deformation Analysis Logging',
    desc: 'Our modeling engine captures structural variations such as wall leans, structural beam sags, and foundational settling variations.'
  },
  {
    icon: ShieldCheck,
    title: 'Clash Resolution Verification',
    desc: 'We cross-verify newly coordinated engineering layouts directly against actual as-built files before running renovations.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Complete Lifecycle Data Linking',
    desc: 'Every extracted structural element includes embedded parameter fields for tracking serial keys and maintenance operations.'
  }
];

export default function PointCloudParticular() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Advanced Features of Our Scan to BIM Pipeline
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-lg">
            How we translate massive physical site capture files into organized, searchable asset intelligence databases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {particulars.map((item, index) => {
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