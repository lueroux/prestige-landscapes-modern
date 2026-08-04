export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface TrustBadge {
  icon: string;
  title: string;
}

export interface HeroContent {
  heading: string;
  subheading: string;
  paragraphs: string[];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface LatestProjectContent {
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address?: string;
}

export interface SiteContent {
  hero: HeroContent;
  services: ServiceItem[];
  trustBadges: TrustBadge[];
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  latestProject: LatestProjectContent;
  faqItems: FaqItem[];
  contactInfo: ContactInfo;
}
