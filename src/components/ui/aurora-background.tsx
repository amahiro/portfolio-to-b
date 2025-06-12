"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function AuroraBackground({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <div className="aurora-bg w-full h-full" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
