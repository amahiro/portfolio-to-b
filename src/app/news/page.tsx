"use client";

import AnimatedTitle from "@/components/ui/animated-title";
import Link from "next/link";
import { newsList } from "@/constants/news";

export default function NewsArchivePage() {
  return (
    <main>
      <div className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-30 lg:pt-40">
        <section className="bg-white">
          <div className="mx-auto">
            <AnimatedTitle
              japaneseTitle="お知らせ"
              englishTitle="NEWS"
            />
            <ul >
              {newsList.map((item) => (
                <li key={item.id} className="border-b border-gray-200">
                  <Link href={item.link ?? `/news/${item.id}`} className="flex flex-col sm:flex-row items-start sm:items-center py-6 group hover: transition-colors gap-1 sm:gap-0">
                    <div className="flex items-center w-full sm:w-auto mb-1 sm:mb-0">
                      <span className="text-xs font-semibold  bg-gray-100 rounded px-3 py-1 mr-4 shrink-0 w-28 text-center inline-block">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 shrink-0 w-24 text-center inline-block">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center w-full md:pl-6">
                      <span className="flex-1  text-sm font-medium truncate-2-lines group-hover:underline">
                        {item.title}
                      </span>
                      <span className="ml-2 text-gray-400 group-hover: transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <style jsx>{`
              .truncate-2-lines {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
              }
            `}</style>
          </div>
        </section>
      </div>
    </main>
  );
} 