import React from 'react';
import { motion } from 'framer-motion';
import { Link, Cpu, BarChart3, Maximize } from 'lucide-react';

const supportCore = [
  {
    icon: Link,
    title: 'Embedded Connection Ports',
    desc: 'Duct and piping families feature physical engineering link coordinates that snap cleanly onto system tracks while tracking flow.'
  },
  {
    icon: Cpu,
    title: 'Extremely Low File Overheads',
    desc: 'Models are explicitly coded to prevent rendering drag, allowing hundreds of custom instances to run without freezing systems.'
  },
  {
    icon: BarChart3,
    title: 'Omni-directional Schedule Data',
    desc: 'Component parameter attributes sync directly into spatial schedules, populating product codes and maintenance loops instantly.'
  },
  {
    icon: Maximize,
    title: 'Geometric Layout Visibility',
    desc: 'Families include customizable coarse, medium, and fine 2D representation tags tailored for varied drawing output formats.'
  }
];

export default function RevitFamilySupport() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How Our Components Benefit Your Models
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-lg">
            Engineering smart digital components that combine precise geometry with robust underlying equipment metadata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportCore.map((item, index) => {
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