import { Intro } from "@/components/intro";
import Portfolio from "@/components/portfolio";
import TechStack from "@/components/tech-stack";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Intro />
      <TechStack />
      <Portfolio />
      <Testimonial />
    </>
  );
}
