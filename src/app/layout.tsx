import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axelo.io"),
  title: {
    default: "Axelo | Accelerating What's Next | High-Performance Engineering & AI",
    template: "%s | Axelo",
  },
  description:
    "Axelo is a premier software engineering studio in Nairobi, Kenya. We specialize in high-performance AI pipelines, SaaS platforms, and immersive 3D web experiences for global enterprises.",
  keywords: [
    "Axelo",
    "software engineering company Nairobi",
    "AI development Kenya",
    "SaaS platform development Africa",
    "high-performance computing Kenya",
    "machine learning pipelines",
    "enterprise software studio",
    "React Next.js developer Kenya",
    "tech innovation Nairobi",
    "Axelo tech",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://axelo.io",
    siteName: "Axelo",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Axelo Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@axeloHQ",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://axelo.io",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://axelo.io/#organization",
      name: "Axelo",
      url: "https://axelo.io",
      logo: "https://axelo.io/logo.png",
      description: "High-performance software engineering and AI studio in Nairobi, Kenya",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@axelo.io",
        contactType: "sales",
      },
      sameAs: [
        "https://twitter.com/axeloHQ",
        "https://linkedin.com/company/axelo",
      ],
    },
    {
      "@type": "WebSite",
      name: "Axelo",
      url: "https://axelo.io",
    },
    {
      "@type": "Service",
      name: "Web Application Development",
      provider: { "@id": "https://axelo.io/#organization" },
      description: "Lightning-fast, high-performance web systems built with Next.js and TypeScript for global scalability.",
      url: "https://axelo.io/services/web-application-development",
      areaServed: "Global",
    },
    {
      "@type": "Service",
      name: "AI & Machine Learning Development",
      provider: { "@id": "https://axelo.io/#organization" },
      description: "Custom AI models and robust data pipelines tailored for complex production environments.",
      url: "https://axelo.io/services/ai-machine-learning",
      areaServed: "Global",
    },
    {
      "@type": "Service",
      name: "SaaS Platform Development",
      provider: { "@id": "https://axelo.io/#organization" },
      description: "Complete multi-tenant platform engineering covering billing, analytics, and global edge deployment.",
      url: "https://axelo.io/services/saas-platform-development",
      areaServed: "Global",
    },
    {
      "@type": "Service",
      name: "ERP & CRM Systems",
      provider: { "@id": "https://axelo.io/#organization" },
      description: "Bespoke enterprise systems to automate workflows and data management with absolute precision.",
      url: "https://axelo.io/services/erp-crm-systems",
      areaServed: "Global",
    },
    {
      "@type": "Service",
      name: "Immersive 3D Experiences",
      provider: { "@id": "https://axelo.io/#organization" },
      description: "High-performance WebGL and Three.js experiences that redefine digital interaction.",
      url: "https://axelo.io/services/immersive-3d-web",
      areaServed: "Global",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#03000A] text-[#F0F0FF]">
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
