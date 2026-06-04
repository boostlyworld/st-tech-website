"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  delay: number;
}

function StatCard({ value, suffix, prefix = "", label, description, delay }: StatCardProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group text-center p-8 rounded-2xl bg-white border border-navy-100 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Subtle gradient top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary-500 to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="text-5xl sm:text-6xl font-extrabold mb-2 tracking-tight">
        <span className="text-gradient">
          {prefix}{Math.floor(count)}{suffix}
        </span>
      </div>
      <div className="text-base font-bold text-navy-900 mb-2">{label}</div>
      <div className="text-sm text-navy-500 leading-relaxed">{description}</div>
    </motion.div>
  );
}

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across web, marketing, and growth campaigns worldwide",
    delay: 0,
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys and ongoing relationships",
    delay: 0.1,
  },
  {
    value: 10,
    suffix: "M+",
    prefix: "$",
    label: "Ad Spend Managed",
    description: "In Google, Meta, and programmatic campaigns",
    delay: 0.2,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Building, growing, and scaling digital businesses",
    delay: 0.3,
  },
];

const caseStudies = [
  {
    company: "TechFlow SaaS",
    result: "+312% organic traffic",
    service: "SEO Optimization",
    period: "6 months",
    color: "from-primary-50 to-sky-50 border-primary-100",
    badgeColor: "bg-primary-100 text-primary-700",
  },
  {
    company: "RetailPro Commerce",
    result: "4.2x ROAS",
    service: "Google Ads",
    period: "3 months",
    color: "from-sky-50 to-primary-50 border-sky-100",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    company: "MediCare Clinic",
    result: "280% more leads",
    service: "Website + SEO",
    period: "4 months",
    color: "from-primary-50 to-navy-50 border-primary-100",
    badgeColor: "bg-primary-100 text-primary-700",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-navy-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4">Results</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            Results That{" "}
            <span className="text-gradient">Speak For Themselves</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Numbers don&apos;t lie. Here's what our partners have achieved working
            with the GrowthLab team.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Case Study Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-sm font-semibold text-navy-400 uppercase tracking-widest mb-8">
            Recent Client Wins
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`rounded-2xl p-6 bg-gradient-to-br border ${cs.color} hover:shadow-md transition-all duration-300`}
              >
                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${cs.badgeColor}`}>
                  {cs.service}
                </div>
                <div className="text-2xl font-extrabold text-navy-900 mb-1">
                  {cs.result}
                </div>
                <div className="text-sm font-medium text-navy-700">{cs.company}</div>
                <div className="text-xs text-navy-400 mt-1">Within {cs.period}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
