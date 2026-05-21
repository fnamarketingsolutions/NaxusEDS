import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Hammer } from 'lucide-react';
import ShopDrawingsServices from './ShopDrawingsServices';
import ShopDrawingsSupport from './ShopDrawingsSupport';
import ShopDrawingsWorkflow from './ShopDrawingsWorkflow';
import ShopDrawingsWhyChoose from './ShopDrawingsWhyChoose';
import ShopDrawingsFaq from './ShopDrawingsFaq';

export default function ShopDrawingsHero() {
  return (
  <>
    <section className="relative bg-white text-slate-900 overflow-hidden py-16 lg:py-28 border-b border-slate-100">
      {/* Background technical drafting grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />
      
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
              <Hammer className="w-4 h-4" />
              Contractor-Ready Installation Drawings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              High-Precision Shop Drawings For <span className="text-[#A43025]">Flawless Fabrication</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We extract pre-coordinated, millimeter-accurate shop drawings directly from verified BIM models, providing site crews with exact dimensions and routing configurations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center justify-center gap-2 bg-[#A43025] hover:bg-[#89281e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-[#A43025]/10 group">
                Request Drawing Estimates
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                View Sample Sheets
              </button>
            </div>
          </motion.div>

          {/* Right Side: Visual Representation */}
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
                alt="Detailed structural fabrication blueprint sheet extraction view" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <ShopDrawingsServices/>
    <ShopDrawingsSupport/>
    <ShopDrawingsWorkflow/>
    <ShopDrawingsWhyChoose/>
    <ShopDrawingsFaq/>
  </>
  );
}