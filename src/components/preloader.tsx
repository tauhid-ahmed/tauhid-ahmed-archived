"use client";
import { cn } from "@/lib/cn";
import { motion } from "motion/react";

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[999] pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          initial={{ height: "100%" }}
          animate={{ height: 0 }}
          transition={{ delay: i * 0.05 }}
          key={i}
          className={cn("w-[20%] h-full absolute bottom-0 bg-foreground")}
          style={{
            left: `${i * 20}%`,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
