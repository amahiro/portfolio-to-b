"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Question } from "@phosphor-icons/react/dist/ssr";
import SectionHeading from "@/components/blocks/section-heading";
import SectionWrapper from "@/components/blocks/section-wrapper";


const qa = [
  // {
  //   question: '解約に違約金は発生しますか？',
  //   answer: 'ご解約に際して、違約金は一切いただいておりません。',
  // },
  {
    question: 'お支払いのタイミングはいつですか？',
    answer:
      `制作費用は2回払いです。<br />制作開始前に制作費用の50%、納品時に残りの50%をお支払いいただきます。<br /><br />月額費用はございません。<br /><br />オプションや保守・運用サービスをご依頼いただく場合は、ご依頼後作業開始前に料金をお支払いいただきます。`
  },
  {
    question: 'SEO対策はしてますか？',
    answer:
      '基本的なSEO対策はすべてのプランに含まれています。適切なタイトルタグ、メタディスクリプション、構造化データ、高速表示のための最適化、モバイルフレンドリー対応などを標準で実施しています。地域名を含めたキーワード対策も行い、検索エンジンで見つけやすいサイト作りをサポートします。',
  },
  // {
  //   question: '料金プランの違いは何ですか？',
  //   answer:
  //     'ライトプラン：1ページのみのシンプルな構成。Web集客をまず始めてみたい方向けです。<br />スタンダードプラン：5〜10ページの本格的なホームページ構成。独自ドメイン対応なども含まれます。<br />プレミアムプラン：ページ数や機能を柔軟にカスタマイズ可能。中〜大規模事業者向けのサポートプランです。',
  // },
  {
    question: 'ドメイン取得やサーバー契約は別途必要ですか？',
    answer:
      '当サービスには、ドメインの取得費用（初年度分）とサーバー費用が含まれています。<br />2年目以降のドメイン維持費用については、別途ご案内させていただきます。<br />既にお持ちのドメインがある場合は、そちらをご利用いただくことも可能です。',
  },
  {
    question: 'スマートフォン対応していますか？',
    answer:
      'はい、すべてのプランでスマートフォン・タブレット対応のレスポンシブデザインを採用しています。スマホでの閲覧が多い昨今、スマホ表示を最適化したデザインでユーザーの利便性を高めます。',
  },
  {
    question: '制作開始から公開までどのくらいの期間がかかりますか？',
    answer:
      '基本的には契約後、約2〜4週間程度での公開を目指しています。お打ち合わせや細かい調整があるため、やや長めの期間をいただいております。',
  },
  {
    question: 'ホームページのデータなどはいただけますか？',
    answer:
      'HTMLやCSSなどのコードや弊社が作成したコンテンツ等の権利は弊社に帰属するため、データをお渡しすることはできません。また、ご解約の際にはデータは削除させていただきます。ただし、お客様からご提供いただいた写真等のデータやお客様ご自身で作成されたブログのテキスト等データについてはご返却・譲渡をさせていただきます。',
  },
  {
    question: 'SNSやYoutubeをホームページに載せれますか？',
    answer:
      'はい、InstagramやFacebook、YouTubeなどのSNSとホームページを連携することが可能です。SNSの投稿をホームページに表示したり、ホームページからSNSへの誘導リンクを設置するなど、集客効果を高める連携機能をご用意しています。また、LINE公式アカウントとの連携も可能で、予約受付の効率化にも貢献します。',
  },
  {
    question: '現在のホームページをリューアルすることは可能ですか？',
    answer:
      'はい、可能です。現在のホームページをリニューアルする際は、デザインやコンテンツの見直しを行い、より効果的なサイトに仕上げることが可能です。リニューアルにあたっては、現在のサイトのデータを引き継ぐこともできますので、お気軽にご相談ください。',
  },
]
const QaSection = () => {

  return (
    <SectionWrapper id="qa">
      <SectionHeading
        icon={
          <>
            <Question
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <Question
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="よくあるご質問"
        titleEn="FAQ"
      />
      <div className="mx-auto max-w-[1000px]">
        <p className="lg:text-center text-sm sm:text-base mb-6 lg:mb-16">
          初めて施術を受けられる方や、ご検討中の方から寄せられる、よくあるご質問をまとめました。
          <br />
          この他にもご不明な点があれば、お気軽にお問い合わせください。
        </p>
        <Accordion type="single" collapsible defaultValue="item-0">
          {qa.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`p-4 bg-white rounded-md border border-gray-300 last:border-b ${
                i !== 0 ? "mt-2" : ""
              }`}
            >
              <AccordionTrigger className="p-0 text-md no-underline hover:no-underline focus:no-underline cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="leading-[1.4] p-0 pt-4 border-t border-gray-300 text-md mt-4 whitespace-pre-wrap">
              <span dangerouslySetInnerHTML={{ __html: item.answer }} />              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default QaSection;
