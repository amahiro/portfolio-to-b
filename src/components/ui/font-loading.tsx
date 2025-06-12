"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_NAME } from "@/constants/site-info";

export default function FontLoading({ children }: { children: React.ReactNode }) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const fontReady = async () => {
      if (document.fonts) {
        await document.fonts.ready;
      }
      setIsFontLoaded(true);
    };

    fontReady();
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isFontLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="loader" data-text={SITE_NAME}></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isFontLoaded && children}
    </>
  );
}