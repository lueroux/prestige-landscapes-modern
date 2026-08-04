import type { SiteContent } from "@/types/content";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://prestige-landscapes.up.railway.app";
const siteName = "Prestige Landscapes & Resin Bound Surfaces";

export function generateOrganizationSchema(content: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/images/hero-bg.png`,
    description:
      "Premium resin bound driveway and surfacing installations in Cannock and Staffordshire. Professional landscaping, patios, pathways, and steps.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cannock",
      addressRegion: "Staffordshire",
      addressCountry: "GB",
    },
    telephone: content.contactInfo.phone,
    email: content.contactInfo.email,
    priceRange: "££",
    areaServed: [
      { "@type": "City", name: "Cannock" },
      { "@type": "City", name: "Stafford" },
      { "@type": "City", name: "Rugeley" },
      { "@type": "AdministrativeArea", name: "Staffordshire" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: content.testimonials.length.toString(),
      bestRating: "5",
    },
    review: content.testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
    })),
  };
}

export function generateFaqSchema(content: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };
}

export function generateLocalBusinessSchema(content: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: baseUrl,
    telephone: content.contactInfo.phone,
    email: content.contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cannock",
      addressRegion: "Staffordshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.6904,
      longitude: -2.0289,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.6904,
        longitude: -2.0289,
      },
      geoRadius: "30000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
}
