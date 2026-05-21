import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Building2, Eye, Cpu } from 'lucide-react';

const conversionServices = [
  {
    title: '2D Draft to 3D BIM Modeling',
    description: 'Converting standard DWG and DXF draft sheets directly into fully realized, data-rich architectural and structural 3D environments.',
    image: '/api/placeholder/400/250',
    icon: Layout
  },
  {
    title: 'Paper & PDF to BIM Migration',
    description: 'Transforming legacy scanned physical prints and blueprint books into fully flexible, parametric modeling configurations.',
    image: '/api/placeholder/400/250',
    icon: Building2
  },
  {
    title: 'Point Cloud to BIM (Scan to BIM)',
    description: 'Processing high-resolution laser site scans into accurate, verified as-built models for restoration and expansion planning.',
    image: '/api/placeholder/400/250',
    icon: Eye
  },
  {
    title: 'Parametric Family Creation',
    description: 'Developing intelligent, multi-size custom components and equipment assets complete with exact manufacturing documentation.',
    image: '/api/placeholder/400/250',
    icon: Cpu
  }
];

export default function CadToBimServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            CAD to BIM Conversion Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Upgrading unstructured drawing lines into complete spatial asset models built for long-term project lifecycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conversionServices.map((service, index) => {
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
                    View Specifications &rarr;
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