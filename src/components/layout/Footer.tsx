import Link from "next/link";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { siteContent } from "@/lib/content";

const footerLinks = {
  services: [
    { label: "Resin Driveways", href: "#services" },
    { label: "Pathways", href: "#services" },
    { label: "Patios", href: "#services" },
    { label: "Steps & Stairways", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#home" },
    { label: "Our Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Get a Quote", href: "#quote" },
    { label: "Contact", href: "mailto:info@prestigelandscapes.co.uk" },
  ],
};

export function Footer() {
  const { contactInfo } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">
              Prestige Landscapes
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium resin bound driveway and surfacing installations in Cannock
              and throughout Staffordshire.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c49835] transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-[#c49835]" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c49835] transition-colors"
              >
                <MailIcon className="w-4 h-4 text-[#c49835]" />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPinIcon className="w-4 h-4 text-[#c49835] flex-shrink-0" />
                Cannock, Staffordshire
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c49835] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c49835] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c49835] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} Prestige Landscapes & Resin Bound Surfaces. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Fully insured • Free quotes • 5-year guarantee
          </p>
        </div>
      </div>
    </footer>
  );
}
