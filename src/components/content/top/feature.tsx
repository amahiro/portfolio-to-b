import Image from "next/image";
// import { SITE_NAME } from "@/constants/site-info";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import SectionHeading from "@/components/blocks/section-heading";
import SectionWrapper from "@/components/blocks/section-wrapper";

const features = [
  {
    title: "レスポンシブ対応は標準<br />保守性と軽量さも考慮",
    text: `全デバイスでの見やすさはもちろん、コードの可読性・保守性に配慮。\n\nTailwind CSS や SCSS を用いて、状況に応じた最適な実装を行っています。`,
    image: "/top/feature1.jpg",
  },
  {
    title: "スマホ対応＋とにかく安い<br />コスパ重視のサイト制作",
    text: `「スマホで見づらい…」そんなお悩みも解決。\n\nすべてのサイトはスマホ対応が標準。しかも制作費は業界最安クラス。コストを抑えて、しっかり魅せるホームページを実現できます。`,
    image: "/top/feature2.jpg",
  },
  {
    title: "契約の縛りナシ<br />いつでも解約OK",
    text: `「長期契約はちょっと不安…」という方も安心。\n\n継続は月単位で自由に。契約期間の縛りはありません。必要なときに必要なだけ使える、自由度の高いプランです。`,
    image: "/top/feature3.jpg",
  },
];

export default function FeatureSection() {
  return (
    <SectionWrapper id="feature">
      <SectionHeading
        icon={
          <>
            <Sparkle
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <Sparkle
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa={`わたしについて`}
        titleEn="FEATURES"
      />

      <div className="color-text mx-auto sm:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid gap-4 lg:gap-10 lg:grid-cols-2 items-center ${
              index > 0 ? "mt-8 md:mt-20" : ""
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="lg:pr-10 order-2 lg:order-1">
                  <h3
                    className="heading mb-3 lg:mb-8 text-xl font-semibold tracking-widest sm:text-3xl leading-[1.4] border-b-2 border-gray-200 pb-2"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <p className="mb-6 text-sm lg:text-lg color-text-sub">
                    {feature.text}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    className="object-cover aspect-video md:aspect-[5/3] lg:aspect-[5/3] rounded-2xl border-2 border-gray-200"
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="order-1 lg:order-1">
                  <Image
                    className="object-cover aspect-video md:aspect-[5/3] lg:aspect-[5/3] rounded-2xl border-2 border-gray-200"
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="lg:pl-10 order-2 lg:order-2">
                  <h3
                  className="heading mb-3 lg:mb-8 text-xl font-semibold tracking-widest sm:text-3xl leading-[1.4] border-b-2 border-gray-200 pb-2"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <p className="mb-6 text-sm lg:text-lg color-text-sub">
                    {feature.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}