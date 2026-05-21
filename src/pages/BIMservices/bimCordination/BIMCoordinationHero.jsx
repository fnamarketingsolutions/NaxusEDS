import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';
import BimCoordServices from './BimCoordServices';
import BimCoordSupport from './BimCoordSupport';
import BimCoordWorkflow from './BimCoordWorkflow';
import BimCoordWhyChoose from './BimCoordWhyChoose';
import BimCoordFaq from './BimCoordFaq';

export default function BIMCoordinationHero() {
  return (
   <>
    <section className="relative bg-white text-slate-900 overflow-hidden py-16 lg:py-28 border-b border-slate-100">
      {/* Structural architectural background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#A43025]/5 border border-[#A43025]/20 text-[#A43025] px-3 py-1 rounded-full text-sm font-medium">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Multidisciplinary System Integration
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Unified Engineering Through <span className="text-[#A43025]">BIM Coordination</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We sync Architecture, Structure, and MEP data into one single synchronized workflow, avoiding layout changes during field operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center justify-center gap-2 bg-[#A43025] hover:bg-[#89281e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-[#A43025]/10 group">
                Initiate Project Setup
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                View Capabilities
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image with fade-in scale */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-1 rounded-2xl bg-[#A43025]/5 opacity-60 blur-xl" />
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/450" 
                alt="BIM Coordination Framework Blueprint" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <BimCoordServices/>
    <BimCoordSupport/>
    <BimCoordWorkflow/>
    <BimCoordWhyChoose/>
    <BimCoordFaq/>
   </>
  );
}