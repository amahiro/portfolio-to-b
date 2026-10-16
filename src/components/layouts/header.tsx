"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/constants/site-info";
import { navItems } from "@/constants/nav";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";

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

  // メニューが開いている間は本文をスクロールさせず、ESC で閉じられるようにする
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white border-b transition-colors duration-300",
        isScrolled ? "border-gray-200" : "border-transparent",
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-normal text-[#14212e] block hover:opacity-70 transition"
            aria-label={`${SITE_NAME}のトップページへ戻る`}
          >
            {SITE_NAME}
          </Link>

          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-[#14212e] hover:text-[#007ACC] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden p-2 -mr-2"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <List size={20} weight="bold" />
          </button>
        </div>
      </div>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* モバイルメニュー */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 w-[85%] max-w-[420px] h-full z-50 bg-white transition-transform duration-300 lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-14 items-center justify-between px-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-normal text-[#14212e] block hover:opacity-70 transition"
          >
            {SITE_NAME}
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-sm p-2 -mr-2 hover:bg-gray-100 transition-colors"
            aria-label="メニューを閉じる"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        <nav className="px-5 py-6" aria-label="モバイルナビゲーション">
          <ul className="space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-gray-100 pb-3">
                <Link
                  href={item.href}
                  className="font-bold text-[#14212e] hover:text-[#007ACC] transition-colors w-full text-left block py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
