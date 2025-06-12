// import { Stethoscope, Users, ClipboardText, Bandaids } from "@phosphor-icons/react/dist/ssr";
// import HeroSlider from "@/components/content/top/hero-slider";
import React from 'react';
import InteractiveHero from "@/components/blocks/hero-section-nexus";

const HeroSection = () => {
  return (
    // <div className="relative pt-80 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:py-40 xl:py-44 hero-section">
    //   <HeroSlider />

    //   <div className="relative z-10 flex flex-col justify-center">
    //     <div className="container mx-auto px-4 lg:px-6 2xl:px-20">
    //       <div className="w-full max-w-[580px]">
    //         <div className="leading-relaxed bg-gradient-to-r from-slate-700/95 via-slate-700/70 to-slate-700/20 px-4 py-2 text-white text-sm lg:text-lg mb-4 lg:mb-8 font-mincho">
    //           腰の痛み、膝の痛み、首の痛み、肩こり、坐骨神経痛、<br className="hidden lg:block" />変形性膝関節症等
    //         </div>

    //         <div className="space-y-2 md:space-y-8">
    //           <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold  leading-relaxed text-shadow-white">
    //             身体のことで悩まないような
    //             <br />
    //             人生をおくってもらいたい。
    //           </h2>
    //           <p className="text-sm md:text-2xl  leading-relaxed text-shadow-white">
    //             痛みを少しでも取り除いて、
    //             <br />
    //             より豊かな人生を送ってもらえるように
    //           </p>
    //         </div>

    //         <div className="mt-6 md:mt-12 p-4 lg:p-6 w-full bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)]">
    //         <div className="grid sm:gap-2">
    //             <ul className="space-y-3">
    //               <li className="font-mincho text-sm lg:text-lg flex items-center gap-1 border-b border-color pb-2 lg:pb-4">
    //                 <span>
    //                   <ClipboardText size={22} weight="light" />
    //                 </span>
    //                 根本原因を突き止める丁寧な問診
    //               </li>
    //               <li className="font-mincho text-sm lg:text-lg flex items-center gap-1 border-b border-color pb-2 lg:pb-4">
    //                 <span>
    //                   <Bandaids size={22} weight="light" />
    //                 </span>
    //                 痛みを最小限に抑えた優しい施術
    //               </li>
    //               <li className="font-mincho text-sm lg:text-lg flex items-center gap-1 border-b border-color pb-2 lg:pb-4">
    //                 <span>
    //                   <Users size={22} weight="light" />
    //                 </span>
    //                 地域密着での信頼と実績
    //               </li>
    //               <li className="font-mincho text-sm lg:text-lg flex items-center gap-1">
    //                 <span>
    //                   <Stethoscope size={22} weight="light" />
    //                 </span>
    //                 医療機関との連携体制
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <InteractiveHero />
  );
};

export default HeroSection;
