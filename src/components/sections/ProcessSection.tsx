"use client";

import { motion } from "framer-motion";
import { Compass, Map, Zap, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery",
    subtitle: "Deep-dive into your business",
    description:
      "We start by truly understanding your business — your goals, audience, competitive landscape, and current challenges. Through in-depth discovery sessions, we gather every insight needed to build a strategy that works for you specifically, not just a generic template.",
    deliverables: ["Business audit", "Competitive analysis", "Goal alignment", "Stakeholder interviews"],
    color: "from-primary-500 to-primary-700",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy",
    subtitle: "Tailored growth blueprint",
    description:
      "Using insights from discovery, we craft a customized growth roadmap with clear milestones, KPIs, and timelines. Every recommendation is backed by data and designed to maximize your ROI while aligning with your business objectives.",
    deliverables: ["Growth roadmap", "Channel strategy", "KPI framework", "Timeline & milestones"],
    color: "from-sky-500 to-primary-600",
  },
  {
    number: "03",
    icon: Zap,
    title: "Execution",
    subtitle: "Build, launch, and manage",
    description:
      "Our senior team executes with precision and speed. From development sprints to campaign launches, we move fast without cutting corners. You get regular updates, transparent communication, and work delivered on schedule.",
    deliverables: ["Development & design", "Campaign setup", "Content creation", "QA & testing"],
    color: "from-primary-600 to-primary-800",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimization",
    subtitle: "Continuous improvement & scaling",
    description:
      "Post-launch is where our work truly begins. We monitor performance, analyze data, run A/B tests, and continuously refine our approach. As results improve, we scale winning strategies to maximize your growth trajectory.",
    deliverables: ["Performance tracking", "A/B testing", "Scaling winners", "Monthly reporting"],
    color: "from-accent to-sky-600",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="default" className="mb-4">Our Process</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            A Proven Process For{" "}
            <span className="text-gradient">Sustainable Growth</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Every engagement follows our battle-tested 4-step framework that has
            consistently delivered measurable results across 150+ projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative group"
                >
                  {/* Step number + icon */}
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 mb-5">
                    <div className="relative">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy-900 border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="lg:hidden">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:text-center">
                    <span className="hidden lg:block text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">
                      Step {step.number}
                    </span>
                    <h3 className="hidden lg:block text-xl font-bold text-navy-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-navy-400 mb-3">
                      {step.subtitle}
                    </p>
                    

                    {/* Deliverables */}
                    <ul className="space-y-2 inline-flex flex-col items-start mx-auto w-fit">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-navy-500"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
