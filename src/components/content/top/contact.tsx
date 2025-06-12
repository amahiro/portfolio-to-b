"use client";
import { InstagramLogo, Phone, EnvelopeSimple, NotePencil } from "@phosphor-icons/react";
import { INSTAGRAM_LINK, TEL, EMAIL } from "@/constants/site-info";
import Form from "@/components/forms/contact-form";
// import Image from "next/image";
import SectionHeading from "@/components/blocks/section-heading";
import SectionWrapper from "@/components/blocks/section-wrapper";


// const LINE_LINK = "https://lin.ee/xxxxxx"; // 仮のLINEリンク

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
        <SectionHeading
        icon={
          <>
            <NotePencil
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <NotePencil
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="お問い合わせ"
        titleEn="CONTACT"
      />
        <p className="lg:text-center text-sm sm:text-base mb-3 lg:mb-16 leading-relaxed">
          ご予約やお問い合わせは、お電話・メールなど、お好みの方法でお気軽にご連絡ください。<br className="hidden lg:block" />
          初めての方もお気軽にご相談いただけます。丁寧にご説明させていただきます。
        </p>
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6 mt-0 lg:mt-12">
            <p className="text-sm sm:text-base text-left capitalize leading-relaxed">
            SNSでのご連絡の際は「サイトを見ました」と添えて、<br />
            お名前・電話番号・メールアドレス・お問い合わせ内容をあわせてお送りください。
            </p>
            <div className="mt-6 space-y-8 md:mt-8">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-[#007ACC] bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <InstagramLogo size={24} weight="regular" />
                </span>
                <span className="mx-2 font-semibold">@hiro.web.create</span>
              </a>
              <a
                href={`tel:${TEL}`}
                className="flex items-center  tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-[#007ACC] bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <Phone size={24} weight="regular" />
                </span>
                <span className="mx-2 font-semibold">{TEL}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  truncate tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-[#007ACC] bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <EnvelopeSimple size={24} weight="regular" />
                </span>
                <span className="mx-2 font-semibold">{EMAIL}</span>
              </a>
              {/* <a
                href={LINE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  tracking-wider hover:opacity-60 transition-all duration-400"
              >
                <span className="border border-[#007ACC] bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <Image src="/icons/line.png" alt="LINE" width={20} height={20} />
                </span>
                <span className="mx-2 font-semibold">LINEでお問い合わせ</span>
              </a> */}
            </div>
          </div>
          <div className="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
            <div className="border border-gray-300 w-full px-4 py-6 lg:px-8 lg:py-10 mx-auto overflow-hidden bg-white lg:max-w-xl rounded-2xl">
              <Form />
              <p className="text-xs text-gray-500 mt-4 text-center">
                送信ボタンを押すことで
                <a href="/privacy-policy" className="underline hover:text-slate-700 transition-colors mx-1" target="_blank" rel="noopener noreferrer">
                  プライバシーポリシー
                </a>
                に同意したものとみなします。
              </p>
            </div>
          </div>
        </div>
    </SectionWrapper>
  );
}
