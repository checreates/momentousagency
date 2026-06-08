import Image from "next/image"
import { BRAND_LOGO_SRC, BRAND_NAME } from "@/lib/brand"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function BrandLogo({
  width,
  height,
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={BRAND_LOGO_SRC}
      alt={BRAND_NAME}
      width={width}
      height={height}
      className={cn("object-contain rounded-xl", className)}
      priority={priority}
      loading={priority ? "eager" : undefined}
    />
  )
}
