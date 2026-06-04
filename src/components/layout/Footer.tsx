import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    "Website Development",
    "SEO Optimization",
    "Google Ads Management",
    "Meta Ads Management",
    "Customer Support",
    "UI/UX Design",
    "AI Automation",
    "Digital Growth Strategy",
  ],
  company: [
    "About Us",
    "Our Process",
    "Case Studies",
    "Blog",
    "Careers",
    "Press",
  ],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4 w-32 h-32 relative">
              <Image
                src="/logo.png"
                alt="S&T Tech"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-xs">
              A full-service digital agency helping businesses grow through
              high-performing websites, marketing, and digital strategies.
            </p>
            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:hello@growthlab.agency"
                className="flex items-center gap-2.5 text-sm text-navy-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary-400 group-hover:text-primary-300 shrink-0" />
                hello@growthlab.agency
              </a>
              <a
                href="tel:+18009growth"
                className="flex items-center gap-2.5 text-sm text-navy-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary-400 group-hover:text-primary-300 shrink-0" />
                +1 800 GROWTH
              </a>
              <div className="flex items-center gap-2.5 text-sm text-navy-400">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                New York, NY 10001
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-navy-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-navy-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-navy-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-navy-400 mb-4 leading-relaxed">
              Get growth tips and agency updates delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-navy-800 border border-navy-700 text-sm text-white placeholder:text-navy-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-500">
            © {new Date().getFullYear()} GrowthLab Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-navy-500 hover:text-navy-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
