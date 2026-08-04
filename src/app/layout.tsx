import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://prestige-landscapes.up.railway.app";
const siteName = "Prestige Landscapes & Resin Bound Surfaces";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#c49835",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Premium Resin Driveways In Cannock`,
    template: `%s | ${siteName}`,
  },
  description:
    "Beautiful, durable and low-maintenance resin driveways installed by trusted local specialists in Cannock and Staffordshire. Get a free quote today from Prestige Landscapes & Resin Bound Surfaces.",
  keywords: [
    "resin driveways cannock",
    "resin bound surfaces",
    "resin driveway installation",
    "prestige landscapes",
    "staffordshire driveway company",
    "permeable driveways",
    "resin surfacing cannock",
    "driveway installers",
    "patio installation",
    "resin pathways",
    "resin steps",
    "landscaping cannock",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName,
    title: `${siteName} | Premium Resin Driveways In Cannock`,
    description:
      "Beautiful, durable and low-maintenance resin driveways installed by trusted local specialists in Cannock and Staffordshire. Get a free quote today.",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} - Premium Resin Driveways & Landscaping in Cannock, Staffordshire`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Resin Driveways In Cannock`,
    description:
      "Beautiful, durable and low-maintenance resin driveways installed by trusted local specialists in Cannock and Staffordshire.",
    images: ["/seo/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* DNS Prefetch & Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Favicon & Icons */}
        <link rel="icon" href="/seo/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/seo/favicon.svg" />
        <link rel="apple-touch-icon" href="/seo/apple-touch-icon.png" />
        <link rel="manifest" href="/seo/site.webmanifest" />

        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
