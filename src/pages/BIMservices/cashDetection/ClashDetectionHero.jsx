import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';
import ClashServices from './ClashServies';
import ClashSupport from './ClashSupport';
import ClashWorkflow from './ClashWorkflow';
import ClashWhyChoose from './ClashWhyChoose';
import ClashFaq from './ClashFaq';
import clashDetectionImage from '../../../assets/bimAssets/clash-detection.jpg';


export default function ClashDetectionHero() {
  return (
    <>
    <section className="relative bg-white text-slate-900 overflow-hidden py-16 lg:py-28 border-b border-slate-100">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />
      
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
              <ShieldAlert className="w-4 h-4" />
              Automated BIM Risk Mitigation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Identify Conflicts Before <span className="text-[#A43025]">Breaking Ground</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Our advanced 3D Clash Detection workflows expose spatial design conflicts across Architectural, Structural, and MEP components to eliminate costly site re-work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="inline-flex items-center justify-center gap-2 bg-[#A43025] hover:bg-[#89281e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-[#A43025]/10 group">
                Request a Sample Audit
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image with smooth reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-1 rounded-2xl bg-[#A43025]/10 opacity-70 blur-lg" />
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl">
              <img 
                src={clashDetectionImage} 
                alt="3D BIM Clash Detection Model Illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    <ClashServices/>
    <ClashSupport/>
    <ClashWorkflow/>
    <ClashWhyChoose/>
    <ClashFaq/>
    </>
  );
}