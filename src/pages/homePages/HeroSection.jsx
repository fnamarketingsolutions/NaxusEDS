import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import NexusEDSLayout from "./NexusEDSLayout";
import WhyChoose from "./WhyChoose";
import ContactCTA from "../../components/ContactCTA";
import Reviews from "./Reviews";
import heroImage from "../../assets/images/hero-img.jpg";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
   <>
   <section className="relative w-full overflow-hidden bg-white">
  <div
    className="pointer-events-none absolute inset-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(192,57,43,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(192,57,43,0.04)_1px,transparent_1px)]"
    aria-hidden
  />

  <div
    className="pointer-events-none absolute -top-24 -left-24 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.06)_0%,transparent_70%)]"
    aria-hidden
  />

  <div className="relative z-[1] mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:gap-12 lg:px-12 lg:py-20">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-xl flex-1 lg:max-w-[640px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0d0cd] bg-[#fdf2f1] px-3.5 py-1.5"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c0392b]" />
        <span className="text-[11.5px] font-semibold tracking-[0.1em] text-[#c0392b] uppercase">
          16+ Years of Excellence
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-6 text-[clamp(2.25rem,5vw,3.875rem)] leading-[1.08] font-bold tracking-tight text-[#1a1a1a]"
      >
        Architectural Design
        <br />
        and{" "}
        <span className="relative inline-block text-[#c0392b]">
          Engineering
          <svg
            viewBox="0 0 260 12"
            className="absolute -bottom-1 left-0 h-2.5 w-full overflow-visible"
            preserveAspectRatio="none"
          >
            <path
              d="M2 8 Q65 2 130 7 Q195 12 258 5"
              stroke="#c0392b"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </span>{" "}
        Drawing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mb-10 max-w-xl text-base leading-relaxed font-normal text-[#666]"
      >
        NexusEDS serves over{" "}
        <strong className="font-semibold text-[#1a1a1a]">
          150+ active clients
        </strong>{" "}
        throughout North America. Based in Hollywood, Florida, we deliver
        high-quality Architecture Modelling, BIM, Structural, and Civil
        Engineering services — with{" "}
        <strong className="font-semibold text-[#1a1a1a]">
          450–550 drawing deliverables daily
        </strong>{" "}
        and a 99% client satisfaction rate.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-wrap items-center gap-4"
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex cursor-pointer items-center gap-2.5 rounded-full border-none bg-gradient-to-br from-[#c0392b] to-[#922b21] px-7 py-3.5 text-[15px] font-semibold tracking-wide text-white shadow-[0_6px_20px_rgba(192,57,43,0.20)] transition-shadow hover:shadow-[0_12px_32px_rgba(192,57,43,0.28)]"
        >
          Discuss a project
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        <Link to="/contact-us">
        <motion.a
          href="#"
          whileHover={{ x: 3 }}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#1a1a1a] no-underline"
        >
          View our work
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="#c0392b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="mt-12 flex flex-wrap gap-8 border-t border-[#f0e8e7] pt-8"
      >
        {[
          { value: "16+", label: "Years Experience" },
          { value: "150+", label: "Active Clients" },
          { value: "99%", label: "Satisfaction Rate" },
        ].map((stat, i) => (
          <div key={i}>
            <div className="mb-1 text-[28px] leading-none font-bold tracking-tight text-[#c0392b]">
              {stat.value}
            </div>
            <div className="text-xs font-medium tracking-wider text-[#999] uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      className="relative w-full max-w-xl flex-1 lg:max-w-[580px]"
    >
      <div
        className="pointer-events-none absolute -top-3 -right-3 h-[60px] w-[60px] rounded-tr-lg border-t-[3px] border-r-[3px] border-[#c0392b] opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-3 -left-3 h-[60px] w-[60px] rounded-bl-lg border-b-[3px] border-l-[3px] border-[#c0392b] opacity-50"
        aria-hidden
      />

<div className="overflow-hidden">
  <img
    src={heroImage}
    alt="Architectural Blueprint Sketch"
    className="block w-[1000px] h-[500px] object-cover-contain contrast-[1.05] grayscale-[30%]"
  />
</div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 -left-5 flex items-center gap-3 rounded-xl border border-[#f0e8e7] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:left-0"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#c0392b] to-[#922b21]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12L11 14L15 10"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <div className="text-[13px] font-bold text-[#1a1a1a]">
            Insured by Everest
          </div>
          <div className="text-[11px] text-[#999]">
            Fully licensed & covered
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

    <AboutSection/>
    <NexusEDSLayout/>
    <WhyChoose/>
    <Reviews/>
    <ContactCTA/>
   </>
  );
};

export default HeroSection;
