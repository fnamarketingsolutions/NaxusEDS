import React from 'react';
import { motion } from 'framer-motion';
import { GitMerge, Layers3, Shuffle, FileCheck } from 'lucide-react';

const coordinationServices = [
  {
    title: 'Multi-Trade Consolidation',
    description: 'Merging modeling assets from separate teams into a central platform to identify physical interference patterns across structures.',
    image: '/api/placeholder/400/250',
    icon: GitMerge
  },
  {
    title: 'Interference Resolution Matrices',
    description: 'Systematically managing system adjustments using standardized priority rules, positioning major gravity lines first.',
    image: '/api/placeholder/400/250',
    icon: Shuffle
  },
  {
    title: 'Detailed Subcontract Drawing Generation',
    description: 'Extracting clean, highly-accurate installation blueprints and schedules derived directly from synchronized 3D master files.',
    image: '/api/placeholder/400/250',
    icon: FileCheck
  },
  {
    title: 'Model Validation & Integrity Auditing',
    description: 'Checking files against parameter criteria to ensure exact compliance with international format standards.',
    image: '/api/placeholder/400/250',
    icon: Layers3
  }
];

export default function BimCoordServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Integrated BIM Coordination Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Advanced multi-discipline alignment workflows built to establish absolute alignment between all sub-contracted trades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coordinationServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 w-full bg-slate-50 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white shadow-md p-2 rounded-lg text-[#A43025]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#A43025] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}