"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export default function HeaderAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hidden, setHidden] = useState(false);
  const [initial, setInitial] = useState(true);
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const previousRef = useRef<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - previousRef.current;

    if (latest <= 100) setInitial(true);
    else setInitial(false);

    if (Math.abs(delta) > 50) {
      setHidden(delta > 0);
      previousRef.current = latest;
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={false}
      layout
      animate={{
        position: initial ? "relative" : "fixed",
        y: hidden ? "-200%" : "0",
      }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
