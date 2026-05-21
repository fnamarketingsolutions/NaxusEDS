import React from 'react';

export default function ModelBlock() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden border border-slate-400 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Image Block */}
          <div className="lg:col-span-5 h-64 sm:h-96 lg:h-auto min-h-[350px] relative border-b lg:border-b-0 lg:border-r border-slate-300">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="High fidelity architectural scale model" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Block */}
          <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center space-y-6 bg-white">
            <span className="text-xs font-bold tracking-widest text-[#A43025] uppercase">Advanced Prototyping</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">High-Fidelity Architectural Modeling</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At NaxusEDS, we build comprehensive virtual and structural prototypes. Our highly detailed architectural structural models bridge the gap between abstract blueprints and tangible physical geometry.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[#A43025] pl-4">
                <span className="block text-2xl font-bold text-slate-900">1:100</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Micro Precision Scales</span>
              </div>
              <div className="border-l-2 border-[#A43025] pl-4">
                <span className="block text-2xl font-bold text-slate-900">BIM Level 3</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Lifecycle Compliance</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}