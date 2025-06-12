"use client";

import SectionWrapper from "@/components/blocks/section-wrapper";
import SectionHeading from "@/components/blocks/section-heading";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { CheckCircle, CurrencyCircleDollar } from "@phosphor-icons/react/dist/ssr";
import { Code } from "@phosphor-icons/react/dist/ssr";
// import { useState } from "react";
// import CouponBanner from "@/components/blocks/coupon-banner";

// const plans = [
//     {
//     id: "light",
//     name: "ライトプラン",
//     description: "シンプルな1ページ構成<br />まずはWeb集客を始めたい方に",
//     monthlyPrice: "¥99,800",
//       features: [
//       "1ページ構成",
//       // "テンプレート + オリジナルデザイン",
//       "制作期間：１ヶ月 ~ 2ヶ月（内容によって前後する場合があります）",
//       "運用：ベーシック 4,000円/月（月3回）",
//       "運用：プレミアム 8,000円/月（月6回）"
//     ]
//     },
//     {
//     id: "standard",
//     name: "スタンダードプラン",
//     description: "本格的なホームページが必要な方向け<br />複数ページ・独自ドメイン対応",
//     monthlyPrice: "¥198,000",
//       features: [
//       "上限10ページ（追加は要相談）",
//       // "テンプレート + オリジナルデザイン",
//       "独自ドメイン対応",
//       "制作期間：１ヶ月 ~ 2ヶ月（内容によって前後する場合があります）",
//       "運用：ベーシック 4,000円/月（月3回）",
//       "運用：プレミアム 8,000円/月（月6回）"
//     ]
//     },
//     {
//     id: "premium",
//     name: "プレミアムプラン",
//     description: "掲載情報が多い方や複数事業<br />などを展開されている企業様向け",
//     monthlyPrice: "内容により価格は変動いたします",
//       features: [
//       "お客様と相談してページ数を決定",
//       // "集客サポート",
//       "独自ドメイン対応",
//       // "オリジナルデザイン",
//       "制作期間：１ヶ月 ~ 3ヶ月（規模や案件状況により調整の可能性あり）",
//       "運用：ベーシック 10,000円/月（月3回）",
//       "運用：プレミアム 20,000円/月（月6回）"
//     ]
//   },
// ];

//   const commonFeatures = [
//   "スマホ、タブレット対応",
//   "ホームページ集客の提案",
//   "電話番号掲載",
//   "Googleマップ搭載",
//   "簡易お問い合わせフォーム搭載",
//   "ホームページ運用代行",
//   "お知らせ機能の掲載",
//   "SSL対応（セキュリティ対策）",
//   "Youtube動画設置（お持ちの動画も設置可能）",
//   "アクセス解析設置（Analytics）",
//   "SNS連携（X, インスタ, Facebook等）",
//   "SEO対策",
//   "電話、メール対応可能",
//   "ライティング対応",
//   "Google My Business導入",
//   "プライバシーポリシー、利用規約、特定商取引法ページは必要に応じてデフォルトで搭載"
// ];

// const operationFeatures = [
//   "お知らせの掲載",
//   "画像・動画の差し替え",
//   "文言の変更",
//   "Google My Business上の更新（画像、文言の差し替えなど）",
// ];

// const cautionFeatures = [
//   "公開後の大幅なデザイン変更は別途費用が発生します",
//   "サーバ / ソースコード一式は弊社で管理します",
//   "著作権に関わる画像・文章はご自身でご用意ください",
//   "画像のご用意につきましては、こちらで用意が可能です",
//   "ご解約に際して、違約金は一切いただいておりません",
//   "ホームページの解約は月単位から可能です",
//   // "運用・保守プランは月単位でお支払いいただきます",
//   // "運用・保守プランの解約についても違約金はかかりません"
// ];

