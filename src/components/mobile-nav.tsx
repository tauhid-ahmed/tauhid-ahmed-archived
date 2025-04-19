"use client";
import { useState } from "react";
import { sections } from "./header";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./button";
import { cn } from "@/lib/cn";
import SectionLink from "./section-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="text-xl md:hidden md:text-2xl font-medium p-4"
      >
        <MenuIcon isMenuOpen={open} />
      </Button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { delay: 0.1 } }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col md:hidden absolute inset-x-0 top-full translate-y-2 bg-white border-2 shadow-[8px_8px_0px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {sections.map((item) => (
              <li className="py-3.5 md:py-5 relative" key={item.name}>
                <SectionLink name={item.name} targetId={item.section} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuIcon({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <motion.div
      className={cn(
        "relative grid place-items-center size-8 border-2 border-transparent transition-colors",
        isMenuOpen && "border-black"
      )}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isMenuOpen ? [0, 45] : [0, 0],
          y: isMenuOpen ? 0 : -10,
        }}
        className={cn("inset-x-0 h-1 bg-black rounded absolute", {})}
      />
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 0 : 1,
          transition: { duration: 0.1 },
        }}
        className={cn("inset-x-0 h-1 bg-black rounded absolute", {})}
      />
      <motion.div
        initial={false}
        animate={{
          rotate: isMenuOpen ? [0, -45] : [0, 0],
          y: isMenuOpen ? 0 : 10,
        }}
        className={cn("inset-x-0 h-1 bg-black rounded absolute", {})}
      />
    </motion.div>
  );
}
