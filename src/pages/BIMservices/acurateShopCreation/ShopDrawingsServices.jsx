import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Waypoints, Zap, ShieldAlert } from 'lucide-react';
import shopDrawingsService1 from '../../../assets/bimAssets/shop-drawing-service1.webp'
import shopDrawingsService2 from '../../../assets/bimAssets/shop-drawing-service2.webp'
import shopDrawingsService3 from '../../../assets/bimAssets/shop-drawing-service3.png'
import shopDrawingsService4 from '../../../assets/bimAssets/shop-drawing-service4.png'

const blocks = [
  {
    title: 'HVAC Ductwork Shop Drawings',
    description: 'Detailed, dimensioned layouts mapping sheet metal duct dimensions, hanger specifications, air terminal coordinates, and flange metrics.',
    image: shopDrawingsService1,
    icon: Wind
  },
  {
    title: 'Plumbing & Piping Spool Sheets',
    description: 'Isolating segments of pipe assemblies into clean, shop-weldable spool representations detailing exact cut dimensions and joint positions.',
    image: shopDrawingsService2,
    icon: Waypoints
  },
  {
    title: 'Electrical Conduit & Tray Spacings',
    description: 'Providing structural layouts tracking multi-tier cable trays, high-voltage panel alignments, and complex sleeve locations through core walls.',
    image: shopDrawingsService3,
    icon: Zap
  },
  {
    title: 'Fire Sprinkler Network Submittals',
    description: 'Fully code-compliant blueprint sheets detailing sprinkler head coverage, pipe slopes, coupling variants, and specialized hydraulic data.',
    image: shopDrawingsService4,
    icon: ShieldAlert
  }
];

export default function ShopDrawingsServices() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Fabrication Drawing Options
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Field-ready drawing sets formatted to clear site queries and keep installation timelines moving seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, index) => {
            const Icon = block.icon;
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
                    src={block.image} 
                    alt={block.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white shadow-md p-2 rounded-lg text-[#A43025]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#A43025] transition-colors">
                      {block.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                  <button className="mt-5 inline-flex items-center text-sm font-semibold text-[#A43025] hover:text-[#89281e] transition-colors">
                    Explore Sheet Standards &rarr;
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