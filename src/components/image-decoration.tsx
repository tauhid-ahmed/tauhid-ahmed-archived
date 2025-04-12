import Image from "next/image";
import { cn } from "@/lib/cn";

export function ImageDecoration({
  className,
  width,
  height,
  src,
}: {
  className?: string;
  width?: number;
  height?: number;
  src: string;
}) {
  return (
    <div className={cn("absolute", className)}>
      <Image width={width} height={height} src={src} alt="decoration-image" />
    </div>
  );
}
