import React from 'react';
import Location from './Location';


export default function ContactHero() {
  return (
   <>
    <section className="bg-white py-16 lg:py-24 flex items-center min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE: Text Content Block (45% Width on Desktop) */}
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <span className="text-[#A43025] uppercase tracking-widest font-bold text-xs block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
            Let's Build Your <br />
            <span className="text-[#A43025]">Steel Framework</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Have an upcoming commercial project or residential development? Reach out to our global engineering divisions. We provide comprehensive detailing estimates, precise digital BIM modeling, and automated component fabrication tailored to your exact blueprints.
          </p>
          
          {/* Quick-Contact Stats / Info Pills */}
          <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 text-left max-w-md mx-auto lg:mx-0">
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wide mb-1">Response Time</h4>
              <p className="text-gray-900 font-semibold text-sm">Within 24 Business Hours</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wide mb-1">Global Support</h4>
              <p className="text-gray-900 font-semibold text-sm">24/5 Engineering Hubs</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: High-Impact Image Block (55% Width on Desktop) */}
        <div className="w-full lg:w-[55%]">
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            {/* Geometric Accent Badge over the image */}
            <div className="absolute top-4 left-4 z-10 bg-[#A43025] text-white px-4 py-2 rounded font-semibold text-xs uppercase tracking-wider shadow-md">
              Estimation Ready
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" 
              alt="Light Gauge Steel Fabrication Production Line" 
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>


   <Location/>
   </>
  );
}