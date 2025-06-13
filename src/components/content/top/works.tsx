"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/blocks/section-wrapper";
import SectionHeading from "@/components/blocks/section-heading";
import { Images } from "@phosphor-icons/react/dist/ssr";

const works = [
  {
    title: "もみほぐしサロン様",
    plan: "スタンダードプラン",
    lead: "メニューや効果が伝わる構成と、リラックス感のあるデザインで、来院数アップに貢献しました。",
    image: "/works/works1.jpg",
    url: "https://hogushi-ayus.com/",
  },
  // {
  //   title: "タピオカ店 コラボ商品LP",
  //   plan: "コーディング代行",
  //   lead: "LPのコーディングを2日で仕上げ。パーフェクトピクセルで再現性高く、クオリティ重視の仕上がりに。",
  //   image: "/works/works2.jpg",
  //   url: "",
  // },
  {
    title: "Web制作会社様 各プランのテンプレート1",
    plan: "スタンダードプラン",
    lead: "構成・デザインを一から担当。女性らしさと安心感を意識した仕様です。",
    image: "/works/works3.jpg",
    url: "https://standard1-seven.vercel.app/",
  },
  {
    title: "Web制作会社様 各プランのテンプレート2",
    plan: "スタンダードプラン",
    lead: "サービスの魅力が伝わるレイアウトと、安心感を与えるカラー設計で仕上げました。",
    image: "/works/works4.jpg",
    url: "https://standard2-one.vercel.app/",
  },
];

// function getPlanClass(plan: string) {
//   if (plan.includes("ライト")) return "bg-white text-gray-700 border-2 border-gray-300";
//   if (plan.includes("コーディング")) return "bg-white text-gray-700 border-2 border-gray-300";
//   if (plan.includes("スタンダード")) return "bg-white text-blue-700 border-2 border-blue-400";
//   if (plan.includes("プレミアム")) return "bg-white text-red-700 border-2 border-red-400";
//   return "bg-gray-100 text-gray-700 border border-gray-200";
// }

export default function WorksSection() {
  return (
    <SectionWrapper id="works">
      <SectionHeading
        icon={
          <>
            <Images
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <Images
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="制作実績"
        titleEn="WORKS"
      />

      <div className="grid gap-2 sm:gap-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
            className={
              "bg-white rounded-md sm:rounded-2xl overflow-hidden border border-gray-200 group transition-colors duration-300" +
              (work.url ? " hover:bg-gray-50" : "")
            }
          >
            {work.url ? (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-[12px] sm:p-6 xl:p-4">
                  {/* <div className="flex flex-wrap gap-2 mb-1 sm:mb-3">
                    <span
                      className={`px-2 sm:px-3 py-[1.6px] sm:py-1 text-[10px] sm:text-xs font-bold rounded-full transition-all duration-300 ${getPlanClass(work.plan)}`}
                    >
                      {work.plan}
                    </span>
                  </div> */}
                  <h3 className="text-[14px] sm:text-lg font-semibold mb-1 sm:mb-3 transition-all duration-300">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-[10px] sm:text-sm leading-relaxed">
                    {work.lead}
                  </p>
                </div>
              </a>
            ) : (
              <div className="block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-[12px] sm:p-6 xl:p-4">
                  {/* <div className="flex flex-wrap gap-2 mb-1 sm:mb-3">
                    <span
                      className={`px-2 sm:px-3 py-[1.6px] sm:py-1 text-[10px] sm:text-xs font-bold rounded-full transition-all duration-300 ${getPlanClass(work.plan)}`}
                    >
                      {work.plan}
                    </span>
                  </div> */}
                  <h3 className="text-[14px] sm:text-lg font-semibold mb-1 sm:mb-3 transition-all duration-300">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-[10px] sm:text-sm leading-relaxed">
                    {work.lead}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
} 