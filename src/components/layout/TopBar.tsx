import { PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { siteContent } from "@/lib/content";

export function TopBar() {
  const { contactInfo } = siteContent;

  return (
    <div className="bg-[#1a1a1a] text-white/80 text-xs sm:text-sm">
      <div className="mx-auto max-w-[1200px] flex items-center justify-center sm:justify-between px-6 py-1.5">
        <div className="hidden sm:flex items-center gap-1.5">
          <ClockIcon className="w-3.5 h-3.5 text-[#c49835]" />
          <span>Mon-Fri: 8am–6pm &nbsp;|&nbsp; Sat: 9am–2pm</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-[#c49835]" />
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MailIcon className="w-3.5 h-3.5 text-[#c49835]" />
            <span className="hidden sm:inline">{contactInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
