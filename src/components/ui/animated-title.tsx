"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTitleProps {
  japaneseTitle: string;
  englishTitle: string;
  className?: string;
}

const AnimatedTitle = ({ japaneseTitle, englishTitle, className = "" }: AnimatedTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px"
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const borderVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const titleContainerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative text-center mb-8 lg:mb-12 ${className}`}
    >
      <div className="relative">
        <motion.div 
          variants={borderVariants}
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gray-200 origin-left"
        />

        <motion.div
          variants={titleContainerVariants}
          className="relative inline-block bg-white px-12"
        >
          <motion.h3
            variants={titleVariants}
            className="relative"
          >
            <span 
              className="block text-[24px] lg:text-[32px]  tracking-[0.2em] font-normal mb-1"
              dangerouslySetInnerHTML={{ __html: japaneseTitle }}
            />
            <span 
              className="block text-[11px] text-gray-400 tracking-[0.3em] uppercase"
              dangerouslySetInnerHTML={{ __html: englishTitle }}
            />
          </motion.h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedTitle; 