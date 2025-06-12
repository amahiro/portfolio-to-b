import { DotsThreeOutline } from "@phosphor-icons/react/dist/ssr";
import SectionHeading from "@/components/blocks/section-heading";
import SectionWrapper from "@/components/blocks/section-wrapper";
import Image from "next/image";

const flow = [
  {
    title: "事前打ち合わせ",
    text: "対面・Web面談にて、サービスについて詳しくご説明し、お客様のご希望や要望をしっかりとお聞きします。",
    img: "/top/flow1.jpg"
  },
  {
    title: "お申し込み・ご契約",
    text: "提供するサービスの内容と条件を丁寧に説明し、ご不明点がなく完全にご理解いただいた上でご契約ください。",
    img: "/top/flow2.jpg"
  },
  {
    title: "ヒアリング",
    text: "打ち合わせを通じて、ウェブサイトの色調やテイスト、全体的な雰囲気などについて具体的なイメージを決めていきます。",
    img: "/top/flow3.jpg"
  },
  {
    title: "ホームページ作成",
    text: "ヒアリングで伺った情報に基づいて、お客様専用のホームページ見本を作成いたします。よろしければ数回にわけて打ち合わせをしていき、お客様の納得のいくホームページを作成いたします。",
    img: "/top/flow4.jpg"
  },
  {
    title: "公開",
    text: "サイトの構成や文章内容など、すべての要素をお客様にご確認いただいた後、正式にインターネット上にホームページを公開します。",
    img: "/top/flow5.jpg"
  },
  {
    title: "運用・保守",
    text: "公開後もサイトの更新を行います。不明点などございましたらお気軽にお問い合わせください。",
    img: "/top/flow6.jpg"
  },
];
const FlowSection = () => {

  return (
    <SectionWrapper id="flow">
      <SectionHeading
        icon={
          <>
            <DotsThreeOutline
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <DotsThreeOutline
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="ご利用の流れ"
        titleEn="FLOW"
      />
      <div className="w-full max-w-none flex flex-col gap-0">
        {flow.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-8 py-6 lg:py-6 border-0 border-b border-dashed border-gray-300 w-full">
            <div className="max-w-[220px] flex-[1_1_0%] flex items-center justify-start py-0">
              <Image
              src={item.img}
              alt={item.title}
                width={260}
                height={170}
                className="rounded-xl object-cover w-full border border-gray-100"
              />
            </div>
            <div className="flex-[2_2_0%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full tracking-none bg-[#007ACC] text-white text-lg md:text-xl font-num font-semibold shrink-0">
                  {i + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold color-text tracking-wide mb-0">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base color-text tracking-wide leading-relaxed mb-2 md:mb-0">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FlowSection;
