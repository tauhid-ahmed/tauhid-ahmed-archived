"use client";

import { useRef } from "react";
import { Container } from "./layout";
import { about_me } from "@/data";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "0.9 end"],
  });
  return (
    <section
      id="about-me"
      ref={containerRef}
      className="after:h-[200vh] after:block py-20"
    >
      <div className="min-h-screen flex items-center justify-center sticky top-0">
        <Container size="sm">
          <div className="size-44 overflow-hidden border-6 shadow-[12px_12px_0px_rgba(0,0,0,0.4)] grayscale">
            <Image
              src="/assets/images/me2.webp"
              alt="tauhid ahmed"
              width={300}
              height={300}
              className="size-full object-cover origin-top-right rounded-full scale-100 border-4 border-black"
            />
          </div>
          <div className="relative text-xl pointer-events-none md:text-3xl leading-normal font-medium mt-4">
            <TextAnimation text={about_me} scrollYProgress={scrollYProgress} />
          </div>
        </Container>
      </div>
    </section>
  );
}

type TextAnimationProps = {
  text: string;
  scrollYProgress: MotionValue<number>;
};

export function TextAnimation({ text, scrollYProgress }: TextAnimationProps) {
  const words = text.split(" ");
  return (
    <p className="flex flex-wrap leading-[90%]">
      {words.map((word, index) => (
        <Word
          key={index}
          word={word}
          wordIndex={index}
          wordsLength={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

type WordProps = {
  word: string;
  wordIndex: number;
  wordsLength: number;
  scrollYProgress: MotionValue<number>;
};

function Word({ word, wordIndex, wordsLength, scrollYProgress }: WordProps) {
  const range = [wordIndex / wordsLength, (wordIndex + 1) / wordsLength];
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <span className="pr-3 pt-3">
      {word.split("").map((letter, letterIndex) => (
        <Letter
          key={letterIndex}
          wordLength={word.length}
          letterIndex={letterIndex}
          range={range}
          opacity={opacity}
        >
          {letter}
        </Letter>
      ))}
    </span>
  );
}

type LetterProps = {
  wordLength: number;
  range: number[];
  letterIndex: number;
  opacity: MotionValue<number>;
  children: React.ReactNode;
};

function Letter({
  wordLength,
  letterIndex,
  range,
  opacity,
  children,
}: LetterProps) {
  const letterLength = (range[1] - range[0]) / wordLength;
  const start = range[0] + letterIndex * letterLength;
  const end = range[0] + (letterIndex + 1) * letterLength;
  const o = useTransform(opacity, [start, end], [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20 pointer-events-none select-none">
        {children}
      </span>
      <motion.span
        style={{ opacity: o }}
        transition={{ duration: 0.2, ease: "linear" }}
      >
        {children}
      </motion.span>
    </span>
  );
}
