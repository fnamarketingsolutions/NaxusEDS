import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "David Miller",
    role: "Principal Architect, Texas Development",
    text: "NexusEDS transformed our drafting workflow. Their attention to structural detail and quick response times allowed us to hit our construction deadlines without a single coordination error on site.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Rajesh Kumar",
    role: "Director, BuildTech Infrastructure",
    text: "The BIM coordination services provided were absolutely flawless. They identified multiple structural clashes early in the design phase, saving us thousands of dollars in potential rework.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "MEP Consultant, Horizon Engineering",
    text: "Working with their MEP modeling team was incredibly seamless. Despite the time zone differences, their rapid turnaround and client-centric communication made it feel like they were in the office next door.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Michael Chang",
    role: "Project Manager, Apex Blue Pools",
    text: "Their specialized pool engineering drawings were precise and fully compliant with local safety regulations. Highly impressed with their domain expertise and technical execution.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  }
];

const Reviews = () => {
  const scrollRef = useRef(null);

  // Smooth scroll configuration for left and right arrows
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scrolls exactly by one card width + gap layout configuration
      const scrollToValue = direction === 'left' 
        ? scrollLeft - (clientWidth / 2 + 24) 
        : scrollLeft + (clientWidth / 2 + 24);
      
      scrollRef.current.scrollTo({
        left: scrollToValue,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 font-sans antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* ================= HEADER BLOCK (CENTERED) ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Trusted by Global Engineering Partners
          </h2>
          <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
            Read what our clients say about our production-grade drafting, architecture modeling, and BIM validation workflows.
          </p>
        </div>

        {/* ================= INTERACTIVE CAROUSEL ROW ================= */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none scroll-smooth mask-linear-edges"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="snap-center shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow duration-300"
            >
              {/* Top Vector Quote Flag decoration */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-red-50 text-4xl transition-colors duration-300">
                <FaQuoteLeft />
              </div>

              {/* Review Text Content */}
              <div className="relative z-10">
                {/* Dynamic Star Ratings Matrix */}
                <div className="flex space-x-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light mb-8 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Meta Profile Block */}
              <div className="flex items-center space-x-4 border-t border-gray-50 pt-5 mt-auto">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border border-gray-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#A43025] transition-colors duration-300">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-light mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CAROUSEL NAVIGATION CONTROLS ================= */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button 
            onClick={() => handleScroll('left')}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#A43025] hover:text-white hover:border-[#A43025] active:scale-95 transition-all shadow-sm group"
            aria-label="Previous review"
          >
            <HiOutlineChevronLeft className="text-xl group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={() => handleScroll('right')}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#A43025] hover:text-white hover:border-[#A43025] active:scale-95 transition-all shadow-sm group"
            aria-label="Next review"
          >
            <HiOutlineChevronRight className="text-xl group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;