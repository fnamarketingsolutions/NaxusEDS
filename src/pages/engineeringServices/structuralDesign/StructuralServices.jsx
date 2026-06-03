import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import structuralSteelImage from '../../../assets/engineeringAssets/structural-image.jpg';

const StructuralServices = () => {
  // Deep-dive structural design and detailing services data
  const structuralServicesData = [
    {
      title: "RCC Drafting & Detailing",
      desc: "Comprehensive reinforced concrete framing layouts, slab reinforcement detailing, beam-column schedules, and high-fidelity structural documentation.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Structural Steel Framework",
      desc: "Advanced structural steel detailing, connection configuration, anchor bolt layouts, assembly plans, and highly precise shop fabrication drawings.",
      img: structuralSteelImage
    },
    {
      title: "Foundation & Substructure Design",
      desc: "Tailored foundation layouts, retaining wall specifications, deep pile configurations, and grade beam structural detailing for variable soil layouts.",
      img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Bar Bending Schedules (BBS)",
      desc: "Production-ready bar bending schedules offering exact calculations of rebar cut-lengths, weights, bending shapes, and optimal spatial spacing matrix configurations.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "High-Rise & Industrial Framing",
      desc: "Complex structural stress planning, wind/seismic calculation analysis maps, and heavy industrial framing configurations built for high-load durability.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Global Code Compliance Verification",
      desc: "Rigorous alignment verification with International Building Codes (IBC), Eurocodes, and IS standards to ensure cross-border architectural structural validity.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop"
    }
  ];

  // Animation layout variant matching the corporate stack
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (idx) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: (idx % 3) * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 border-t border-b border-gray-100 w-full font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= CENTERED MAIN HEADING ================= */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#A43025] tracking-tight mb-4">
            Structural Design & Detailing Services
          </h2>
          <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
            Precision engineering blueprints and structural drafting solutions engineered under strict global code standards.
          </p>
        </div>

        {/* ================= COMPONENT SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {structuralServicesData.map((service, idx) => (
            <motion.div 
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="flex items-start space-x-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
            >
              {/* Responsive Image Component on Left Side */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-gray-100">
                <div className="absolute inset-0 bg-[#A43025]/5 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                />
              </div>

              {/* Technical Context Layer */}
              <div className="flex flex-col pt-1">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#A43025] transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <HiOutlineArrowRight className="text-[#A43025] text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0 shrink-0" />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StructuralServices;