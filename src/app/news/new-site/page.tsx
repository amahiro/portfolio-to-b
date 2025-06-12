"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientButton from "@/components/ui/gradient-button";
import { CaretLeft } from "@phosphor-icons/react";

// ニュース記事のデータを変数として定義
const newsArticle = {
  category: "お知らせ",
  date: "2024年12月12日",
  title: "ホームページを作成しました",
  image: {
    src: "/news/news1.jpg",
    alt: "お知らせ画像",
    width: 800,
    height: 400
  },
  content: [
    "この度、当院のホームページを新たに開設いたしました。",
    "サービス内容や料金、アクセス方法など、皆さまに分かりやすくご案内できるよう心がけております。",
    "今後もお知らせやキャンペーン情報など、最新情報を随時更新してまいりますので、ぜひご活用ください。",
    "",
    "何かご不明点やご質問がございましたら、お気軽にお問い合わせください。",
    "今後ともどうぞよろしくお願いいたします。"
  ]
};

export default function NewsNewSite() {
  return (
    <motion.section
      className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto pt-30 lg:pt-40"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold  bg-gray-100 rounded px-3 py-1">{newsArticle.category}</span>
          <span className="text-xs text-gray-500">{newsArticle.date}</span>
        </motion.div>
        <motion.h1
          className="text-2xl lg:text-3xl font-bold  mb-8 font-serif tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          {newsArticle.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <Image 
            src={newsArticle.image.src} 
            alt={newsArticle.image.alt} 
            width={newsArticle.image.width} 
            height={newsArticle.image.height} 
            className="w-full h-auto" 
          />
        </motion.div>
        <motion.div
          className="prose prose-gray max-w-none  text-sm lg:text-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          <p className="mt-8">
            {newsArticle.content.map((paragraph, index) => (
              <span key={index}>
                {paragraph}
                {index < newsArticle.content.length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
        >
          <GradientButton 
            href="/news" 
            icon={<CaretLeft size={16} weight="bold" />}
            isIconLeft
          >
            お知らせ一覧へ
          </GradientButton>
        </motion.div>
      </div>
    </motion.section>
  );
} 