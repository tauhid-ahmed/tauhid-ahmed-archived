"use client";
import { Slot } from "radix-ui";
import { cn } from "@/lib/cn";

type Props = {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function UnderlineNotation({ asChild, className, ...props }: Props) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(
        "relative after:absolute after:inset-x-0 after:h-6 after:bg-yellow-400 after:bottom-0 after:-z-10 after:transition-transform after:duration-100 after:origin-bottom after:scale-y-100",
        className
      )}
      {...props}
    />
  );
}
