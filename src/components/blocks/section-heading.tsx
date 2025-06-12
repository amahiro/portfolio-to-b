"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  icon?: React.ReactNode;
  titleJa: string;
  titleEn: string;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ icon, titleJa, titleEn, children }) => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-20">
      <div className="relative flex items-center justify-start">
        {/* 背景の英語テキスト */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute -left-[5px] bottom-[10px] sm:-left-[20px] sm:bottom-[16px] text-[60px] sm:text-[128px] font-extrabold text-gray-200 pointer-events-none select-none z-0 whitespace-pre-line leading-[1]"
        >
          {titleEn.split("\n").map((line, idx, arr) => (
            <React.Fragment key={idx}>
              {line}
              {idx !== arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.span>
        {/* アイコン＋日本語見出し */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center relative z-10"
        >
          {icon}
          <h2 className="text-[24px] sm:text-[40px] font-semibold text-gray-700">
            {titleJa}
          </h2>
        </motion.div>
      </div>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="mt-2"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeading; 