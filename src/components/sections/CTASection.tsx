"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free 45-minute strategy consultation",
  "Custom growth roadmap included",
  "No commitment required",
  "Senior specialist on every call",
];

export default function CTASection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-navy-800" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Limited spots available this month
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Ready To{" "}
            <span className="relative">
              <span className="text-accent">Scale</span>
              <svg
                className="absolute -bottom-2 left-0 right-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q50 2 100 6 Q150 10 200 6"
                  stroke="rgba(56,189,248,0.6)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Your Business?
          </h2>

          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            Let&apos;s discuss your goals and create a growth strategy tailored
            to your business. No sales pitches — just an honest conversation
            about what will move the needle.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollTo("contact")}
              size="xl"
              variant="white"
              className="group w-full sm:w-auto"
            >
              Schedule Your Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollTo("services")}
              size="xl"
              variant="white-outline"
              className="w-full sm:w-auto"
            >
              View Our Services
            </Button>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-sm text-white/50">
            Trusted by 150+ businesses across 20+ industries
          </p>
        </motion.div>
      </div>
    </section>
  );
}
