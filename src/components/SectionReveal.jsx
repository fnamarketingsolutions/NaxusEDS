import { motion } from "framer-motion";

const defaultTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

/**
 * Scroll-reveal wrapper for page sections. Use on outer <section> or block roots.
 */
export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  as = "section",
  id,
}) {
  const Component = as === "div" ? motion.div : motion.section;

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}
