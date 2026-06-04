"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    id: "item-1",
    question: "How long does a website project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. A standard brochure website typically takes 3–4 weeks from kickoff to launch. E-commerce platforms or custom web applications can take 6–12 weeks. During our discovery call, we'll provide a specific timeline tailored to your requirements. We're known for delivering on time — our on-time delivery rate is 97%.",
  },
  {
    id: "item-2",
    question: "Do you provide SEO services?",
    answer:
      "Yes — SEO is one of our core services. We offer comprehensive SEO covering technical audits, on-page optimization, content strategy, link building, and local SEO. Our approach is data-driven and focused on long-term organic growth, not quick-win tactics that can penalize your site. Most clients see measurable improvement in rankings within 60–90 days.",
  },
  {
    id: "item-3",
    question: "Can you manage our advertising campaigns?",
    answer:
      "Absolutely. We manage Google Ads (Search, Display, Shopping, YouTube) and Meta Ads (Facebook & Instagram). Our paid media team handles everything from strategy and creative to campaign setup, ongoing optimization, and detailed monthly reporting. We've managed over $10M in ad spend across various industries with strong performance benchmarks.",
  },
  {
    id: "item-4",
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer flexible ongoing retainer packages that include website maintenance, performance monitoring, content updates, security patches, and priority support. Many of our clients have been with us for 3+ years because we become a true extension of their team. We also offer one-time project support if you prefer.",
  },
  {
    id: "item-5",
    question: "Can you handle customer support operations?",
    answer:
      "Yes — our Customer Support & Call Center service provides trained agents who represent your brand professionally. We offer live chat support, inbound/outbound phone support, email handling, and ticket management. We can operate as your full support team or supplement your existing team during peak periods. All agents are fluent in English and trained to match your brand voice.",
  },
  {
    id: "item-6",
    question: "What industries do you work with?",
    answer:
      "We've successfully delivered projects across a wide range of industries including SaaS & technology, e-commerce & retail, healthcare & medical, legal & professional services, real estate, hospitality & travel, education, and financial services. Our strategies are always adapted to your specific industry dynamics, audience behavior, and competitive landscape.",
  },
  {
    id: "item-7",
    question: "How do you measure and report on results?",
    answer:
      "Every client gets a custom dashboard with real-time access to their key metrics. We deliver detailed monthly reports covering performance against KPIs, budget utilization, key insights, and next month's priorities. We hold monthly strategy calls to review performance, answer questions, and align on upcoming priorities. Transparency is one of our core values.",
  },
  {
    id: "item-8",
    question: "What does the onboarding process look like?",
    answer:
      "After signing, you'll be assigned a dedicated account manager and introduced to your project team. We run a structured kickoff meeting to align on goals, access requirements, communication preferences, and timelines. Within 48 hours, you'll have access to your client portal, project management workspace, and reporting dashboard. Most projects are underway within one week of signing.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-navy-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="default" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about working with GrowthLab. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#contact" className="text-primary-600 font-semibold hover:underline">
              Ask us directly.
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl border border-navy-100 shadow-card overflow-hidden divide-y divide-navy-100"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="px-6">
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-navy-500">
            Still have questions?{" "}
            <a href="#contact" className="text-primary-600 font-semibold hover:underline">
              Book a free consultation
            </a>{" "}
            We&apos;ll answer everything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
