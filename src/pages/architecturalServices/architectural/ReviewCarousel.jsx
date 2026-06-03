import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    quote:
      "NexusEDS delivered code-compliant architectural drafting way ahead of our deadline. Their meticulous attention to localized drafting standards preserved our design intent completely.",
    author: "Sarah Jenkins",
    role: "Principal Architect, Apex Studio",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The structural BIM model accuracy provided by NexusEDS was flawless. It saved us hundreds of potential field mitigation hours during our deep structural foundation phase.",
    author: "Marcus Vance",
    role: "Lead Structural Engineer, BuildCorp",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center p-8 sm:p-12 rounded-3xl bg-white ">

        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
          <img
            src={reviews[activeIndex].image}
            alt={reviews[activeIndex].author}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote Icon */}
        <span className="text-6xl text-[#A43025] font-serif mb-4 leading-none">
          “
        </span>

        {/* Sliding Content */}
        <div className="relative w-full min-h-[260px] sm:min-h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full flex flex-col items-center"
            >
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-700 max-w-3xl">
                {reviews[activeIndex].quote}
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-bold text-slate-900">
                  {reviews[activeIndex].author}
                </h4>

                <p className="text-xs text-[#A43025] font-semibold tracking-[0.15em] mt-2 uppercase">
                  {reviews[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-5 mt-10">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-[#A43025] hover:text-white transition-all duration-300 flex items-center justify-center text-lg text-slate-700"
          >
            ←
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-[#A43025] w-8"
                    : "bg-slate-300 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-[#A43025] hover:text-white transition-all duration-300 flex items-center justify-center text-lg text-slate-700"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}