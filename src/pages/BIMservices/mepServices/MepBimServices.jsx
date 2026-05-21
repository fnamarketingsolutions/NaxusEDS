import React from 'react';
import { Wind, Zap, Droplet, Layers } from 'lucide-react';

const services = [
  {
    title: 'Mechanical & HVAC Engineering',
    description: 'Energy-efficient heating, ventilation, and air conditioning systems engineered for perfect indoor air quality and climate control.',
    image: '/api/placeholder/400/250',
    icon: Wind
  },
  {
    title: 'Electrical & Power Systems',
    description: 'Comprehensive electrical layouts, lighting design, power distribution, and backup infrastructure for maximum resilience.',
    image: '/api/placeholder/400/250',
    icon: Zap
  },
  {
    title: 'Plumbing & Public Health',
    description: 'Advanced water distribution systems, sustainable drainage solutions, rainwater harvesting, and waste treatment design.',
    image: '/api/placeholder/400/250',
    icon: Droplet
  },
  {
    title: 'Fire Protection Engineering',
    description: 'Fully integrated, compliant fire alarm, sprinkler networks, and life safety asset engineering to protect buildings and occupants.',
    image: '/api/placeholder/400/250',
    icon: Layers
  }
];

export default function MepServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Core MEP Engineering Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            End-to-end design and engineering solutions built to minimize system clashes and optimize energy performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group">
                {/* Upper Image */}
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
                    Learn more &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}