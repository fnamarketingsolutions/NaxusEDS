import React from 'react';
import { motion } from 'framer-motion';
import { Fan, ToggleLeft, Activity, Layers } from 'lucide-react';
import revitFamilyService1 from '../../../assets/bimAssets/revit-family-service1.jpg'
import revitFamilyService2 from '../../../assets/bimAssets/revit-family-service2.webp'
import revitFamilyService3 from '../../../assets/bimAssets/revit-family-service3.webp'
import revitFamilyService4 from '../../../assets/bimAssets/revit-family-service4.jpg'

const optionsList = [
  {
    title: 'MEP Component Modeling',
    description: 'Developing highly complex smart assets for HVAC units, electrical distribution panels, plumbing valves, and fire safety systems.',
    image: revitFamilyService1,
    icon: Fan
  },
  {
    title: 'Parametric Variation Systems',
    description: 'Writing custom geometric rule constraints to allow single files to alter length, width, voltage, and capacities instantly.',
    image: revitFamilyService2,
    icon: ToggleLeft
  },
  {
    title: 'Architectural & Fixture Assets',
    description: 'Constructing dimensionally precise models for complex windows, custom storage units, retail furniture, and sanitization fixtures.',
    image: revitFamilyService3,
    icon: Layers
  },
  {
    title: 'Structural Steel Elements',
    description: 'Drafting data-dense column frames, foundation pads, truss connections, and embedded anchors matching calculation parameters.',
    image: revitFamilyService4,
    icon: Activity
  }
];

export default function RevitFamilyServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Revit Family Creation Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Intelligent components custom-tailored to balance visual accuracy with minimal computational system load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {optionsList.map((service, index) => {
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
                    View Families &rarr;
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