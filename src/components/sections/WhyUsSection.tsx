"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Target, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Rocket,
    title: "Faster Delivery",
    description:
      "We operate with startup-level speed without compromising quality. Your projects launch on time, every time, with agile workflows that adapt to your needs.",
    highlight: "2x faster",
    highlightSub: "than industry average",
  },
  {
    icon: Users,
    title: "Dedicated Experts",
    description:
      "No junior freelancers. Every project is handled by senior specialists with 5+ years of industry experience in their respective fields.",
    highlight: "Senior-only",
    highlightSub: "team members",
  },
  {
    icon: Target,
    title: "Results-Focused Approach",
    description:
      "We measure success by your business outcomes — leads, conversions, revenue. Every strategy is aligned to real, measurable KPIs that matter.",
    highlight: "ROI-driven",
    highlightSub: "strategy & execution",
  },
  {
    icon: Layers,
    title: "Full-Service Growth Team",
    description:
      "One agency. All the capabilities. From design to development to marketing — we eliminate the complexity of managing multiple agencies and vendors.",
    highlight: "8 services",
    highlightSub: "under one roof",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4">
            Why GrowthLab
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            Why Businesses{" "}
            <span className="text-gradient">Partner With Us</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just another agency. We&apos;re your dedicated growth partner
            committed to your long-term success.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-2xl p-8 border border-navy-100 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-600 to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Highlight pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-50 border border-primary-100">
                      <span className="text-sm font-bold text-primary-700">
                        {feature.highlight}
                      </span>
                      <span className="text-xs text-navy-400">
                        {feature.highlightSub}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-navy-500 text-sm">
            Join{" "}
            <span className="font-semibold text-navy-900">150+ businesses</span>{" "}
            that have grown with GrowthLab
          </p>
        </motion.div>
      </div>
    </section>
  );
}
