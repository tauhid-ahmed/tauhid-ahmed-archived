"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorHandler = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (ref.current) {
        ref.current.style.setProperty("--x", `${clientX}`);
        ref.current.style.setProperty("--y", `${clientY}`);
      }
      if (!visible) {
        setVisible(true);
      }
    };

    document.addEventListener("pointermove", cursorHandler);

    return () => {
      document.removeEventListener("pointermove", cursorHandler);
    };
  }, []);

  return (
    visible && (
      <div
        style={{
          transform:
            "translateX(calc((var(--x, 50%) * 1px) - 50%)) translateY(calc((var(--y, 50%) * 1px) - 50%))",
          transition: "transform 0.3s linear",
        }}
        ref={ref}
        className="size-10 cursor fixed rounded-full border-2 ring-2 ring-offset-2 outline outline-offset-1 z-[99999999] pointer-events-none [@media(pointer:coarse)]:hidden"
      ></div>
    )
  );
}
