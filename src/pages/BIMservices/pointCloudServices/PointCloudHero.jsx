import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Maximize } from 'lucide-react';
import PointCloudWhyChoose from './PointCloudWhyChoose';
import PointCloudScope from './PointCloudScope';
import PointCloudFaq from './PointCloudFaq';
import PointCloudProjects from './PointCloudProjects';
import PointCloudParticular from './PointCloudParticular';

export default function PointCloudHero() {
  return (
  <>
    <section className="relative bg-white text-slate-900 overflow-hidden py-16 lg:py-28 border-b border-slate-100">
      {/* Background architectural point matrix accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:2rem_2rem] opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#A43025]/5 border border-[#A43025]/20 text-[#A43025] px-3 py-1 rounded-full text-sm font-medium">
              <Maximize className="w-4 h-4 animate-pulse" />
              High-Precision Scan to BIM Modeling
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Convert Laser Scans into <span className="text-[#A43025]">As-Built BIM Models</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We convert unstructured billions-point 3D laser cloud files into highly accurate, data-rich parametric BIM frameworks for renovation, retrofits, and asset facility management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center justify-center gap-2 bg-[#A43025] hover:bg-[#89281e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-[#A43025]/10 group">
                Submit Your Scan Data
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                View Accuracy Standards
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image with smooth reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-1 rounded-2xl bg-[#A43025]/5 opacity-60 blur-xl" />
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/450" 
                alt="Laser scan data points transforming into smart Revit modeling structure" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <PointCloudWhyChoose/>
    <PointCloudScope/>
    
    <PointCloudProjects/>
    <PointCloudParticular/>
    <PointCloudFaq/>
  </>
  );
}   