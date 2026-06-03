import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing the NexusEDS website or engaging our steel fabrication, structural detailing, or BIM services, you agree to these Terms and Conditions. If you do not agree, please discontinue use of our platforms and services.",
  },
  {
    title: "Services Description",
    body: "NexusEDS provides engineering documentation, light gauge steel fabrication support, rebar detailing, architectural design assistance, and related technical deliverables. Scope, milestones, and fees are defined in separate proposals or master service agreements.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients must supply accurate site data, applicable codes, approved design criteria, and timely feedback. Delays caused by incomplete inputs may affect schedules and may incur additional coordination charges as outlined in project contracts.",
  },
  {
    title: "Intellectual Property",
    body: "Unless otherwise agreed in writing, deliverables are licensed for the client's project use upon full payment. NexusEDS retains rights to pre-existing methodologies, templates, and proprietary workflows used to produce the work.",
  },
  {
    title: "Limitation of Liability",
    body: "Our liability is limited to fees paid for the specific engagement giving rise to the claim. NexusEDS is not liable for indirect, consequential, or site execution damages arising from third-party construction decisions not performed by our team.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by applicable laws in the jurisdiction specified in your signed agreement with NexusEDS. Disputes should first be addressed through good-faith commercial negotiation.",
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
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
            Terms & Conditions
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#666] sm:text-lg">
            Commercial terms governing use of NexusEDS steel engineering, fabrication, and BIM services.
          </p>
        </div>
      </motion.section>

      <div className="mx-auto max-w-4xl px-6 pb-20 pt-4 sm:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 rounded-lg border border-[#f0e8e7] bg-[#fdf9f9] px-5 py-4 text-sm text-[#555]"
        >
          <strong className="text-[#1a1a1a]">Effective date:</strong> May 21, 2026
        </motion.p>

        <ol className="list-decimal space-y-10 pl-5 marker:font-bold marker:text-[#c0392b]">
          {sections.map((block, i) => (
            <motion.li
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="pl-2"
            >
              <h2 className="mb-3 text-xl font-bold tracking-tight text-[#1a1a1a] sm:text-2xl">
                {block.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#555] sm:text-base">{block.body}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap gap-4 border-t border-[#f0e8e7] pt-8"
        >
          <Link
            to="/privacy-policy"
            className="text-sm font-semibold text-[#c0392b] no-underline hover:underline"
          >
            Privacy Policy
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
