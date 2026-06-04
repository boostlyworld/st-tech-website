import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growthlab.agency"),
  title: {
    default: "S&T Tech — Websites, Marketing & Digital Growth Agency",
    template: "%s | S&T Tech",
  },
  description:
    "GrowthLab helps businesses scale through high-performing websites, SEO, paid advertising, customer support, UI/UX design, and digital growth strategies. Results-driven. Enterprise-ready.",
  keywords: [
    "digital marketing agency",
    "website development",
    "SEO optimization",
    "Google Ads management",
    "Meta Ads",
    "UI/UX design",
    "customer support outsourcing",
    "AI automation",
    "digital growth strategy",
    "lead generation",
  ],
  authors: [{ name: "GrowthLab Agency" }],
  creator: "GrowthLab Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthlab.agency",
    siteName: "GrowthLab Agency",
    title: "GrowthLab — Websites, Marketing & Digital Growth Agency",
    description:
      "We help businesses scale through high-performing websites, SEO, paid advertising, customer support, UI/UX design, and digital growth strategies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrowthLab Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthLab — Websites, Marketing & Digital Growth Agency",
    description:
      "We help businesses scale through high-performing websites, SEO, paid advertising, customer support, UI/UX design, and digital growth strategies.",
    images: ["/og-image.png"],
    creator: "@growthlabagency",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GrowthLab Agency",
              url: "https://growthlab.agency",
              logo: "https://growthlab.agency/logo.png",
              description:
                "Full-service digital agency specializing in websites, marketing, and business growth strategies.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-GROWTH",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://twitter.com/growthlabagency",
                "https://linkedin.com/company/growthlabagency",
                "https://facebook.com/growthlabagency",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Worldwide",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Agency Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Optimization",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Ads Management",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Meta Ads Management",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
