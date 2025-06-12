"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SITE_NAME, TEL, POST_CODE, ADDRESS, HOURS, HOLIDAY, INSTAGRAM_LINK } from "@/constants/site-info";
import { List, X } from "@phosphor-icons/react";
import { NotePencil } from "@phosphor-icons/react";
import {
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import GradientButton from "@/components/ui/gradient-button";

// フッターと同じナビゲーション項目を使用
const navItems = [
  { name: "トップ", href: "/" },
  // { name: "特徴", href: "/#feature" },
  { name: "制作実績", href: "/#works" },
  { name: "わたしについて", href: "/#about" },
  { name: "使用言語 / ツール", href: "/#tec" },
  // { name: "ご利用の流れ", href: "/#flow" },
  // { name: "よくある質問", href: "/#qa" },
  // { name: "ご予約・お問い合わせ", href: "/#contact" },
];

const socialIcons = [
  // { icon: FacebookLogo, name: "Facebook", href: FACEBOOK_LINK },
  { icon: InstagramLogo, name: "Instagram", href: INSTAGRAM_LINK },
  // { icon: TwitterLogo, name: "Twitter", href: TWITTER_LINK },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled && "shadow-sm bg-white"
    )}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <h1 className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="font-bold block hover:opacity-70 transition">
              {SITE_NAME}
            </Link>
          </h1>

          <div className="md:flex md:items-center md:gap-6">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium ">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.name === "ご予約・お問い合わせ" ? (
                      <GradientButton 
                        href={item.href} 
                        className="rounded-sm py-0.5 bg-[#007ACC] hover:bg-[#005fa3] text-white border-none" 
                        icon={<NotePencil size={16} weight="bold" />}
                        isIconLeft
                        noIconAnimation
                        isHeader
                      >
                        {item.name}
                      </GradientButton>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-semibold hover:opacity-60 transition-all duration-400"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2  transition hover:/75"
                >
                  <List size={20} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* モバイルメニュー */}
      <div
        className={cn(
          "fixed top-0 right-0 w-[85%] h-full z-50 bg-white transition-transform duration-300 lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between px-5">
          <Link
            href="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold block hover:opacity-70 transition"
          >
            {SITE_NAME}
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-sm pt-2 pb-2 pl-2 pr-0 hover:bg-gray-100 transition-colors"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        <nav className="px-5 py-6">
          <ul className="space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href} className={`${item.name !== "ご予約・お問い合わせ" ? "border-b border-gray-100" : ""} pb-3`}>
                {item.name === "ご予約・お問い合わせ" ? (
                  <div onClick={() => setIsOpen(false)}>
                    <GradientButton 
                      href={item.href} 
                      className="rounded-sm py-0.5 bg-[#007ACC] hover:bg-[#005fa3] text-white border-none justify-start" 
                      icon={<NotePencil size={16} weight="bold" />}
                      isIconLeft
                      noIconAnimation
                      isHeader
                    >
                      {item.name}
                    </GradientButton>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="font-semibold hover:opacity-60 transition-all duration-400 w-full text-left block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <div className="rounded-sm bg-gray-100">
              <div className="px-5 py-5">
                <p className="text-xs tracking-wide text-gray-500 uppercase">
                  お電話はこちら
                </p>
                <a
                  href={`tel:${TEL}`}
                  className="block text-2xl font-medium hover:opacity-60 transition-all duration-400 tracking-wider mt-1"
                >
                  {TEL}
                </a>
                <ul className="mt-2.5 space-y-1 text-sm text-gray-600">
                  <li>住所　{POST_CODE}<br />　　　{ADDRESS.split(' ')[0]}<br />　　　{ADDRESS.split(' ')[1]}</li>
                  <li>営業時間　{HOURS}</li>
                  <li>定休日　{HOLIDAY}</li>
                </ul>

                <div className="mt-5">
                  <ul className="flex gap-6 text-gray-700 justify-start">
                    {socialIcons.map(({ icon: Icon, name, href }) => (
                      <li key={name}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-60 transition-all duration-400 p-1 -m-1 block"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">{name}</span>
                          <Icon size={20} weight="regular" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
