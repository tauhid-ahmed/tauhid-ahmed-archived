import { cn } from "@/lib/cn";
import React from "react";

type Props = React.ComponentProps<"div"> & {
  size?: "sm" | "default";
  className?: string;
  children?: React.ReactNode;
  as?: "div" | "section" | "header" | "footer";
  padding?: "default" | "lg";
};

export function Container({ size = "default", className, children }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-8",
        {
          "max-w-3xl": size === "sm",
          "max-w-7xl": size === "default",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  as,
  padding = "default",
  ...props
}: Props) {
  const Component = as || "section";
  return (
    <Component
      className={cn(
        "py-12 relative overflow-hidden",
        {
          "md:py-20": padding === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
