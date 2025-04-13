"use client";

import { Intro } from "@/components/intro";
import Newsletter from "@/components/news-letter";
import Portfolio from "@/components/portfolio";
import { ResumeViewer } from "@/components/resume-viewer";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Intro />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonial />
      <Newsletter />
    </>
  );
}
