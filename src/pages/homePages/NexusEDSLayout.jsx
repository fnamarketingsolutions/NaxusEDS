import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import StructuralDesign from '../../assets/images/structural-image.jpg';

const NaxusEDSLayout = () => {
  // 1. Engineering Drawing Services Data with custom layout images
  const engineeringServices = [
    { 
      title: "Structural Design", 
      desc: "Advanced structural drafting and detailing services tailored for residential, commercial, and industrial construction projects.",
      img: StructuralDesign,
      link: "/structural-design"
    },
    { 
      title: "Civil Engineering", 
      desc: "Professional civil engineering plans and layouts designed to support efficient infrastructure and land development projects.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop",
      link: "/civil-engineering"
        },
    { 
      title: "MEP Service", 
      desc: "Coordinated MEP drafting solutions ensuring accurate integration of mechanical, electrical, and plumbing systems.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop",
      link: "/mep-service"
      },
    { 
      title: "Pool Engineering", 
      desc: "Custom pool engineering drawings with precise specifications, structural integrity, and modern aquatic design standards.",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=400&auto=format&fit=crop",
      link: "/pool-engineering"
    },
  ];

  // 2. Architectural Design Services Data with custom layout images
  const architecturalServices = [
    { 
      title: "Architectural", 
      desc: "Creative and functional architectural design services focused on innovative planning and high-quality construction documentation.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
      link: "/architectural"
    },
    { 
      title: "Facade / Building", 
      desc: "Modern facade and exterior design solutions that enhance building aesthetics, sustainability, and performance.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop",
      link: "/facade-building"
    },
    { 
      title: "3D Visualization", 
      desc: "High-end 3D visualization and rendering services that provide realistic project previews and immersive presentations.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop",
      link: "/3d-visualization"
    },
  ];

  // 3. BIM Services Data with custom layout images
  const bimServices = [
    { 
      title: "Architectural BIM Services", 
      desc: "Detailed architectural BIM models developed to improve visualization, coordination, and construction documentation accuracy.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop",
      link: "/architectural-bim-services"
    },
    { 
      title: "Structural BIM Services", 
      desc: "Comprehensive structural BIM solutions delivering precise modeling, efficient coordination, and streamlined project execution.",
      img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=400&auto=format&fit=crop",
      link: "/structural-bim-services"
    },
    { 
      title: "MEP BIM Services", 
      desc: "Integrated MEP BIM services that optimize system coordination, reduce clashes, and improve construction efficiency.",
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=400&auto=format&fit=crop",
      link: "/mep-bim-services"
    },
    { 
      title: "Clash Detection Services", 
      desc: "Reliable clash detection services that identify coordination issues early and minimize costly on-site conflicts.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
      link: "/clash-detection-services"
    },
    { 
      title: "BIM Coordination", 
      desc: "End-to-end BIM coordination services ensuring seamless collaboration between architectural, structural, and MEP disciplines.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
      link: "/bim-coordination-services"
    },
    { 
      title: "CAD to BIM", 
      desc: "Efficient CAD to BIM conversion services transforming traditional drawings into intelligent and accurate BIM models.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop",  
      link: "/cad-to-bim-services"
    },
    { 
      title: "Revit Family Creation", 
      desc: "Custom Revit family development services designed to improve modeling consistency, efficiency, and project standards.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
      link: "/revit-family-creation-services"
    },
    { 
      title: "Point Cloud to BIM Services", 
      desc: "Precise point cloud to BIM modeling services that convert scanned site data into accurate digital building models.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
      link: "/point-cloud-services"
    },
    { 
      title: "Accurate Shop Drawings Creation", 
      desc: "Detailed and fabrication-ready shop drawings prepared to support smooth manufacturing and construction workflows.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop",
      link: "/shop-drawings-services"
    },
  ];

  // Framer Motion Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (idx) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: (idx % 3) * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      
      {/* ================= 1. ENGINEERING DRAWING SERVICES ================= */}
      <section className="py-24 px-6 md:px-16 bg-gray-50 border-t border-b border-gray-100 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Centered Elegant Heading */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A43025] tracking-tight mb-4">
              Engineering Drawing Services
            </h2>
            <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 text-base md:text-lg font-light">
              Precision drafting and specialized computational layouts custom-built for infrastructural reliability.
            </p>
          </div>

          {/* Fully Responsive Grid Component Layout Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {engineeringServices.map((service, idx) => (
              <Link to={service.link}>
              <motion.div 
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="flex items-start space-x-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
              >
                {/* Image Component on Left Side */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative ">
                  <div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                {/* Content Side */}
                <div className="flex flex-col pt-1">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#A43025] transition-colors line-clamp-1">{service.title}</h3>
                    <HiOutlineArrowRight className="text-[#A43025] text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0 shrink-0" />
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. ARCHITECTURAL DESIGN SERVICES ================= */}
      <section className="py-24 px-6 md:px-16 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Centered Elegant Heading */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A43025] tracking-tight mb-4">
              Architectural Design Services
            </h2>
            <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 text-base md:text-lg font-light">
              Innovative spatial planning, performance-oriented facade treatments, and high-fidelity project renderings.
            </p>
          </div>

          {/* Fully Responsive Grid Component Layout Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {architecturalServices.map((service, idx) => (
              <Link to={service.link}>
              <motion.div 
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="flex items-start space-x-4 bg-gray-50 border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
              >
                {/* Image Component on Left Side */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-gray-100">
                  <div className="absolute inset-0 bg-[#A43025]/5 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                {/* Content Side */}
                <div className="flex flex-col pt-1">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#A43025] transition-colors line-clamp-1">{service.title}</h3>
                    <HiOutlineArrowRight className="text-[#A43025] text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0 shrink-0" />
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. BIM SERVICES ================= */}
      <section className="py-24 px-6 md:px-16 bg-gray-50 border-t border-b border-gray-100 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Centered Elegant Heading */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A43025] tracking-tight mb-4">
              BIM Services
            </h2>
            <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 text-base md:text-lg font-light">
              Integrated Building Information Modeling solutions optimized for real-time validation and seamless multi-discipline coordination.
            </p>
          </div>

          {/* Fully Responsive Grid Component Layout Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {bimServices.map((service, idx) => (
              <Link to={service.link}>
              <motion.div 
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="flex items-start space-x-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
              >
                {/* Image Component on Left Side */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-gray-100">
                  <div className="absolute inset-0 bg-[#A43025]/5 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                {/* Content Side */}
                <div className="flex flex-col pt-1">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#A43025] transition-colors line-clamp-1">{service.title}</h3>
                    <HiOutlineArrowRight className="text-[#A43025] text-sm opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0 shrink-0" />
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default NaxusEDSLayout;