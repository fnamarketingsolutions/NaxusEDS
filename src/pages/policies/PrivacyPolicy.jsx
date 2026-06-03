import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information We Collect",
    body: "NexusEDS may collect business contact details, project specifications, drawings, and communication records you submit through our website, email, or project portals. We use this information solely to deliver steel engineering, BIM, and fabrication documentation services.",
  },
  {
    title: "How We Use Your Data",
    body: "Collected data supports quotation preparation, technical coordination, quality assurance, and account management. We do not sell personal or project data to third parties. Aggregated, non-identifiable analytics may be used to improve our digital platforms.",
  },
  {
    title: "Data Security",
    body: "We apply industry-standard access controls, encrypted transmission where supported, and restricted internal access to client files. While no system is fully immune to risk, we continuously review safeguards for structural models, shop drawings, and proprietary design assets.",
  },
  {
    title: "Third-Party Services",
    body: "We may rely on vetted hosting, email, and collaboration tools to operate our workflows. These providers are bound by confidentiality obligations consistent with our engineering engagements.",
  },
  {
    title: "Your Rights",
    body: "You may request access, correction, or deletion of personal data we hold, subject to contractual and legal retention requirements for active projects. Contact us at info@NexusEDS.com for privacy-related inquiries.",
  },
  {
    title: "Policy Updates",
    body: "This policy may be revised to reflect regulatory or operational changes. Material updates will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <SectionHero
        title="Privacy Policy"
        subtitle="How NexusEDS protects your information across steel engineering and BIM engagements."
      />

      <div className="mx-auto max-w-4xl px-6 pb-20 pt-4 sm:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 rounded-lg border border-[#f0e8e7] bg-[#fdf9f9] px-5 py-4 text-sm text-[#555]"
        >
          <strong className="text-[#1a1a1a]">Effective date:</strong> May 21, 2026
        </motion.p>

        <div className="space-y-10">
          {sections.map((block, i) => (
            <motion.section
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h2 className="mb-3 text-xl font-bold tracking-tight text-[#1a1a1a] sm:text-2xl">
                {block.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#555] sm:text-base">{block.body}</p>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap gap-4 border-t border-[#f0e8e7] pt-8"
        >
          <Link
            to="/terms-and-conditions"
            className="text-sm font-semibold text-[#c0392b] no-underline hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/contact-us"
            className="text-sm font-semibold text-[#1a1a1a] no-underline hover:text-[#c0392b]"
          >
            Contact NexusEDS
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

function SectionHero({ title, subtitle }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-[#f0e8e7] bg-[linear-gradient(180deg,#fdf9f9_0%,#fff_100%)] px-6 py-14 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <span className="mb-3 inline-block text-[11px] font-semibold tracking-[0.12em] text-[#c0392b] uppercase">
          Legal
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#666] sm:text-lg">{subtitle}</p>
      </div>
    </motion.section>
  );
}
