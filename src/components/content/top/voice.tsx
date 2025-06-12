"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/fadeIn-section";
import { motion, useInView } from "framer-motion";
import AnimatedTitle from "@/components/ui/animated-title";
import { useRef } from "react";


const voices = [
  {
    name: "山田 太郎様",
    title: "腰痛が改善しました",
    comment: "長年悩んでいた腰痛が、こちらに通って本当に楽になりました。先生も親切で安心して通えます。",
    image: "/top/about.jpg"
  },
  {
    name: "佐藤 花子様",
    title: "丁寧な施術で安心",
    comment: "初めての整体で不安でしたが、丁寧に説明してくださり安心して受けられました。体も軽くなりました！",
    image: "/top/feature1.jpg"
  },
  {
    name: "鈴木 一郎様",
    title: "スポーツのケガが早く治った",
    comment: "部活でケガをして困っていましたが、的確な施術で早く復帰できました。感謝しています。",
    image: "/top/flow1.jpg"
  },
  {
    name: "田中 美咲様",
    title: "子連れでも安心して通えました",
    comment: "小さい子どもを連れての通院でしたが、スタッフの方々がとても親切で助かりました。体調も良くなり感謝しています。",
    image: "/top/flow2.jpg"
  }
];

export default function VoiceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  return (
    <section ref={sectionRef} className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <AnimatedTitle
          japaneseTitle="お客様の声"
          englishTitle="VOICE"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {voices.map((item, i) => (
              <FadeIn key={i}>
                <div className="color-text bg-white border border-gray-200 p-3 md:p-6 flex flex-col items-center text-center h-full">
                  <div className="w-full aspect-[16/9] mb-2 md:mb-4 overflow-hidden border border-gray-100 relative">
                    <Image src={item.image} alt={item.name} fill className="object-cover w-full h-full" />
                  </div>
                  <div className="font-serif font-bold text-base md:text-lg color-accent mb-1 md:mb-1.5">{item.name}</div>
                  <div className="font-serif font-semibold text-sm md:text-md mb-1 md:mb-2">{item.title}</div>
                  <p className=" text-xs md:text-sm leading-relaxed md:leading-relaxed text-left w-full">{item.comment}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </motion.div>
    </section>
  );
}