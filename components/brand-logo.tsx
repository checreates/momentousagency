import Image from "next/image"
import { BRAND_LOGO_SRC, BRAND_NAME } from "@/lib/brand"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  width: number
  height: number
  className?: string
  /** Light pill behind logo — use on dark footer */
  onDark?: boolean
  priority?: boolean
}

export function BrandLogo({
  width,
  height,
  className,
  onDark = false,
  priority = false,
}: BrandLogoProps) {
  const image = (
    <Image
      src={BRAND_LOGO_SRC}
      alt={BRAND_NAME}
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority={priority}
    />
  )

  if (!onDark) return image

  return (
    <span className="inline-flex rounded-xl bg-white/95 p-1 shadow-sm">
      {image}
    </span>
  )
}
