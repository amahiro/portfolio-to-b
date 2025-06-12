// import Image from "next/image";
// import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/content/top/hero";
// import FeatureSection from "@/components/content/top/feature";
// import ProblemSection from "@/components/content/top/problem";
import AboutSection from "@/components/content/top/about";
import WorksSection from "@/components/content/top/works";
// import FlowSection from "@/components/content/top/flow";
// import QaSection from "@/components/content/top/faq";
import PriceSection from "@/components/content/top/price";
// import ContactSection from "@/components/content/top/contact";
import { SITE_NAME, SITE_URL } from "@/constants/site-info";

const description = `地域の事業者様向けに、スマホ対応・SEO対策・オリジナルデザインなど、分かりやすく丁寧に低価格でホームページ制作・運用をサポートします。まずはお気軽にご相談ください。`

export const metadata: Metadata = {
  title: `${SITE_NAME} - 地域の集客を支えるWebサイト制作`,
  description: description,
  keywords: ["ホームページ制作", "SEO", "Web制作", "運用代行", "オリジナルデザイン", "スマホ対応"],
  openGraph: {
    title: SITE_NAME,
    description: description,
    url: SITE_URL,
    images: [
      {
        url: "/top/about2.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    type: "website",
    siteName: SITE_NAME,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: description,
    images: ["/top/about2.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_NAME,
  "description": description,
  "url": SITE_URL,
  "areaServed": "日本",
  "offers": [
    "スマホ・タブレット対応",
    "SEO対策",
    "オリジナルデザイン",
    "SSL対応",
    "運用代行",
    "保守・更新サポート"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      {/* <ProblemSection /> */}
      {/* <FeatureSection /> */}
      <WorksSection />
      <AboutSection />
      <PriceSection />
      {/* <FlowSection />
      <QaSection /> */}
      {/* <ContactSection />  */}
    </>
  );
}
