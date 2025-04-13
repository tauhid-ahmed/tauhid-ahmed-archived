"use client";
import { useState } from "react";
import { navLinks } from "./header";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedButton, Button } from "./button";
import { cn } from "@/lib/cn";

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
            className="flex flex-col md:hidden absolute inset-x-0 top-full translate-y-2 gap-4 bg-white border-r-4 border-b-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <li
                className="py-3.5 md:py-5 border-l-4 relative after:inset-x-0 after:h-8 hover:after:bg-yellow-400 active:after:bg-yellow-400 focus:after:bg-yellow-400 after:absolute after:-z-10 after:bottom-0 after:transition-colors"
                key={link.name}
              >
                <Link className="text-2xl font-semibold px-4" href={link.href}>
                  {link.name}
                </Link>
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
