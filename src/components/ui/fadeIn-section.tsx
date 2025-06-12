"use client";
import { motion } from "framer-motion";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // 30%見えたら発火
    >
      {children}
    </motion.div>
  );
}