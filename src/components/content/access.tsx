"use client";

import AnimatedTitle from "@/components/ui/animated-title";
import { InstagramLogo, Train, Car, Bus } from "@phosphor-icons/react";
import { SITE_NAME, TEL, ADDRESS, INSTAGRAM_LINK, POST_CODE } from "@/constants/site-info";

const businessHourMatrix = {
  header: ["受付時間", "月", "火", "水", "木", "金", "土", "日・祝"],
  rows: [
    ["9時〜12時", "○", "○", "○", "○", "○", "〜14時", "/"],
    ["17時〜22時", "○", "○", "/", "○", "○", "/", "/"],
  ]
};

const storeInfo = [
  { label: "店舗名", value: SITE_NAME },
  { label: "電話番号", value: <a href={`tel:${TEL}`} className=" hover:underline">{TEL}</a> },
  { label: "住所", value: <>{POST_CODE}<br />{ADDRESS}</> },
  { label: "SNS", value: (
    <div className="flex gap-4">
      {/* <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className=" hover:opacity-70" aria-label="Twitter">
        <TwitterLogo size={22} weight="light" />
      </a> */}
      <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className=" hover:opacity-70" aria-label="Instagram">
        <InstagramLogo size={22} weight="light" />
      </a>
    </div>
  ) },
];

const accessGuides = [
  {
    title: "電車でお越しの方",
    description: [
      "JR山手線・東急田園都市線「渋谷駅」新南口より徒歩5分",
      "渋谷スクランブルスクエア2F直結の連絡通路をご利用ください",
      "出口4を出て右手に当院の看板が見えます",
    ],
    icon: <Train size={32} weight="light" className="" />
  },
  {
    title: "お車でお越しの方",
    description: [
      "渋谷スクランブルスクエア地下駐車場をご利用ください",
      "3時間まで駐車料金サービス券を発行しております",
      "カーナビの場合は「めぐり整体院」で検索可能です"
    ],
    icon: <Car size={32} weight="light" className="" />
  },
  {
    title: "バスでお越しの方",
    description: [
      "渋谷駅東口バスターミナル（26番のりば）より徒歩3分",
      "バス停「渋谷スクランブルスクエア前」下車すぐ",
      "東急バス・京王バスともにご利用いただけます"
    ],
    icon: <Bus size={32} weight="light" className="" />
  }
];

const AccessSection = () => {
  return (
    <section id="access" className="scroll-mt-[60px] py-12 px-4 md:px-16 lg:px-8 lg:py-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <div>
        <AnimatedTitle
          japaneseTitle="店舗情報"
          englishTitle="ACCESS"
        />
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Google Map */}
          <div className="flex-1 w-full mx-auto lg:mx-0 overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9999999999995!2d139.70000000000002!3d35.65999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44CS5p2x5Lqs6YO95paw5a6_5Yy65p2x5Lqs6YO95paw5a6_!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗地図"
            />
          </div>
          {/* 営業日・営業時間＋店舗詳細 */}
          <div className="w-full lg:w-1/2 lg:max-w-[550PX] flex flex-col gap-1 justify-center">
            <div className="mb-4">
              <div>
                <table className="w-full border-collapse text-center text-[11px] sm:text-xs">
                  <thead>
                    <tr>
                      {businessHourMatrix.header.map((h) => (
                        <th key={h} className="bg-gray-100  font-bold px-1 py-1 sm:px-2 sm:py-2 border border-gray-300 text-gray-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {businessHourMatrix.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-1 py-1 sm:px-2 sm:py-2 border border-gray-300  text-[11px] sm:text-xs font-medium bg-white">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold  mb-4 tracking-wider font-serif border-b border-gray-200 pb-2">店舗詳細</h3>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {storeInfo.map((row) => (
                    <tr key={row.label}>
                      <th className="py-2 pr-6  font-medium whitespace-nowrap align-top">{row.label}</th>
                      <td className="py-2  align-top">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* アクセス案内 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {accessGuides.map((guide) => (
            <div key={guide.title} className="flex flex-col items-center bg-white border border-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.06)] px-4 py-8 text-center">
              <div className="mb-4">{guide.icon}</div>
              <h4 className="text-lg font-bold  mb-2 tracking-wider font-serif">{guide.title}</h4>
              <ul className=" text-base leading-relaxed font-light space-y-1 text-left w-full max-w-xs mx-auto md:mx-0">
                {guide.description.map((desc, i) => (
                  <li key={i} className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-3 before:w-1 before:h-1 before:rounded-full before:bg-gray-700">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
