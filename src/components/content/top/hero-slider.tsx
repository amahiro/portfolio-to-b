"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      pc: "/top/mv1-pc.jpg",
      sp: "/top/mv1-sp.jpg",
      alt: "メインビジュアル1"
    },
    {
      pc: "/top/mv2-pc.jpg",
      sp: "/top/mv2-sp.jpg",
      alt: "メインビジュアル2"
    },
    {
      pc: "/top/mv3-pc.jpg",
      sp: "/top/mv3-sp.jpg",
      alt: "メインビジュアル3"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.pc}
          className={`absolute inset-0 will-change-transform will-change-opacity
            ${index === currentSlide 
              ? "opacity-100 scale-100 transition-all duration-[4000ms] ease-in-out" 
              : "opacity-0 scale-105 transition-all duration-[4000ms] ease-in-out"}`}
        >
          {/* PC用画像 */}
          <Image
            className="object-cover w-full h-full hidden md:block"
            src={slide.pc}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            quality={90}
          />
          {/* SP用画像 */}
          <Image
            className="object-cover w-full h-full block md:hidden"
            src={slide.sp}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlider; 