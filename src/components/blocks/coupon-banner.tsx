import Image from "next/image";
import Link from "next/link";
import { Tag, CheckCircle, NotePencil } from "@phosphor-icons/react/dist/ssr";

export default function CouponBanner() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 mb-6 lg:mb-12">
      <figure className="w-full max-w-[585px] mx-auto lg:mx-0 h-auto">
        <Image className="rounded-lg border-3 border-[#007ACC]" src="/top/coupon.jpg" alt="料金プラン" width={1000} height={1000} />
      </figure>
      <div className="flex-1 w-full">
        <h4 className="pb-2 mb-3 border-b border-gray-300 text-[20px] sm:text-[26px] font-semibold text-gray-700 flex items-center gap-2">
          <Tag size={24} weight="bold" />
          割引のお知らせ
        </h4>
        <div className="mb-0 text-sm sm:text-base font-semibold text-gray-800">
          全てのプランから
        </div>
        <div className="flex items-end justify-start mb-2">
          <span className="text-4xl sm:text-5xl font-extrabold text-[#007ACC] mr-2">20,000</span>
          <span className="text-base sm:text-lg font-bold text-[#007ACC] mr-1">(税込)</span>
          <span className="text-2xl sm:text-3xl font-bold text-[#007ACC]">円OFF！</span>
        </div>
        <ul className="text-xs sm:text-sm border border-gray-300 rounded-md p-2 mt-4">
          <li className="flex gap-1 py-1 px-2 text-left text-sm font-medium">
            <span className="rounded-full shrink text-[#007ACC]"><CheckCircle size={20} weight="bold" /></span>ライトプラン：69,800円（税込）
          </li>
          <li className="flex gap-1 py-1 px-2 text-left text-sm font-medium">
            <span className="rounded-full shrink text-[#007ACC]"><CheckCircle size={20} weight="bold" /></span>スタンダードプラン：178,000円（税込）
          </li>
          <li className="flex gap-1 py-1 px-2 text-left text-sm font-medium">
            <span className="rounded-full shrink text-[#007ACC]"><CheckCircle size={20} weight="bold" /></span>プレミアムプラン：378,000円（税込）
          </li>
        </ul>
        <div className="">
          <Link
            href="#contact"
            className="mt-[10px] sm:mt-[12px] flex items-center justify-center gap-2 max-w-[400px] w-full bg-[#007ACC] text-white px-4 py-[14px] rounded-sm text-sm font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm hover:bg-[#007ACC] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#007ACC] focus:ring-offset-2 flex-shrink-0"
          >
            <NotePencil size={16} weight="bold" />まずは相談してみる
          </Link>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          ※本キャンペーンは予告なく終了する場合がございます。
        </div>
        <div className="text-xs text-gray-400 mt-1">
          ※本サイトやInstagramに実績として掲載OKな方限定になります。
        </div>
        <div className="text-xs text-gray-400 mt-1">
        ※本キャンペーン終了後は下記通常予定価格での提供を予定しております。
        </div>
      </div>
    </div>
  );
} 