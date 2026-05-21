import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Target, Compass, HardHat } from 'lucide-react';

const scopeMetrics = [
  {
    title: 'Model Detailing Limits (LOD 100 - 400)',
    points: ['LOD 200/300 Schematic Site Mapping', 'LOD 350 Complete Structural Coordination Layouts', 'LOD 400 Fabrication Data Parameter Injection', 'Fully Parameterized Component Customization']
  },
  {
    title: 'MEP Extraction Architecture',
    points: ['Main HVAC Trunk Lines & VAV Box Placement', 'High-Voltage Cable Trays & Panel Coordinates', 'Gravity Wastewater & High-Pressure Drain Paths', 'Valves, Gauges, & Facility Clearance Zones']
  },
  {
    title: 'Architectural Data Elements',
    points: ['Load-Bearing Structural Wall Variations', 'Intricate Facade Mouldings & Profiling', 'Window/Door Schedules & Anchor Points', 'Finished Ceiling Elevation Configurations']
  },
  {
    title: 'Structural Steel Components',
    points: ['Primary Core Truss Truss System Extraction', 'Foundation Pile & Pad Anchor Configurations', 'Gusset Plate & Connection Parameter Tracking', 'Reinforcement Concrete Core Boundaries']
  }
];

export default function PointCloudScope() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Scan to BIM Project Scope
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            A comprehensive overview of the structural layers and specifications our modeling teams accurately extract.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scopeMetrics.map((scope, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-slate-200 bg-white shadow-md hover:border-[#A43025]/20 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A43025]" />
                {scope.title}
              </h3>
              <ul className="space-y-2">
                {scope.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-[#A43025] font-semibold mt-0.5">&bull;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}