import React, { useState } from 'react';

export default function CivilReviews() {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      heading: "Exceptional Structural Integrity",
      text: "NaxusEDS transformed our commercial complex blueprint. Their civil engineering team identified structural optimization points that cut material overhead by 14% while strictly upgrading load tolerance profiles. Outstanding communication throughout the structural detailing phase.",
      author: "Ar. Rajesh Malhotra",
      designation: "Principal Architect, Vastu Builders"
    },
    {
      id: 2,
      heading: "Flawless Foundation Design",
      text: "Dealing with high water tables on our industrial site was a massive hurdle. NaxusEDS provided specialized deep foundation modeling and precise soil retention schematics. The structural safety approvals went through on the first submission.",
      author: "Vikramjit Singh",
      designation: "Project Director, Apex Infrastructure"
    },
    {
      id: 3,
      heading: "Masterful BIM Coordination",
      text: "Their 3D structural clash-detection and grading blueprints saved us weeks of onsite delays. The coordination between their civil engineers and our field contractors was exceptionally managed. Highly recommended for complex multi-story zoning.",
      author: "Meera Oberoi",
      designation: "Chief Consultant, Skyline Urban Systems"
    }
  ];

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white font-sans text-neutral-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[340px]">
        
        <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full mb-6">
          Client Testimonials
        </span>

        {/* Slidable Block Box Container */}
        <div className="w-full transition-all duration-300 ease-in-out px-2 md:px-12">
          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-950 tracking-tight max-w-2xl mx-auto leading-tight">
            "{reviews[currentReview].heading}"
          </h3>
          
          <p className="mt-6 text-neutral-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            {reviews[currentReview].text}
          </p>
          
          <div className="mt-6">
            <p className="font-bold text-neutral-950 text-base">
              {reviews[currentReview].author}
            </p>
            <p className="text-xs text-[#A43025] font-semibold mt-0.5">
              {reviews[currentReview].designation}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button 
            onClick={handlePrevReview}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-[#A43025] hover:text-[#A43025] hover:bg-red-50 transition-all duration-200 cursor-pointer shadow-sm"
            aria-label="Previous Review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <div className="flex gap-1.5">
            {reviews.map((_, idx) => (
              <span 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentReview ? 'w-6 bg-[#A43025]' : 'w-1.5 bg-neutral-200'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNextReview}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-[#A43025] hover:text-[#A43025] hover:bg-red-50 transition-all duration-200 cursor-pointer shadow-sm"
            aria-label="Next Review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}