"use client";
// import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import SectionHeading from "@/components/blocks/section-heading";
import SectionWrapper from "@/components/blocks/section-wrapper";

type SolutionSectionProps = {
  className?: string;
};

const SolutionSection = ({ className = "" }: SolutionSectionProps) => {

  return (
    <SectionWrapper id="service" className={className}>
      <SectionHeading
        icon={
          <>
            <CheckCircle
              weight="regular"
              size={24}
              className="mr-1 block sm:hidden"
            />
            <CheckCircle
              weight="regular"
              size={40}
              className="mr-2 hidden sm:block"
            />
          </>
        }
        titleJa="できること"
        titleEn="SERVICES"
      />
      <div className="relative mx-auto">

      </div>
    </SectionWrapper>
  );
};

export default SolutionSection; 