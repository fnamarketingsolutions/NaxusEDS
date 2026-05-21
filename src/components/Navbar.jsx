import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Engineering Drawing Service",
    href: "#",
    megaMenu: true,
    children: [
      {
        label: "Structural Design",
        href: "/structural-design",
        desc: "Advanced structural drafting and detailing services tailored for residential, commercial, and industrial construction projects.",
      },
      {
        label: "Civil Engineering",
        href: "/civil-engineering",
        desc: "Professional civil engineering plans and layouts designed to support efficient infrastructure and land development projects.",
      },
      {
        label: "MEP Service",
        href: "/mep-service",
        desc: "Coordinated MEP drafting solutions ensuring accurate integration of mechanical, electrical, and plumbing systems.",
      }, 
      {
        label: "Pool Engineering",
        href: "/pool-engineering",
        desc: "Custom pool engineering drawings with precise specifications, structural integrity, and modern aquatic design standards.",
      },
    ],
  },
  {
    label: "Architectural Design Service",
    href: "/architectural-design-service",
    megaMenu: true,
    children: [
      {
        label: "Architectural",
        href: "/architectural",
        desc: "Creative and functional architectural design services focused on innovative planning and high-quality construction documentation.",
      },
      {
        label: "Facade / Building",
        href: "/facade-building",
        desc: "Modern facade and exterior design solutions that enhance building aesthetics, sustainability, and performance.",
      },
      {
        label: "3D Visualization",
        href: "/3d-visualization",
        desc: "High-end 3D visualization and rendering services that provide realistic project previews and immersive presentations.",
      },
    ],
  },
  {
    label: "BIM Service",
    href: "/bim-service",
    megaMenu: true,
    children: [
      {
        label: "Architectural BIM Services",
        href: "/architectural-bim-services",
        desc: "Detailed architectural BIM models developed to improve visualization, coordination, and construction documentation accuracy.",
      },
      {
        label: "Structural BIM Services",
        href: "/structural-bim-services",
        desc: "Comprehensive structural BIM solutions delivering precise modeling, efficient coordination, and streamlined project execution.",
      },
      {
        label: "MEP BIM Services",
        href: "/mep-bim-services",
        desc: "Integrated MEP BIM services that optimize system coordination, reduce clashes, and improve construction efficiency.",
      },
      {
        label: "Clash Detection Services",
        href: "/clash-detection-services",
        desc: "Reliable clash detection services that identify coordination issues early and minimize costly on-site conflicts.",
      },
      {
        label: "BIM Coordination",
        href: "/bim-coordination-services",
        desc: "End-to-end BIM coordination services ensuring seamless collaboration between architectural, structural, and MEP disciplines.",
      },
      {
        label: "CAD to BIM",
        href: "/cad-to-bim-services",
        desc: "Efficient CAD to BIM conversion services transforming traditional drawings into intelligent and accurate BIM models.",
      },
      {
        label: "Revit Family Creation",
        href: "/revit-family-creation-services",
        desc: "Custom Revit family development services designed to improve modeling consistency, efficiency, and project standards.",
      },
      {
        label: "Point Cloud to BIM Services",
        href: "/point-cloud-services",
        desc: "Precise point cloud to BIM modeling services that convert scanned site data into accurate digital building models.",
      },
      {
        label: "Accurate Shop Drawings Creation",
        href: "/shop-drawings-services",
        desc: "Detailed and fabrication-ready shop drawings prepared to support smooth manufacturing and construction workflows.",
      },
    ],
  },
  { label: "Rebar Fabrication", href: "/rebar-fabrication-services" },
  { label: "Light Gauge Steel Fabrication", href: "/light-gauge-steel-fabrication" },
  { label: "Contact Us", href: "/contact-us" },
];

function getGridCols(count) {
  if (count <= 3) return 3;
  if (count <= 4) return 4;
  return 3;
}

