"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Salesforce", abbr: "SF" },
  { name: "Shopify", abbr: "SH" },
  { name: "HubSpot", abbr: "HS" },
  { name: "Stripe", abbr: "ST" },
  { name: "Notion", abbr: "NO" },
  { name: "Figma", abbr: "FG" },
  { name: "Zendesk", abbr: "ZD" },
  { name: "Intercom", abbr: "IC" },
];

// Inline SVG logo placeholders that look realistic
const LogoPlaceholder = ({ name, abbr }: { name: string; abbr: string }) => (
  <div className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white border border-navy-100 shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300 group cursor-default">
    <div className="w-7 h-7 rounded-md bg-navy-900 flex items-center justify-center shrink-0">
      <span className="text-[10px] font-bold text-white tracking-tight">{abbr}</span>
    </div>
    <span className="text-sm font-semibold text-navy-700 group-hover:text-navy-900 transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

export default function TrustedSection() {
  return (
    <section id="trusted" className="py-16 bg-navy-50/50 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-navy-400 uppercase tracking-widest">
            Trusted by Growing Businesses Worldwide
          </p>
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-50/50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 overflow-hidden">
            {/* Animated marquee effect via CSS */}
            <motion.div
              className="flex gap-4 shrink-0"
              animate={{ x: [0, -50 + "%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "max-content" }}
            >
              {[...companies, ...companies].map((company, i) => (
                <LogoPlaceholder key={`${company.name}-${i}`} {...company} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