// const selectableOptions = [
//   // { title: "更新の追加", description: "月の更新回数の上限を超えた場合の追加対応", price: "〜¥2,000/1回" },
//   { title: "追加ページ作成", description: "ご希望に応じたページの追加", price: "¥10,000/1回" },
//   { title: "独自ドメイン取得", description: "ドメイン取得・初期設定を代行", price: "¥5,000" },
//   { title: "写真撮影", description: "プロカメラマンによる撮影対応（外注）", price: "¥50,000〜" },
//   { title: "動画撮影", description: "店舗紹介・PR動画の撮影（外注）", price: "¥50,000〜" },
//   { title: "ロゴ作成", description: "プロによるロゴデザイン制作（外注）", price: "¥50,000〜" },
//   { title: "ブログ機能追加", description: "ブログを投稿できる仕組みを導入", price: "¥50,000" },
//   { title: "チラシデザイン", description: "広告・配布用チラシ制作", price: "¥50,000〜" },
//   { title: "ホームページリニューアル", description: "既存サイトをデザインから一新", price: "¥100,000〜" },
//   { title: "別途機能追加", description: "お客様のご要望に合わせた機能を別途追加", price: "要相談" },
// ];

// const supportOptions = [
//   { title: "運用・更新1回", description: "", price: "¥2,400/1回（¥2,400）" },
//   { title: "運用・更新3回", description: "", price: "¥6,600/3回（1回あたり¥2,200）" },
//   { title: "運用・更新6回", description: "", price: "¥11,400/6回（1回あたり¥1,900）" },
//   { title: "運用・更新8回", description: "", price: "¥13,600/8回（1回あたり¥1,700）" },
// ];

// const maintenanceOptions = [
//   { title: "ベーシックプラン", description: "月3回の更新", price: "¥4,000/月" },
//   { title: "プレミアムプラン", description: "月6回の更新", price: "¥8,000/月" },
// ];

const languages = [
  { title: "HTML", level: "SEO を意識したマークアップが可能" },
  { title: "CSS", level: "FLOCSS や BEM を使った構造的な実装が可能" },
  { title: "JavaScript", level: "基本的な文法の理解/既存コードの改修が可能" },
  { title: "PHP", level: "基本的な文法の理解/既存コードの改修が可能" },
];

const libraries = [
  { title: "SCSS", level: "FLOCSS や BEM を使った構造的な実装が可能" },
  { title: "jQuery", level: "基本的な文法の理解/既存コードの改修が可能" },
  { title: "Node.js", level: "環境構築やツール実行が可能" },
  { title: "React、Next.js", level: "基本的な文法の理解/既存コードの改修が可能" },
];

const tools = [
  { title: "microCMS", level: "環境構築が可能" },
  { title: "Vercel", level: "デプロイが可能" },
  { title: "Git", level: "基本的な操作が可能" },
  { title: "Gulp", level: "タスクの実装が可能" },
  { title: "WordPress", level: "スクラッチで WEB サイト制作が可能" },
  { title: "Figma", level: "コーディング時に必要な操作が可能" },
  { title: "Photoshop", level: "コーディング時に必要な操作が可能" },
  { title: "Adobe XD", level: "コーディング時に必要な操作が可能" },
];

