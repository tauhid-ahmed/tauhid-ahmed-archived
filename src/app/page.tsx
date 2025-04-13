import { Intro } from "@/components/intro";
import Newsletter from "@/components/news-letter";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import { Testimonial } from "@/components/testimonial";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 100));
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
