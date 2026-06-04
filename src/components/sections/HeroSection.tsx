"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustIndicators = [
  "Results-driven approach",
  "Dedicated experts",
  "End-to-end solutions",
  "Fast turnaround",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary blob */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px]" />
        {/* Accent blob */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        {/* Bottom blob */}
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-primary-800/30 rounded-full blur-[80px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-300 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              Full-Service Digital Growth Agency
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Websites, Marketing &{" "}
            <span className="relative">
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-accent">
                Customer Support
              </span>
            </span>
            <br />
            <span className="text-white/90">That Drive Real</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-primary-400">
              Business Growth
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We help businesses scale through high-performing websites, SEO, paid
            advertising, customer support, UI/UX design, and digital growth
            strategies that deliver measurable ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollTo("contact")}
              size="xl"
              variant="white"
              className="group w-full sm:w-auto"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollTo("services")}
              size="xl"
              variant="white-outline"
              className="group w-full sm:w-auto"
            >
              <Play className="w-4 h-4" />
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {trustIndicators.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-navy-300">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "$10M+", label: "Ad Spend Managed" },
              { value: "5+", label: "Years Experience" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/5 backdrop-blur-sm px-6 py-5 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-navy-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("trusted")}
          className="flex flex-col items-center gap-1.5 text-navy-500 hover:text-navy-300 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-current" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
