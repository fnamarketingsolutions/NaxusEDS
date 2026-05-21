import React from 'react';
import { motion } from 'framer-motion';
import { Network, FileSpreadsheet, Users2, CalendarDays } from 'lucide-react';

const supportingPoints = [
  {
    icon: Network,
    title: 'Single Source of Design Truth',
    desc: 'Unite electrical layouts, structural paths, and architectural models into one file to eliminate communication gaps.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Accurate Pre-construction BOMs',
    desc: 'Extract structured bills of materials directly from coordinated files to lock down purchase parameters early.'
  },
  {
    icon: Users2,
    title: 'Coordinated Onsite Trading Flow',
    desc: 'Minimize spatial field disputes by establishing clear routing priorities for installation sub-contractors.'
  },
  {
    icon: CalendarDays,
    title: 'Minimized Rework Schedules',
    desc: 'Keep build timelines moving by resolving routing and spacing conflicts digitally before field delivery.'
  }
];

export default function BimCoordSupport() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How BIM Coordination Drives Project Success
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-lg">
            Providing full spatial control over complex building spaces to bridge design intentions and real-world construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportingPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-slate-200 p-6 rounded-xl shadow-md relative group hover:border-[#A43025]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#A43025]/5 border border-[#A43025]/10 text-[#A43025] flex items-center justify-center mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}