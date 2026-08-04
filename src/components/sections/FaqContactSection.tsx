"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, SendIcon, CheckCircleIcon, Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations";
import { siteContent } from "@/lib/content";

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {siteContent.faqItems.map((item, i) => (
        <div
          key={i}
          className="border border-gray-100 rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className="text-[15px] font-semibold text-[#1a1a1a] pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c49835]/10 text-[#c49835] flex items-center justify-center"
            >
              <ChevronDownIcon className="w-4 h-4" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-[14px] text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate send for now — replace with real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
    formRef.current?.reset();

    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-[#f9fafb] border border-gray-100 rounded-xl text-[15px] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#c49835] focus:ring-4 focus:ring-[#c49835]/10 transition-all duration-300";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input id="name" type="text" name="name" placeholder="Your Name" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <input id="phone" type="tel" name="phone" placeholder="Phone Number" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input id="email" type="email" name="email" placeholder="Email Address" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={4}
          required
          className={cn(inputClasses, "resize-none")}
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={cn(
          "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300",
          status === "sent"
            ? "bg-green-500 shadow-[0_4px_16px_rgba(34,197,94,0.3)]"
            : "bg-[#c49835] hover:bg-[#9e7929] shadow-[0_4px_16px_rgba(196,152,53,0.3)] hover:shadow-[0_6px_20px_rgba(196,152,53,0.4)]"
        )}
        whileHover={status === "idle" ? { scale: 1.02 } : {}}
        whileTap={status === "idle" ? { scale: 0.98 } : {}}
      >
        {status === "idle" && (
          <>
            Send Message
            <SendIcon className="w-4 h-4" />
          </>
        )}
        {status === "sending" && (
          <>
            Sending...
            <Loader2Icon className="w-4 h-4 animate-spin" />
          </>
        )}
        {status === "sent" && (
          <>
            Message Sent!
            <CheckCircleIcon className="w-4 h-4" />
          </>
        )}
        {status === "error" && "Try Again"}
      </motion.button>
    </form>
  );
}

export function FaqContactSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#f9fafb]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* FAQ Column */}
          <ScrollReveal className="flex-1">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              Got Questions?
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1] mb-8">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </ScrollReveal>

          {/* Contact Form Column */}
          <ScrollReveal direction="right" className="flex-1" id="quote">
            <span className="text-sm font-semibold text-[#c49835] uppercase tracking-[0.2em]">
              Get In Touch
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#1a1a1a] mt-2 tracking-tight leading-[1.1] mb-8">
              Get a Free Quote
            </h2>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
