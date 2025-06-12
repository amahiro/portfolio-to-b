import React from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const baseClass =
  "scroll-mt-[60px] py-12 lg:py-20 pt-16 sm:pt-36 lg:pt-48 px-4 md:px-16 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto";

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = "", children }) => (
  <section id={id} className={`${baseClass} ${className}`}>
    {children}
  </section>
);

export default SectionWrapper; 