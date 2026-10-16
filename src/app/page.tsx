import { Metadata } from "next";
import HomeHero from "@/components/content/home/hero";
import HomeStrength from "@/components/content/home/strength";
import HomeWorks from "@/components/content/home/works";
import HomeAbout from "@/components/content/home/about";
import HomeSkills from "@/components/content/home/skills";
import HomeCareer from "@/components/content/home/career";
import HomeAi from "@/components/content/home/ai";
import HomeEffects, { HomeNoScriptStyle } from "@/components/content/home/home-effects";
import "@/components/content/home/home.css";
import { SITE_NAME, SITE_URL } from "@/constants/site-info";

const description = `Web制作歴 約5年の天野広揮のポートフォリオです。制作会社・事業会社でコーポレートサイト・LP・ECサイトの制作に携わり、コーディングを軸にCMS構築・UI改善・デザイン・アクセス解析まで対応しています。`;

export const metadata: Metadata = {
  title: `${SITE_NAME} - Webサイト制作 ポートフォリオ`,
  description: description,
  keywords: ["ポートフォリオ", "Web制作", "コーディング", "Next.js", "WordPress", "Tailwind CSS", "Claude Code", "AI駆動開発"],
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

export default function Home() {
  return (
    // スタイルは home.css（.tp の中だけに効く）
    <div className="tp" id="top">
      <HomeNoScriptStyle />
      <HomeHero />
      <HomeStrength />
      <HomeWorks />
      <HomeAi />
      <HomeCareer />
      <HomeSkills />
      <HomeAbout />
      <HomeEffects />
    </div>
  );
}
