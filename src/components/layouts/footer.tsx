import Link from "next/link";
import { SITE_NAME } from "@/constants/site-info";
import { navItems } from "@/constants/nav";

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-[#14212e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-normal">
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-gray-500">Webサイト制作 ポートフォリオ</p>
          </div>

          <ul className="space-y-4 text-sm sm:columns-2 sm:gap-12 md:justify-self-end">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#007ACC] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 lg:py-5 text-center">
        <p className="font-[family-name:var(--font-outfit)] text-xs tracking-normal text-gray-500">
          &copy; {getCurrentYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
