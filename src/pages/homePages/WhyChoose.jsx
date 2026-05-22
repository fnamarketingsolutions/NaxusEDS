import React from 'react'
import { 
  HiOutlineUserGroup,
  HiOutlineLink, 
  HiOutlineClock,
  HiOutlineGlobeAlt
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import whyChoose1 from '../../assets/images/architect3.jpg';
import whyChoose2 from '../../assets/images/architect4.jpg';
import whyChoose3 from '../../assets/images/architect5.jpg';
import whyChoose4 from '../../assets/images/architect6.png';

const features = [
  { 
    title: "Deep Domain Expertise", 
    desc: "Engage with a highly qualified and experienced team of subject matter experts.", 
    icon: <HiOutlineUserGroup />,
    img: whyChoose1
  },
  { 
    title: "Unparalleled Efficiency", 
    desc: "Experience hands-on guidance and support right from project initiation to end delivery.", 
    icon: <HiOutlineLink />,
    img: whyChoose2
  },
  { 
    title: "Rapid TAT and Delivery", 
    desc: "Eliminate worries about time zones and experience instant turnarounds.", 
    icon: <HiOutlineClock />,
    img: whyChoose3
  },
  { 
    title: "Client Centric Workflow", 
    desc: "Get round-the-clock updates from an agile team with dedicated client communication.", 
    icon: <HiOutlineGlobeAlt />,
    img: whyChoose4
  },
];

const WhyChoose = () => {
  return (
    <>
      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="py-24 px-6 md:px-16 bg-white font-sans antialiased">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Block */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A43025] tracking-tight mb-4">Why NaxusEDS?</h2>
            <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 text-lg">Experience in-depth project management under one roof, across design, data and delivery.</p>
          </div>

          {/* Grid Layout Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
              >
                {/* 1. IMAGE AT THE UPPER SIDE OF CONTENT */}
                <div className="w-full h-44 overflow-hidden rounded-xl mb-6 relative">
                  <div className="absolute inset-0 bg-[#A43025]/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                {/* 2. ICON & TEXT LAYER BELOW IMAGE */}
                <div className="flex flex-col text-center sm:text-left items-center sm:items-start flex-grow">
                  <div className="text-3xl text-[#A43025] mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100 group-hover:bg-[#A43025] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#A43025] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default WhyChoose;