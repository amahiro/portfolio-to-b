import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
// import Breadcrumb from "@/components/layouts/breadcrumb";
import SkipLink from "@/components/layouts/skip-link";
import { notoSansJP, notoSerif } from "@/lib/fonts";
import { SITE_URL } from "@/constants/site-info";
import GoogleAnalytics from "@/components/analytics/google-analytics";

export const metadata: Metadata = {
  title: "Hiroki Amano",
  description: "",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Hiroki Amano",
    description: "",
    type: "website",
    locale: "ja_JP",
    siteName: "Hiroki Amano",
    url: SITE_URL,
    images: [
      {
        url: "/top/about2.jpg",
        width: 1200,
        height: 630,
        alt: "Hiroki Amano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiroki Amano",
    description: "",
    images: ["/top/about2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerif.variable}`}
    >
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="yggWhJiZI0wCh71jc3dvrUePZR2zwsnKLKBq6vD-4nc" />
        <link rel="canonical" href={`${SITE_URL}`} />
      </head>
      <body className="">
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
          <SkipLink />
          <Header />
          <main className="container mx-auto">
            {/* <Breadcrumb /> */}
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
