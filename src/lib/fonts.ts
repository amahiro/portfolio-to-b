import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import localFont from "next/font/local";

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
// 名前・数字・英字の見出し用（Outfit。SIL Open Font License）。
// ラテン文字のみ・可変ウェイトのフォントファイルをリポジトリに置いて読み込む。
export const outfit = localFont({
  src: "../fonts/outfit-latin.woff2",
  weight: "100 900",
  variable: "--font-outfit",
  display: "swap",
  fallback: ["sans-serif"],
});
