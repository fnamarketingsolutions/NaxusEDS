import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Downtown Heritage Theater Renovation',
    type: 'Scan to BIM Architectural Preservation',
    specs: 'LOD 350 Model Reconstruction',
    image: '/api/placeholder/500/350'
  },
  {
    title: 'Global Logistics Center Extension',
    type: 'Structural Frame Extraction & Audit',
    specs: '1.2M Sq Ft Coordinated Space',
    image: '/api/placeholder/500/350'
  },
  {
    title: 'Metro Water Treatment Plant Retrofit',
    type: 'High-Density Mechanical MEP Mapping',
    specs: 'Clash Resolution Optimization',
    image: '/api/placeholder/500/350'
  }
];

export default function PointCloudProjects() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-bold text-[#A43025] uppercase tracking-wider">Proven Deliveries</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Featured Scan to BIM Projects
            </h2>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center justify-center bg-[#A43025] hover:bg-[#89281e] text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm shadow-sm">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold text-[#A43025] bg-white px-2 py-0.5 rounded w-fit uppercase tracking-wider mb-2">
                  {project.specs}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {project.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}