import { Noto_Sans_JP, Noto_Serif_JP  } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
  variable: "--font-body",
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-heading',
})