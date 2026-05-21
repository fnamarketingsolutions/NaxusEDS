import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineArrowSmRight,
} from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const drawingLinks = [
  { label: "Structural Design", to: "/structural-design" },
  { label: "Civil Engineering", to: "/civil-engineering" },
  { label: "MEP Services", to: "/mep-service" },
  { label: "Pool Engineering", to: "/pool-engineering" },
];

const architecturalLinks = [
  { label: "Architectural", to: "/architectural" },
  { label: "Facade / Building", to: "/facade-building" },
  { label: "3D Visualization", to: "/3d-visualization" },
];

const bimLinks = [
  { label: "Architectural BIM", to: "/architectural-bim-services" },
  { label: "Structural BIM", to: "/structural-bim-services" },
  { label: "MEP BIM", to: "/mep-bim-services" },
  { label: "Clash Detection", to: "/clash-detection-services" },
  { label: "BIM Coordination", to: "/bim-coordination-services" },
  { label: "CAD to BIM", to: "/cad-to-bim-services" },
  { label: "Revit Family Creation", to: "/revit-family-creation-services" },
  { label: "Point Cloud to BIM", to: "/point-cloud-services" },
  { label: "Shop Drawings", to: "/shop-drawings-services" },
];

const steelLinks = [
  { label: "Rebar Fabrication", to: "/rebar-fabrication-services" },
  { label: "Light Gauge Steel", to: "/light-gauge-steel-fabrication" },
  { label: "Contact Us", to: "/contact-us" },
];

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center text-sm font-light text-gray-200 no-underline transition-transform hover:translate-x-1 hover:text-white"
      >
        <HiOutlineArrowSmRight className="mr-1.5 shrink-0 text-xs opacity-70" />
        {children}
      </Link>
    </li>
  );
}

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#bc3b30] bg-[#A43025] px-6 pt-16 pb-8 font-sans text-white antialiased md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-12 border-b border-[#bc3b30] pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12"
        >
          <div className="flex flex-col space-y-5">
            <Link to="/" className="flex items-center space-x-2 no-underline text-white">
              <svg className="h-8 w-8 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2zm0 3.99L18.51 18H5.49L12 5.99zM11 10v2h2v-2h-2zm0 4v2h2v-2h-2z" />
              </svg>
              <span className="text-2xl font-black tracking-wider">
                NEXUS<span className="font-light opacity-70">EDS</span>
              </span>
            </Link>
            <p className="pr-2 text-sm leading-relaxed font-light text-gray-200">
              NexusEDS is a steel-focused engineering and fabrication documentation partner for
              structural steel, light gauge framing, rebar, and BIM-led delivery across 150+ global
              projects.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaLinkedinIn, label: "LinkedIn" },
                { Icon: FaInstagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bc3b30] text-xs transition-all hover:bg-white hover:text-[#A43025]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:pl-6">
            <h4 className="relative mb-6 pb-2 text-lg font-bold tracking-wide uppercase after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-white after:content-['']">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-6">
              <div>
                <h5 className="mb-2 text-xs font-bold tracking-widest text-gray-300 uppercase">
                  Drawing Services
                </h5>
                <ul className="space-y-1.5">
                  {drawingLinks.map((link) => (
                    <FooterLink key={link.to} to={link.to}>
                      {link.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-bold tracking-widest text-gray-300 uppercase">
                  Architectural
                </h5>
                <ul className="space-y-1.5">
                  {architecturalLinks.map((link) => (
                    <FooterLink key={link.to} to={link.to}>
                      {link.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:pl-4">
            <h4 className="relative mb-6 pb-2 text-lg font-bold tracking-wide uppercase after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-white after:content-['']">
              BIM & Steel
            </h4>
            <ul className="space-y-2.5">
              {bimLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
              {steelLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="relative mb-6 pb-2 text-lg font-bold tracking-wide uppercase after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-white after:content-['']">
              Contact & Address
            </h4>
            <div className="flex flex-col space-y-5 text-sm font-light text-gray-200">
              <div className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-xl text-white" />
                <div>
                  <strong className="mb-1 block text-xs font-semibold tracking-wider text-white uppercase">
                    USA Headquarters:
                  </strong>
                  <p className="leading-relaxed">
                    9559 Lancaster Hutchins Rd,
                    <br />
                    Dallas, TX 75241
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-xl text-white" />
                <div>
                  <strong className="mb-1 block text-xs font-semibold tracking-wider text-white uppercase">
                    India Office:
                  </strong>
                  <p className="leading-relaxed">
                    D.No 49-404/2/C/401,
                    <br />
                    Hmt Township, Hyderabad,
                    <br />
                    Telangana, India - 500054
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 border-t border-[#bc3b30] pt-2 text-xs">
                <div className="flex items-center space-x-2">
                  <HiOutlineMail className="text-sm text-white" />
                  <a href="mailto:info@nexuseds.com" className="text-gray-200 no-underline hover:text-white">
                    info@nexuseds.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <HiOutlinePhone className="text-sm text-white" />
                  <span>+1 (214) 555-0199</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between space-y-4 pt-8 text-xs font-light text-gray-300 md:flex-row md:space-y-0">
            <p>&copy; {new Date().getFullYear()} NexusEDS. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="no-underline transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="no-underline transition-colors hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/contact-us" className="no-underline transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
