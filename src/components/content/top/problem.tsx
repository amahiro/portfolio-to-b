"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SITE_NAME } from "@/constants/site-info";

// import Link from "next/link";

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const concerns = [
    {
      title: "自分で作ったホームページがイマイチ…",
      description: "デザインや使いやすさに自信が持てない、スマホで見づらい、情報が古いまま…そんなお悩みありませんか？"
    },
    {
      title: "集客やお問い合わせが増えない",
      description: "ホームページを作ったけど、なかなかアクセスや問い合わせが増えない。SEOや導線設計に不安がある方へ。"
    },
    {
      title: "制作会社に頼むと高そうで不安",
      description: "費用や納期、どこまで対応してくれるのか分からず、相談しづらいと感じていませんか？"
    },
    {
      title: "更新や運用が面倒・難しい",
      description: "お知らせやブログの更新、画像の差し替えなど、日々の運用に手間や不安を感じていませんか？"
    },
    {
      title: "スマホやタブレットで見づらい",
      description: "スマホ対応ができていない、表示が崩れるなど、モバイルユーザーへの対応にお困りの方へ。"
    },
    {
      title: "どんな内容を載せればいいか分からない",
      description: "原稿や写真、構成など、何をどう準備すればいいか分からず、なかなか一歩が踏み出せない方もご相談ください。"
    },
    {
      title: "SNSやGoogleマップと連携したい",
      description: "InstagramやX（旧Twitter）、Googleマップなど、外部サービスとの連携もご相談ください。"
    },
    {
      title: "制作後のサポートが不安",
      description: "公開後の更新やトラブル対応など、運用サポートもお任せいただけます。"
    },
    {
      title: "他社で作ったサイトのリニューアルをしたい",
      description: "既存サイトのリニューアルや部分的な修正も対応可能です。"
    },
    {
      title: "セキュリティやSSLが心配",
      description: "SSL化やセキュリティ対策もご提案・対応いたします。"
    },
    {
      title: "お問い合わせフォームを付けたい",
      description: "簡単なフォームから本格的な予約・問い合わせシステムまでご相談ください。"
    },
    {
      title: "なるべく早く公開したい",
      description: "お急ぎのご相談も柔軟に対応いたします。"
    }
  ];

  return (
    <>
      <div className="w-full">
        <section className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 pb-8 sm:pb-12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
          <motion.div 
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[23px] lg:text-[32px] font-bold tracking-widest">
                ホームページについて、<br className="block sm:hidden" />こんなお悩みありませんか？
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concerns.map((concern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex items-start gap-2 sm:gap-4 p-3 sm:p-5 bg-white border-2 border-gray-200 rounded-md"
                >
                  <div className="flex-shrink-0 pt-1">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 /95" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-md sm:text-xl font-bold  tracking-wider">
                      {concern.title}
                    </h3>
                    <p className="text-sm lg:text-md mt-1 sm:mt-2  tracking-wider">
                      {concern.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      <section className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-2 pt-0 lg:pt-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-[23px] lg:text-[32px] font-bold tracking-widest mb-6 text-center">
            あきらめていた悩みも<br className="block sm:hidden" />解決できるかもしれません
          </h3>
          <p className="text-center text-sm lg:text-md">
            {SITE_NAME}では、あなたの状況やご希望に合わせて、分かりやすく丁寧にサポートします。
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default ProblemSection;
