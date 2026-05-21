import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Layers, Pipeline, EyeSelector } from 'lucide-react';

const serviceBlocks = [
  {
    title: 'As-Built Architectural Modeling',
    description: 'Transforming dense point spatial points into fully localized architectural floor layouts, detailed wall structures, assemblies, and complex ceiling elements.',
    image: '/api/placeholder/400/250',
    icon: Building2
  },
  {
    title: 'Structural Scan Conversion',
    description: 'Extracting and rendering actual load-bearing steel beam layouts, foundational pillars, concrete elements, and columns down to exact tolerances.',
    image: '/api/placeholder/400/250',
    icon: Layers
  },
  {
    title: 'As-Built MEP Layout Extraction',
    description: 'Mapping out complex existing mechanical duct routing runs, electrical cable channels, complex plumbing, and industrial pipe layouts.',
    image: '/api/placeholder/400/250',
    icon: Pipeline
  },
  {
    title: 'Historical Asset Preservation modeling',
    description: 'Generating highly intricate, geometric models of historical monuments and aging building facades for structural safety and conservation.',
    image: '/api/placeholder/400/250',
    icon: EyeSelector
  }
];

export default function PointCloudServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Point Cloud to BIM Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Converting millions of unstructured site measurements into synchronized, interactive architectural variables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceBlocks.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
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
                  <button className="mt-5 inline-flex items-center text-sm font-semibold text-[#A43025] hover:text-[#89281e] transition-colors">
                    Explore Details &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}