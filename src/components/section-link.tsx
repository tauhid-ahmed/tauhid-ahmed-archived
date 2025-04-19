"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export default function SectionLink({
  name,
  targetId,
}: {
  name: string;
  targetId: string;
}) {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor jump behavior
    setActiveSection(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      key={activeSection}
      onClick={handleClick(targetId)}
      className={cn(
        "text-xl z-10 md:text-2xl font-medium px-4 relative after:inset-x-0 after:h-4 after:bg-yellow-400 after:scale-y-0 hover:after:scale-y-100 active:after:scale-y-100 focus:after:scale-y-100 after:absolute after:-z-10 after:bottom-0 after:transition-transform after:origin-bottom w-full cursor-pointer text-left"
      )}
    >
      {name}
    </button>
  );
}
