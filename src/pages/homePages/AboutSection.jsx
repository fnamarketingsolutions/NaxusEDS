import React from 'react';
import { motion } from 'framer-motion';
import architecturalImage from '../../assets/images/architectural1.jpg';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative">
            {/* Main Image */}
            <img 
              src={architecturalImage} 
              alt="About NaxusEDS" 
              className="w-full h-[400px] md:h-[550px] object-cover "
            />
            {/* Decorative Accent Square */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#A43025] -z-10 hidden md:block"></div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#A43025]"></div>
            <span className="text-[#A43025] font-bold uppercase tracking-widest text-sm">
              About Our Company
            </span>
          </div>

          <h2 className="text-[#1a1a1a] text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Innovating Engineering <br /> 
            Solutions with <span className="text-[#A43025]">NaxusEDS</span>
          </h2>

          <div className="space-y-6">
            <p className="text-[#777] text-base md:text-lg font-normal leading-relaxed">
              NaxusEDS is a premier architectural and engineering design firm committed to delivering high-precision technical solutions. With a focus on accuracy and innovation, we bridge the gap between complex conceptual designs and practical engineering execution.
            </p>
            
            <p className="text-[#777] text-base md:text-lg font-normal leading-relaxed">
              Our multidisciplinary team specializes in BIM services, structural analysis, and comprehensive CAD drafting. At NaxusEDS, we pride ourselves on a client-centric approach, ensuring that every project—from small-scale residential designs to massive industrial infrastructures—is handled with unmatched professional integrity and technological excellence.
            </p>
          </div>

          <motion.div 
            className="mt-10"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <button className="border-b-2 border-[#A43025] text-[#1a1a1a] font-bold py-2 flex items-center gap-4 group">
              LEARN MORE ABOUT US
              <span className="text-[#A43025] transition-transform group-hover:translate-x-2">→</span>
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;