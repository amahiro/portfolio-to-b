import { SITE_NAME, ADDRESS, POST_CODE, TEL, EMAIL } from "@/constants/site-info";
import SectionWrapper from "@/components/blocks/section-wrapper";
import SectionHeading from "@/components/blocks/section-heading";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SITE_URL } from "@/constants/site-info";

// 利用規約の内容を変数として定義
const termsOfUseContent = {
  title: "サイトのご利用<br class='block md:hidden' />について",
  sections: [
    {
      id: 1,
      title: "第1条（契約の成立）",
      content:
        `${SITE_NAME}（以下「当方」）が提供するWebサイト制作サービス（以下「本サービス」）は、当方が提示する契約書へのご署名および初期費用のお支払いをもって、正式な契約が成立するものとします。`,
    },
    {
      id: 2,
      title: "第2条（サービス内容）",
      content:
        `当方は、Webサイトの企画・デザイン・構築・納品を含む制作業務を行います。サービス内容の詳細は以下のWebサイトに準拠し、契約締結時点の記載内容をもって確定されるものとします。\n${SITE_URL}\nなお、当規約とWebサイトの記載内容に矛盾や相違があった場合は、契約締結時点でのWebサイトの内容を優先して解釈します。`,
    },
    {
      id: 3,
      title: "第3条（料金および支払条件）",
      content:
        "料金は案件ごとに個別に合意された金額とし、原則として①着手金（契約時）、②残金（納品後）の2回に分けてお支払いいただきます。\nオプション対応や保守・運用作業をご依頼いただく場合は、都度ご依頼内容を確認のうえ、作業開始前に料金をお支払いいただきます。\n支払方法は銀行振込とし、振込手数料はユーザー負担とします。",
    },
    {
      id: 4,
      title: "第4条（納品・検収）",
      content:
        "Webサイトをインターネット上で公開し、ユーザーが確認できる状態となった時点で納品とみなします。ユーザーは納品後7営業日以内に検収を行い、修正希望がある場合は当方に具体的に伝えるものとします。大幅な構成変更やデザイン変更は別料金が発生する場合があります。\n修正は原則として3回までを無償対応とし、それを超える場合は別途費用を協議の上発生するものとする。",
    },
    {
      id: 5,
      title: "第5条（契約の解除）",
      content:
        "以下の場合、当方またはユーザーは契約を解除できます：\n・重大な契約違反がある場合\n・支払いが行われない場合\n・破産などの法的手続きが開始された場合\nまた、双方の合意またはやむを得ない事情がある場合には、1ヶ月前までの書面通知で解除可能とします。",
    },
    {
      id: 6,
      title: "第6条（著作権）",
      content:
        "当方が制作した成果物（ソースコード、デザイン、文章等）に関する著作権は、特別な取り決めがない限り、当方に帰属します。元データの提供義務は負いません。ユーザーが提供した画像・文章等の素材はユーザーに帰属します。",
    },
    {
      id: 7,
      title: "第7条（保守契約）",
      content:
        "納品後に自動で月額保守契約は発生しません。保守・運用サービスをご希望の場合は、都度ご相談・お見積もりのうえ、必要に応じてスポット契約を締結します。支払いは、合意内容に基づき、作業開始前に銀行振込にてお支払いいただきます。",
    },
    {
      id: 8,
      title: "第8条（秘密保持）",
      content:
        "当方およびユーザーは、業務上知り得た相手方の秘密情報を第三者に漏洩しないものとします。",
    },
    {
      id: 9,
      title: "第9条（免責事項）",
      content:
        "天災、通信障害、第三者サービスの不具合など、当方の責によらない事由によって生じた損害については、当方は責任を負いません。",
    },
    {
      id: 10,
      title: "第10条（再委託）",
      content:
        "当方は、ユーザーの書面による承諾なしに、本業務を第三者へ再委託しないものとします。",
    },
    {
      id: 11,
      title: "第11条（制作実績の掲載）",
      content:
        "制作したWebサイトは、当方の制作実績としてポートフォリオやSNSなどへ掲載することがあります。",
    },
    {
      id: 12,
      title: "第12条（準拠法および管轄）",
      content:
        "本規約は日本法に準拠し、紛争が生じた場合は、当方所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。",
    },
    {
      id: 13,
      title: "第13条（免責事項）",
      content:
        "乙は、天災地変、戦争、テロ、疫病、停電、通信障害、システム障害、その他乙の責によらない不可抗力により本契約上の義務を履行できなかった場合、その責任を負わないものとする。\nまた、第三者が提供するサービス（例：ドメイン・サーバー・SNS・Googleサービス等）に起因する不具合・停止等についても、乙は一切の責任を負わないものとする。",
    },
    {
      id: 14,
      title: "第14条（制作実績としての掲載）",
      content:
        "乙は、制作したWebサイトを自身の実績（ポートフォリオ・SNSなど）として掲載できる。",
    },
    {
      id: 15,
      title: "第15条（損害賠償の制限）",
      content:
        "乙の故意・重大な過失を除き、乙の賠償責任は契約に基づき甲から受領した報酬額を上限とする。\nなお、本条における「重大な過失」とは、通常の注意義務を著しく怠ったことにより、重大な損害を発生させる行為を指すものとし、軽微なミスや修正可能な不具合はこれに含まれない。",
    },
  ],
  dates: {
    established: "2025年5月20日",
    lastUpdated: "2025年5月22日" // ←更新日も反映しておいたよ
  }
};
  

export default function TermsOfUsePage() {
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
        titleJa="利用規約"
        titleEn="TERMS OF SERVICE"
      />
        {termsOfUseContent.sections.map((section) => (
          <div key={section.id} className="mb-4 sm:mb-10 last:mb-0">
            <h2 className="text-lg border-b border-gray-200 pb-2 mb-6 font-bold tracking-wider">
              {section.id}. {section.title}
            </h2>
            <p className="whitespace-pre-wrap">{section.content}</p>
          </div>
        ))}

          <div className="text-sm  space-y-2">
            <p>制定日: {termsOfUseContent.dates.established}</p>
            <p>最終更新日: {termsOfUseContent.dates.lastUpdated}</p>
          </div>
          <div className="mt-8 text-sm">
            <p className="font-bold mb-2">{SITE_NAME}</p>
            <p>{POST_CODE} {ADDRESS}</p>
            <p>TEL: {TEL}</p>
            <p>Email: {EMAIL}</p>
          </div>
    </SectionWrapper>
  );
}
