"use client";
import { useState } from "react";
import { Slot } from "radix-ui";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function AnimatedButton({ asChild, className, ...props }: ButtonProps) {
  const [hover, setHover] = useState(false);
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(
        "relative after:absolute after:inset-x-0 after:h-4 after:bg-amber-400 after:bottom-0 after:-z-10 after:transition-transform after:duration-100 after:origin-bottom",
        {
          "after:scale-y-0": !hover,
          "after:scale-y-100": hover,
        },
        className
      )}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      {...props}
    />
  );
}

export function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer hover:scale-105 transition-transform duration-100",
        {},
        className
      )}
      {...props}
    >
      {props.children}
    </Comp>
  );
}
