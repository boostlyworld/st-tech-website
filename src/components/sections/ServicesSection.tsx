"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Search,
  BarChart3,
  Share2,
  Headphones,
  Palette,
  Bot,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built for performance, conversions, and scalability. From landing pages to full enterprise platforms.",
    tags: ["Next.js", "WordPress", "Webflow"],
    color: "blue",
    featured: false,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve rankings, visibility, and organic growth with data-driven SEO strategies that deliver long-term results.",
    tags: ["Technical SEO", "Content", "Link Building"],
    color: "sky",
    featured: false,
  },
  {
    icon: BarChart3,
    title: "Google Ads Management",
    description:
      "Generate qualified leads through strategic paid campaigns optimized for maximum ROI and cost efficiency.",
    tags: ["PPC", "Search Ads", "Display"],
    color: "blue",
    featured: false,
  },
  {
    icon: Share2,
    title: "Meta Ads Management",
    description:
      "Scale customer acquisition across Facebook and Instagram with creative, data-backed advertising campaigns.",
    tags: ["Facebook", "Instagram", "Retargeting"],
    color: "sky",
    featured: false,
  },
  {
    icon: Headphones,
    title: "Customer Support & Call Center",
    description:
      "Professional support teams that enhance customer experience, reduce churn, and build lasting brand loyalty.",
    tags: ["24/7 Support", "Live Chat", "Voice"],
    color: "blue",
    featured: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design experiences that convert visitors into customers with research-backed interfaces and intuitive flows.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    color: "sky",
    featured: false,
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate repetitive tasks, lead handling, and business processes to free up your team for high-value work.",
    tags: ["Workflows", "Chatbots", "Integrations"],
    color: "blue",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Strategy",
    description:
      "Comprehensive strategies focused on long-term business growth, market expansion, and competitive advantage.",
    tags: ["Analytics", "Roadmap", "KPIs"],
    color: "sky",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative group rounded-2xl p-6 border transition-all duration-300 cursor-default card-shine overflow-hidden ${
        service.featured
          ? "border-primary-200 bg-gradient-to-br from-primary-50 to-sky-50 shadow-card"
          : "border-navy-100 bg-white hover:border-primary-200 shadow-card hover:shadow-card-hover"
      }`}
    >
      {service.featured && (
        <div className="absolute top-4 right-4">
          <Badge variant="default" className="text-xs">Most Popular</Badge>
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
          service.featured
            ? "bg-primary-600 text-white"
            : "bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <h3 className="text-base font-bold text-navy-900 mb-2.5 group-hover:text-primary-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-navy-500 leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-navy-50 text-navy-500 border border-navy-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more link */}
      <div className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
        Learn More <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
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
            Our Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            Everything You Need To{" "}
            <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            From building your digital presence to managing growth — we provide
            the complete stack of services modern businesses need to thrive.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
