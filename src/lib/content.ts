import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  hero: {
    heading: "Prestige Landscapes & Resin Bound Surfaces",
    subheading:
      "Beautiful, durable and low-maintenance resin driveways installed by trusted local specialists.",
    paragraphs: [
      "At Prestige Landscapes & Resin Bound Surfaces, we create stunning resin bound driveways designed to transform your property's appearance while adding long-lasting value and kerb appeal.",
      "We provide professional resin driveway installations across Cannock and surrounding Staffordshire areas using premium quality materials and expert workmanship.",
    ],
    ctaText: "Get A Free Quote",
    ctaHref: "#quote",
    imageSrc: "/images/hero-specs.png",
    imageAlt: "resin driveway installation specs",
  },
  services: [
    { icon: "driveway", title: "Driveways", description: "Stunning resin bound driveways that transform your home's entrance" },
    { icon: "pathway", title: "Pathways", description: "Beautiful, slip-resistant paths for gardens and outdoor spaces" },
    { icon: "patio", title: "Patios", description: "Elegant outdoor living areas perfect for entertaining" },
    { icon: "steps", title: "Steps & Stairways", description: "Safe, durable steps with outstanding visual appeal" },
  ],
  trustBadges: [
    { icon: "shield", title: "Fully Insured" },
    { icon: "check", title: "Free Quotes" },
    { icon: "medal", title: "5 Years Guarantee" },
    { icon: "pound", title: "Competitive Pricing" },
  ],
  processSteps: [
    {
      step: 1,
      title: "Free Quote",
      description:
        "We visit your property and provide a free no-obligation quotation tailored to your needs.",
      icon: "quote",
    },
    {
      step: 2,
      title: "Preparation",
      description:
        "We prepare the groundworks and install a strong sub-base foundation for lasting results.",
      icon: "shield",
    },
    {
      step: 3,
      title: "Installation",
      description:
        "Premium resin and aggregates are professionally hand laid for a flawless finish.",
      icon: "check",
    },
    {
      step: 4,
      title: "Final Checks",
      description:
        "Once cured, we complete final checks, tidy the area and hand over your new driveway ready to use.",
      icon: "star",
    },
  ],
  testimonials: [
    {
      quote:
        "Brad and team were amazing — excellent workmanship and really good communication. Brad put me at ease and I was more than happy with his suggestions and recommendations.",
      author: "Lisa R.",
      rating: 5,
    },
    {
      quote:
        "The workmanship and result was first class, I'm thoroughly delighted with my patio and I whole heartedly fully recommend this fantastic company.",
      author: "Rachel B.",
      rating: 5,
    },
    {
      quote:
        "Cannot recommend these guys enough. Our new resin driveway has completely transformed the look of our home. Professional, tidy, and incredibly hardworking.",
      author: "Mark T.",
      rating: 5,
    },
  ],
  latestProject: {
    title: "Latest Project",
    description:
      "We recently completed this stunning patio in Rugeley with retaining sleeper walls and a charcoal block edge border.",
    images: [
      { src: "/images/project-1.jpg", alt: "Project photo 1", width: 400, height: 516 },
      { src: "/images/project-2.jpg", alt: "Project photo 2", width: 400, height: 516 },
      { src: "/images/project-3.jpg", alt: "Project photo 3", width: 400, height: 516 },
      { src: "/images/project-4.jpg", alt: "Project photo 4", width: 400, height: 516 },
    ],
  },
  faqItems: [
    {
      question: "How long does a resin driveway last?",
      answer:
        "A professionally installed resin driveway can last 20 years or more with minimal maintenance, making it an excellent long-term investment.",
    },
    {
      question: "Are resin driveways permeable?",
      answer:
        "Yes, resin bound systems are fully SUDS-compliant, allowing water to drain naturally through the surface and reducing puddling.",
    },
    {
      question: "Do resin driveways crack?",
      answer:
        "Resin driveways are flexible and far less likely to crack compared to traditional concrete or tarmac surfaces.",
    },
    {
      question: "Are resin driveways low maintenance?",
      answer:
        "Absolutely. An occasional sweep and power wash is all that's needed to keep your resin driveway looking pristine.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover Cannock, Stafford, Rugeley, and throughout Staffordshire. Contact us to check if we cover your area.",
    },
  ],
  contactInfo: {
    phone: "",
    email: "info@prestigelandscapes.co.uk",
  },
};
