import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";
import SectionWrapper from "@/components/blocks/section-wrapper";
import SectionHeading from "@/components/blocks/section-heading";


const aboutContent = {
  greeting: {
    title: "ご覧いただきありがとうございます",
    text: [
      "はじめまして。",
      "Webサイト制作を主な業務として、デザイン、コーディングから実装まで一貫して対応させていただいております。",
      "日々の業務を通じて、新しい技術やフレームワークの学習を続けています。",
      "新しい環境でも、これまでの経験を活かし、チームの一員として貢献させていただきたいと考えております。",
      "どうぞよろしくお願いいたします。"
    ],
  },
  image: {
    src: "/top/about2.jpg",
    alt: "写真",
  },
  qualifications: {
    title: "保有資格",
    items: [
      "柔道整復師",
      "鍼灸師",
      "日本スポーツ協会公認アスレティックトレーナー",
      "赤十字救急法救急員",
    ],
  },
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        icon={
          <>
            <UserCircle
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <UserCircle
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="わたしについて"
        titleEn="ABOUT"
      />
      <div className="container mx-auto">
        <div className="mx-auto lg:flex">
          <div className="relative lg:w-1/2 lg:mx-6 w-full aspect-[16/9] rounded-2xl border-2 border-gray-200 overflow-hidden">
            <Image 
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          <div className="mt-8 lg:w-1/2 lg:pl-6 lg:mt-0">
            <h3 className="heading text-2xl font-semibold  dark:text-white lg:text-3xl tracking-[0.06em]">
              {aboutContent.greeting.title}
            </h3>

            <p className="max-w-lg mt-6 text-sm tracking-wider leading-relaxed">
              {aboutContent.greeting.text.map((line, index) => (
                <span key={index} className={index !== 0 ? "block mt-4" : "block"}>
                  {line}
                </span>
              ))}
            </p>

            {/* <div className="mt-8">
              <div className="bg-white p-5 lg:p-6 pt-3 lg:pt-4  border border-gray-300 rounded-2xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-300">
                  <Certificate size={24} weight="regular" />
                  <h4 className="heading text-xl font-medium ">
                    {aboutContent.qualifications.title}
                  </h4>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aboutContent.qualifications.items.map((qualification, index) => (
                    <li key={index} className="flex items-baseline gap-1">
                      <span className="leading-none">•</span>
                      <span className="text-sm tracking-wider">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}