export default function PriceSection() {
  // const [selectedTab, setSelectedTab] = useState(0);
  // const iconColors = [
  //   "text-blue-400", // ライト
  //   "text-orange-400", // スタンダード
  //   "text-purple-400" // プレミアム
  // ];
  return (
    <SectionWrapper id="tec">
      <SectionHeading
        icon={
          <>
            <Code
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <Code
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="使用言語 / ツール"
        titleEn="TEC"
      />
      {/* <CouponBanner /> */}
      {/* スマホ用タブUI */}
        {/* <div className="text-center font-bold text-lg sm:text-2xl mb-1 lg:mb-2">お店に合ったホームページをモニター価格で作成します</div>
        <div className="text-center font-bold text-sm mb-8 lg:mb-12">※サービス立ち上げのためこちらの価格で提供しており、本価格は予告なく変更となる場合があります。<br />以下の料金が現在ご案内している価格です。</div>
      <div className="block md:hidden w-full max-w-md mx-auto mb-4">


        <div className="flex w-full">
          {plans.map((plan, idx) => (
            <button
              key={plan.id}
              className={`flex-1 h-[50px] text-[12px] leading-[1.4] font-bold transition-all duration-150 border border-gray-300
                ${idx === 0 ? 'rounded-l-sm' : ''}
                ${idx === plans.length - 1 ? 'rounded-r-sm' : ''}
                ${selectedTab === idx ? 'bg-[#007ACC] text-white shadow-md border-[#007ACC] z-10' : 'bg-white text-gray-700'}
              `}
              onClick={() => setSelectedTab(idx)}
              style={{ marginLeft: idx !== 0 ? '-1px' : undefined }}
                      >
              {plan.id === 'standard'
                ? (<span>スタンダード<br />プラン</span>)
                : plan.name}
            </button>
              ))}
            </div>
            </div> */}


                {/* <h4 className="pt-6 sm:pt-10 pb-2 mb-3 border-b border-gray-300 text-[20px] sm:text-[26px] font-semibold text-gray-700 flex items-center gap-2">
                  <Tag size={24} weight="bold" />
                  月額不要！必要なときだけ<br className="block sm:hidden" />都度対応の運用・保守サポート
                </h4> */}


                <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8 mt-6 lg:mt-10">

                    <div className="flex flex-col items-center justify-center flex-wrap space-y-2 flex-1 border border-gray-300 rounded-md">
          <div className="relative w-full mx-auto p-4 sm:p-6 pt-3 sm:pt-3 flex-1">
            <div className="text-md sm:text-xl font-bold mb-2 text-center border-b border-gray-300 pb-3">使用言語</div>
            <ul className="flex flex-wrap gap-x-0 gap-y-2 mt-3">
              {languages.map((item, i) => (
                <li key={i} className="flex w-full flex-col gap-1 py-2 border-b border-dashed border-gray-300">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-800 text-sm">{item.title}</span>
                    </div>
                  </div>
                  <div className="text-right sm:mt-0 font-bold text-[#007ACC] text-[12px] whitespace-nowrap">{item.level}</div>
                </li>
              ))}
            </ul>
                      </div>
                    </div>

                    <div className="flex flex-col items-stretch justify-center space-y-2 flex-1 border border-gray-300 rounded-md">
                      <div className="relative w-full mx-auto p-4 sm:p-6 pt-3 sm:pt-3 flex-1">
                        <div className="text-md sm:text-xl font-bold mb-2 text-center border-b border-gray-300 pb-3">
                          ライブラリ
                        </div>
                        <ul className="flex flex-wrap gap-x-0 gap-y-2 mt-3">
                          {libraries.map((item, i) => (
                            <li key={i} className="flex w-full flex-col gap-1 py-2 border-b border-dashed border-gray-300">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                  <span className="font-bold text-gray-800 text-sm">{item.title}</span>
                                </div>
                              </div>
                              <div className="text-right sm:mt-0 font-bold text-[#007ACC] text-[12px] whitespace-nowrap">{item.level}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col items-stretch justify-center space-y-2 flex-1 border border-gray-300 rounded-md">
                      <div className="relative w-full mx-auto p-4 sm:p-6 pt-3 sm:pt-3 flex-1">
                        <div className="text-md sm:text-xl font-bold mb-2 text-center border-b border-gray-300 pb-3">
                          ツール
                        </div>
                        <ul className="flex flex-wrap gap-x-0 gap-y-2 mt-3">
                          {tools.map((item, i) => (
                            <li key={i} className="flex w-full flex-col gap-1 py-2 border-b border-dashed border-gray-300">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                  <span className="font-bold text-gray-800 text-sm">{item.title}</span>
                                </div>
                              </div>
                              <div className="text-right sm:mt-0 font-bold text-[#007ACC] text-[12px] whitespace-nowrap">{item.level}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                </div>

    </SectionWrapper>
  );
}