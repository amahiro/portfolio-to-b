// import Image from "next/image";
import { SITE_NAME } from "@/constants/site-info";
// import {
//   // InstagramLogo,
// } from "@phosphor-icons/react/dist/ssr";
// import { TEL, HOURS, HOLIDAY, POST_CODE, ADDRESS } from "@/constants/site-info";
// import AccessSection from "@/components/content/access";

// const socialIcons = [
//   // { icon: FacebookLogo, name: "Facebook", href: FACEBOOK_LINK },
//   { icon: InstagramLogo, name: "Instagram", href: INSTAGRAM_LINK },
//   // { icon: TwitterLogo, name: "Twitter", href: TWITTER_LINK },
// ];

const navItems = [
  { name: "トップ", href: "/" },
  { name: "制作実績", href: "/#works" },
  { name: "わたしについて", href: "/#about" },
  { name: "使用言語 / ツール", href: "/#tec" },
  // { name: "料金プラン", href: "/#price" },
  // { name: "ご利用の流れ", href: "/#flow" },
  // { name: "よくある質問", href: "/#qa" },
  // { name: "ご予約・お問い合わせ", href: "/#contact" },
];

// const legalItems = [
//   { name: "プライバシーポリシー", href: "/privacy-policy" },
//   { name: "利用規約", href: "/terms-of-service" },
//   { name: "特定商取引法に基づく表記", href: "/law" },
// ];


const getCurrentYear = () => new Date().getFullYear();


export default function Footer() {
  return (
    <>
    {/* <AccessSection /> */}
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 連絡先 + SNS */}
            <div className="space-y-8">
              <div>
                <p className="heading text-2xl font-semibold">{SITE_NAME}</p>
              </div>

              {/* <ul className="flex gap-6 text-gray-700">
                {socialIcons.map(({ icon: Icon, name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-60 transition-all duration-400"
                    >
                      <span className="sr-only">{name}</span>
                      <Icon size={24} weight="regular" />
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* ナビゲーション */}
            <div className="w-full flex gap-12 justify-between sm:justify-center lg:justify-end">
              <ul className="space-y-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="heading  hover:opacity-60 transition-all duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <ul className="space-y-4 text-sm">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="heading  hover:opacity-60 transition-all duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>

          </div>
        </div>

        
      </div>
      {/* フッター下部 */}
      <div className="border-t border-gray-200 py-2 lg:py-8 text-center">
          <div className="">
            <p className="text-xs lg:text-sm text-gray-500">
              &copy; {getCurrentYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
    </>
  );
}