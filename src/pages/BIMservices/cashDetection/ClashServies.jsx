import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Activity, HelpCircle, Construction } from 'lucide-react';



const services = [
  {
    title: 'Hard Clash Detection',
    description: 'Identifying structural components physically intersecting or occupying identical spatial parameters within the coordinated 3D model.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?q=80&w=600&auto=format&fit=crop',
    icon: HardHat
  },
  {
    title: 'Soft Clearance Checking',
    description: 'Ensuring equipment maintains proper buffer clearance parameters for localized insulation, safety footprints, and ongoing accessibility.',
    image: '/api/placeholder/400/250',
    icon: Activity
  },
  {
    title: '4D Time-Based Clashes',
    description: 'Tracking workflow resource overlaps to ensure trade crews and delivery machinery do not occupy identical staging zones at the same time.',
    image: '/api/placeholder/400/250',
    icon: Construction
  },
  {
    title: 'Clearance & Maintenance Space',
    description: 'Auditing spatial allocations required by regulatory guidelines to guarantee technicians can comfortably service valves, dampers, and panels.',
    image: '/api/placeholder/400/250',
    icon: HelpCircle
  }
];

export default function ClashServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Specialized Clash Detection Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Systematic resolution mechanisms targeting geometry overrides before shop drawings get dispatched to construction sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group"
              >
                {/* Upper Image Block */}
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
                {/* Lower Content */}
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
                    View Matrix &rarr;
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