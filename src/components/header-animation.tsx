"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export default function HeaderAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Only hide when scrolling down and show when scrolling up
    if (ref.current) {
      if (latest > 50) {
        setHidden(latest > previous);
        ref.current.style.position = "fixed";
      } else {
        setHidden(false); // Always show header at the top of the page
        ref.current.style.position = "relative";
      }
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ y: hidden ? "-200%" : 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
