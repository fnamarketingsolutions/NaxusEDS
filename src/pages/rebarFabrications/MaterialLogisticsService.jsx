import React from 'react';
import { motion } from 'framer-motion';
import { Truck, PackageCheck, ShieldAlert, Award } from 'lucide-react';

const options = [
  {
    title: "Jobsite JIT Material Delivery",
    desc: "We coordinate phased freight shipments directly to your layouts, tracking drop times perfectly to match site storage limits.",
    icon: Truck
  },
  {
    title: "Bundled Multi-Trade Kitting",
    desc: "Rebar components ship pre-sorted and clearly tagged to match your specific layout codes, accelerating installation speeds.",
    icon: PackageCheck
  },
  {
    title: "Certified Mill Verification Audits",
    desc: "Every single delivery lot includes detailed testing tracking parameters, guaranteeing absolute yield strength compliance metrics.",
    icon: ShieldAlert
  },
  {
    title: "Custom Cut-to-Length Layouts",
    desc: "Minimize waste margins completely by letting our shops slice heavy wire sheets and bars to exact size tolerances early.",
    icon: Award
  }
];

export default function MaterialLogisticsService() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Specialized Material Logistics Services
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            Advanced supply workflows designed to keep commercial foundational frameworks running continuously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((item, index) => {
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