const gridColClass = {
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const navLinkClass =
  "rounded-md px-3 py-2 text-sm font-medium tracking-wide whitespace-nowrap text-[#1a1a1a] no-underline transition-colors hover:bg-[#fdf2f1] hover:text-[#c0392b]";

const dropdownBtnClass = (open) =>
  [
    "flex cursor-pointer items-center gap-1.5 rounded-md border-none px-3 py-2 text-sm font-medium tracking-wide whitespace-nowrap transition-colors",
    open
      ? "bg-[#fdf2f1] text-[#c0392b]"
      : "bg-transparent text-[#1a1a1a] hover:bg-[#fdf2f1] hover:text-[#c0392b]",
  ].join(" ");

function MegaMenuDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <a href={item.href} className={navLinkClass}>
        {item.label}
      </a>
    );
  }

  if (!item.megaMenu) {
    return (
      <motion.div
        ref={ref}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button type="button" className={dropdownBtnClass(open)}>
          {item.label}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-[calc(100%+4px)] left-0 z-[1000] min-w-[220px] overflow-hidden rounded-[10px] border border-[#f0e8e7] bg-white py-1.5 shadow-[0_8px_30px_rgba(192,57,43,0.10),0_2px_8px_rgba(0,0,0,0.06)]"
            >
              {item.children.map((child, i) => (
                <a
                  key={i}
                  href={child.href}
                  className="flex items-center gap-2 border-l-[3px] border-transparent px-[18px] py-2.5 text-[13.5px] font-normal text-[#2d2d2d] no-underline transition-colors hover:border-l-[#c0392b] hover:bg-[#fdf2f1] hover:text-[#c0392b]"
                >
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#c0392b" />
                  </svg>
                  {child.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  const cols = getGridCols(item.children.length);

  return (
    <div
      ref={ref}
      className="static"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button type="button" className={dropdownBtnClass(open)}>
        {item.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[68px] z-[998] border-t-2 border-b border-[#c0392b] border-b-[#f0e8e7] bg-white py-8 shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="mb-7 flex items-center gap-2.5 border-b border-[#f0e8e7] pb-4">
                <span className="text-[17px] font-bold tracking-tight text-[#1a1a1a]">
                  {item.label}
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="#c0392b"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`grid gap-4 lg:gap-6 ${gridColClass[cols]}`}>
                {item.children.map((child, i) => (
                  <MegaMenuCard key={i} child={child} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MegaMenuCard({ child }) {
  return (
    <a
      href={child.href}
      className="group block cursor-pointer rounded-lg border border-transparent p-3.5 no-underline transition-colors hover:border-[#f0e8e7] hover:bg-[#fdf9f9]"
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-[13.5px] leading-snug font-semibold tracking-wide text-[#1a1a1a] transition-colors group-hover:text-[#c0392b]">
          {child.label}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          className="shrink-0 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="#c0392b"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {child.desc && (
        <p className="m-0 text-xs leading-relaxed font-normal text-[#777]">
          {child.desc}
        </p>
      )}
    </a>
  );
}

function MobileMenuItem({ item, depth = 0 }) {
  const [open, setOpen] = useState(false);

  const depthPad = ["", "pl-10", "pl-14", "pl-[72px]", "pl-[88px]"];
  const padClass = [
    depth === 0 ? "px-6 py-3.5" : "py-2.5 pr-6",
    depth > 0 ? depthPad[Math.min(depth, depthPad.length - 1)] : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!item.children) {
    return (
      <a
        href={item.href}
        className={[
          "block no-underline transition-colors hover:bg-[#fdf2f1]",
          padClass,
          depth === 0
            ? "border-b border-[#f5eeee] text-[15px] font-semibold tracking-wide text-[#1a1a1a]"
            : "text-[13.5px] font-normal text-[#555]",
        ].join(" ")}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={[
          "flex w-full cursor-pointer items-center justify-between border-none text-left transition-colors",
          padClass,
          depth === 0 ? "border-b border-[#f5eeee]" : "",
          open
            ? "bg-[#fdf2f1] text-[#c0392b]"
            : depth === 0
              ? "bg-transparent text-[#1a1a1a]"
              : "bg-transparent text-[#555]",
          depth === 0 ? "text-[15px] font-semibold" : "text-[13.5px] font-medium",
        ].join(" ")}
      >
        {item.label}
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-[#fdf9f9]"
          >
            {item.children.map((child, i) => (
              <MobileMenuItem key={i} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={[
          "sticky top-0 z-[999] w-full max-w-[100vw] bg-white border-b-[1.5px] transition-shadow duration-300",
          scrolled
            ? "border-[#f0e8e7] shadow-[0_2px_20px_rgba(192,57,43,0.07)]"
            : "border-[#f5f0ef] shadow-none",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[68px] max-w-[90%] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex shrink-0 items-center gap-2.5">
            
            <div>
              <div className="text-base leading-tight font-bold tracking-tight text-[#1a1a1a]">
                Nexus<span className="text-[#c0392b]">EDS</span>
              </div>
              <div className="text-[10px] font-normal tracking-[0.12em] text-[#999] uppercase">
                Engineering Solutions
              </div>
            </div>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-hidden xl:flex">
            {NAV_ITEMS.map((item, i) => (
              <MegaMenuDropdown key={i} item={item} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="ml-auto flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 xl:hidden"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 rounded-sm bg-[#1a1a1a]" />
            <span className="h-0.5 w-[18px] rounded-sm bg-[#c0392b]" />
            <span className="h-0.5 w-6 rounded-sm bg-[#1a1a1a]" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[1000] bg-black/45"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 z-[1001] flex h-dvh w-[min(100%,320px)] flex-col overflow-y-auto bg-white shadow-[-4px_0_30px_rgba(0,0,0,0.12)]"
            >
              <div className="sticky top-0 z-[1] flex items-center justify-between border-b-[1.5px] border-[#f0e8e7] bg-white px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#c0392b] to-[#922b21]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 21L12 3L21 21"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 15H18"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[15px] leading-tight font-bold tracking-tight text-[#1a1a1a]">
                      NEXUS<span className="text-[#c0392b]">EDS</span>
                    </div>
                    <div className="text-[9px] font-normal tracking-[0.12em] text-[#999] uppercase">
                      Engineering Solutions
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-none bg-[#fdf2f1] text-[#c0392b]"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 3L13 13M13 3L3 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                {NAV_ITEMS.map((item, i) => (
                  <MobileMenuItem key={i} item={item} depth={0} />
                ))}
              </div>

              <div className="border-t-[1.5px] border-[#f0e8e7] bg-[#fdf9f9] px-6 py-4">
                <div className="text-[11px] tracking-wider text-[#aaa]">
                  © 2024 NexusEDS
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
