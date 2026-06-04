"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    avatar: "SM",
    avatarColor: "bg-primary-600",
    rating: 5,
    quote:
      "GrowthLab completely transformed our digital presence. Within 6 months, our organic traffic tripled and we were closing deals from leads we never had before. Their team genuinely cares about results — not just deliverables.",
    result: "+312% organic traffic",
    resultLabel: "in 6 months",
  },
  {
    name: "James Okafor",
    role: "Head of Marketing",
    company: "RetailPro Commerce",
    avatar: "JO",
    avatarColor: "bg-sky-600",
    rating: 5,
    quote:
      "We've worked with three agencies before GrowthLab. None of them communicated as clearly, moved as fast, or delivered the ROI that this team did. Our Google Ads campaigns are generating a 4.2x return consistently. We're scaling hard.",
    result: "4.2x ROAS",
    resultLabel: "Google Ads",
  },
  {
    name: "Dr. Amira Hassan",
    role: "Founder",
    company: "MediCare Clinic Group",
    avatar: "AH",
    avatarColor: "bg-indigo-600",
    rating: 5,
    quote:
      "From website redesign to SEO and now Google Ads — GrowthLab handles everything. As a medical professional, I needed a team I could trust to represent our brand professionally. They've exceeded every expectation. Patient inquiries are up 280%.",
    result: "280% more leads",
    resultLabel: "in 4 months",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            What Our Clients{" "}
            <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Don't take our word for it. Here's what business leaders who've
            worked with us have experienced firsthand.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative group bg-white rounded-2xl p-7 border border-navy-100 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-8">
                <Quote className="w-10 h-10 text-primary-200" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-navy-600 leading-relaxed flex-1 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Result badge */}
              <div className="mb-5 p-3 rounded-xl bg-primary-50 border border-primary-100">
                <div className="text-base font-bold text-primary-700">
                  {testimonial.result}
                </div>
                <div className="text-xs text-navy-500">{testimonial.resultLabel}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-navy-100">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center shrink-0`}
                >
                  <span className="text-xs font-bold text-white">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-navy-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["SM", "JO", "AH", "RK", "LP"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: `hsl(${220 + i * 25}, 70%, 45%)`,
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-navy-600">
              <span className="font-semibold text-navy-900">150+</span> happy clients
            </p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-navy-200" />
          <div className="flex items-center gap-2">
            <StarRating rating={5} />
            <span className="text-sm text-navy-600">
              <span className="font-semibold text-navy-900">4.9/5</span> average rating
            </span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-navy-200" />
          <div className="text-sm text-navy-600">
            <span className="font-semibold text-navy-900">95%</span> client retention rate
          </div>
        </motion.div>
      </div>
    </section>
  );
}
