"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const services = [
  "Website Development",
  "SEO Optimization",
  "Google Ads Management",
  "Meta Ads Management",
  "Customer Support & Call Center",
  "UI/UX Design",
  "AI Automation",
  "Digital Growth Strategy",
  "Multiple Services",
];

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  service?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@growthlab.agency",
    href: "mailto:hello@growthlab.agency",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 800 GROWTH",
    href: "tel:+18009growth",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "New York, NY 10001",
    href: "#",
  },
];

const trustBadges = [
  { icon: Clock, text: "We respond within 4 hours" },
  { icon: Shield, text: "100% confidential" },
  { icon: CheckCircle2, text: "No obligation" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="default" className="mb-4">Contact Us</Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 tracking-tight">
            Let&apos;s{" "}
            <span className="text-gradient">Start Growing</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-xl mx-auto leading-relaxed">
            Tell us about your project and goals. We&apos;ll get back to you
            within 4 hours with a personalized response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-navy-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 group bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-400 uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-navy-900 group-hover:text-primary-700 transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="p-5 rounded-xl bg-navy-50 border border-navy-100">
              <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-3">
                Our Commitment
              </p>
              <div className="space-y-2.5">
                {trustBadges.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-navy-600">
                    <Icon className="w-4 h-4 text-primary-600 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Office hours */}
            <div className="p-5 rounded-xl bg-primary-50 border border-primary-100">
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                Office Hours
              </p>
              <p className="text-sm text-navy-700 font-medium">
                Mon–Fri: 9am – 6pm EST
              </p>
              <p className="text-xs text-navy-500 mt-1">
                Emergency support available 24/7 for active clients
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-primary-50 border border-primary-200"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. A senior team member will personally
                  respond within 4 hours with next steps.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-navy-100 shadow-card p-8 space-y-5"
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={errors.fullName ? "border-red-300 focus:border-red-400" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={errors.email ? "border-red-300 focus:border-red-400" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-1.5">
                  <Label htmlFor="service">
                    Service Needed <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`flex h-11 w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-100 hover:border-navy-300 appearance-none cursor-pointer ${
                      errors.service
                        ? "border-red-300 focus:border-red-400"
                        : "border-navy-200 focus:border-primary-400"
                    } ${!formData.service ? "text-navy-400" : ""}`}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500">{errors.service}</p>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <Label htmlFor="projectDetails">Project Details</Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your business, goals, current challenges, and what success looks like for you..."
                    className="min-h-[130px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Get Started
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-navy-400">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline hover:text-primary-600">
                    Privacy Policy
                  </a>
                  . We&apos;ll never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
