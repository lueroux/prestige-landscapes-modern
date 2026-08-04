import type { Metadata } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { UvStableSection } from "@/components/sections/UvStableSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { LatestProject } from "@/components/sections/LatestProject";
import { FaqContactSection } from "@/components/sections/FaqContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";
import { siteContent } from "@/lib/content";
import {
  generateOrganizationSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/lib/seo";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://prestige-landscapes.up.railway.app";
const siteName = "Prestige Landscapes & Resin Bound Surfaces";

export const metadata: Metadata = {
  title: `${siteName} | Premium Resin Driveways In Cannock`,
  description:
    "Beautiful, durable and low-maintenance resin driveways installed by trusted local specialists in Cannock and Staffordshire. Get a free quote today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Premium Resin Driveways In Cannock`,
    description:
      "Beautiful, durable and low-maintenance resin driveways installed by trusted local specialists in Cannock and Staffordshire.",
    url: baseUrl,
  },
  other: {
    "geo.region": "GB-STS",
    "geo.placename": "Cannock",
    "geo.position": "52.6904;-2.0289",
    ICBM: "52.6904, -2.0289",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(siteContent)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema(siteContent)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(siteContent)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema()),
        }}
      />

      <ScrollProgress />
      <TopBar />
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <UvStableSection />
        <ProcessSection />
        <ReviewsSection />
        <LatestProject />
        <FaqContactSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
