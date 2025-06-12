import Link from "next/link";
import { ReactNode } from "react";

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  isIconLeft?: boolean;
  noIconAnimation?: boolean;
  isHeader?: boolean;
}

export default function GradientButton({ 
  href, 
  children, 
  icon, 
  className = "", 
  isIconLeft = false, 
  noIconAnimation = false,
  isHeader = false 
}: GradientButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center text-sm font-medium text-white hover:text-white hover:opacity-80 border border-slate-500 transition-all duration-200";
  const sizeClasses = isHeader 
    ? "px-6 py-2" 
    : "px-8 py-3 lg:px-12 lg:py-4 min-w-[240px]";

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${sizeClasses} ${className} relative`}
    >
      {isIconLeft && icon && (
        <span className={`absolute left-[10px] top-1/2 -translate-y-1/2 flex items-center ${!noIconAnimation && 'transition-transform duration-200 group-hover:-translate-x-0.5'}`}>{icon}</span>
      )}
      <span className={`block text-center pl-1 ${isIconLeft ? 'pl-4' : ''}`}>{children}</span>
      {!isIconLeft && icon && (
        <span className={`absolute right-[10px] top-1/2 -translate-y-1/2 flex items-center ${!noIconAnimation && 'transition-transform duration-200 group-hover:translate-x-0.5'}`}>{icon}</span>
      )}
    </Link>
  );
} 