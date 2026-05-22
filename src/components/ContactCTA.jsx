import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineLocationMarker, 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineArrowSmRight 
} from 'react-icons/hi';
import contactImage from '../assets/images/architectural1.jpg'


const ContactCTA = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-white font-sans text-gray-800 antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* ================= LEFT SIDE: TEXT & CONTACT FORM ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Heading Block */}
          <div>
            <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">Let's Collaborate</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Ready to Bring Your Architectural <br className="hidden md:inline" /> & BIM Vision to Life?
            </h2>
            <div className="w-12 h-1 bg-[#A43025] mt-4 rounded-full"></div>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl font-light">
            Whether you need precise CAD structural engineering drafting or high-fidelity 3D BIM data coordination setups, our team can help ensure seamless execution. Drop us a line below.
          </p>

          {/* Interactive Form Details */}
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-gray-50 text-gray-800 text-sm px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A43025] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@company.com" 
                className="w-full bg-gray-50 text-gray-800 text-sm px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A43025] focus:bg-white transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Project Brief</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your project or structural layout requirements..." 
                className="w-full bg-gray-50 text-gray-800 text-sm px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#A43025] focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button className="bg-[#A43025] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#8a281f] transition-all group w-full sm:w-auto shadow-md hover:shadow-lg">
                Send Message <HiOutlineArrowSmRight className="group-hover:translate-x-1 transition-transform text-xl" />
              </button>
            </div>
          </form>

          {/* Inline Location Specific Details */}
          <div className="pt-8 border-t border-gray-100 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start space-x-3">
              <HiOutlineLocationMarker className="text-2xl text-[#A43025] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">USA Headquarters</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  9559 Lancaster Hutchins Rd,<br />Dallas, TX 75241
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <HiOutlineLocationMarker className="text-2xl text-[#A43025] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">India Office</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  D.No 49-404/2/C/401, Hmt Township,<br />Hyderabad, Telangana, India - 500054
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE: FULLY RESPONSIVE IMAGE ================= */}
        <div className="lg:col-span-5 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-[350px] sm:h-[450px] lg:h-[580px] relative group"
          >
            {/* Architectural structural preview background matrix */}
            <div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img 
              src={contactImage}
              alt="NaxusEDS Architectural Solutions" 
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;