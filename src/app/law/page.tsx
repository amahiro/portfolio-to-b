import SectionWrapper from "@/components/blocks/section-wrapper";
import SectionHeading from "@/components/blocks/section-heading";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SITE_NAME, TEL, EMAIL, ADDRESS, SITE_URL } from "@/constants/site-info";

const lawContent = {
  title: "特定商取引法に基づく表記",
  sections: [
    {
        id: 1,
        title: "販売事業者",
        content: SITE_NAME
      },
      {
        id: 2,
        title: "代表責任者",
        content: "天野 広揮"
      },
      {
        id: 3,
        title: "所在地",
        content: ADDRESS
      },
      {
        id: 4,
        title: "電話番号",
        content: `${TEL}（営業電話はご遠慮ください）`
      },
      {
        id: 5,
        title: "メールアドレス",
        content: EMAIL
      },
      {
        id: 6,
        title: "販売URL",
        content: SITE_URL
      },
      {
        id: 7,
        title: "販売価格",
        content: "各サービスページまたは個別お見積りにてご提示"
      },
      {
        id: 8,
        title: "商品代金以外の必要料金",
        content: "振込手数料（銀行振込を利用する場合）"
      },
      {
        id: 9,
        title: "支払方法",
        content: "銀行振込"
      },
      {
        id: 10,
        title: "支払時期",
        content: "請求書記載の支払期日までにお支払いください"
      },
      {
        id: 11,
        title: "引渡し時期",
        content: "Webサイトを公開し、閲覧可能な状態となった時点で納品とみなします"
      },
      {
        id: 12,
        title: "キャンセル・返品について",
        content: "納品後のキャンセルは原則不可とします。制作途中のキャンセルは、進行状況に応じて費用を請求いたします。"
      }
  ],
  dates: {
    established: "2025年5月20日",
    lastUpdated: "2025年5月20日"
  }
};

export default function LawPage() {
  return (
    <SectionWrapper className="pt-40 sm:pt-60">
      <SectionHeading
        icon={
          <>
            <ShieldCheck
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <ShieldCheck
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="特定商取引法に基づく表記"
        titleEn="LEGAL NOTICE"
      />
        {lawContent.sections.map((section) => (
          <div key={section.id} className="mb-4 sm:mb-10 last:mb-0">
            <h2 className="text-lg border-b border-gray-200 pb-2 mb-6 font-bold tracking-wider">
              {section.id}. {section.title}
            </h2>
            <p className="whitespace-pre-wrap">{section.content}</p>
          </div>
        ))}

          {/* <div className="text-sm  space-y-2">
            <p>制定日: {lawContent.dates.established}</p>
            <p>最終更新日: {lawContent.dates.lastUpdated}</p>
          </div>
          <div className="mt-8 text-sm">
            <p className="font-bold mb-2">{SITE_NAME}</p>
            <p>{POST_CODE} {ADDRESS}</p>
            <p>TEL: {TEL}</p>
            <p>Email: {EMAIL}</p>
          </div> */}
    </SectionWrapper>
  );
}
