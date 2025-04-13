import Image from "next/image";
import { Container, Section } from "./layout";
import { AnimatedButton } from "./button";
import Link from "next/link";

const services = [
  {
    title: "User Research",
    description: "Understand your audience to design with purpose and clarity.",
    icon: "/assets/icons/service-icon-1.svg",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, accessible, and aesthetically sharp interfaces.",
    icon: "/assets/icons/service-icon-2.svg",
  },
  {
    title: "Full-Stack Development",
    description: "Scalable and maintainable solutions using modern frameworks.",
    icon: "/assets/icons/service-icon-3.svg",
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading, SEO-friendly apps built for real-world use.",
    icon: "/assets/icons/service-icon-4.svg",
  },
];

export default function Services() {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-16 lg:translate-x-8">
          <SectionHeader />
          <div className="flex flex-col md:flex-row">
            <div className="md:basis-1/3">
              <div className="max-md:border-2 max-md:-mb-1 font-medium">
                <div className="p-8 md:p-10 lg:p-15 md:!px-0 max-md:border-2 md:border-t-4">
                  <div className="text-4xl lg:text-5xl">39</div>
                  <span className="md:text-2xl">Projects</span>
                </div>
                <div className="p-8 md:p-10 lg:p-15 md:!px-0 max-md:border-2  md:border-t-4">
                  <div className="text-4xl lg:text-5xl">100k+</div>
                  <span className="md:text-2xl">generated</span>
                </div>
              </div>
            </div>
            <div className="md:flex flex-wrap md:basis-2/3 border-2">
              {services.map((service, index) => (
                <Card key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function SectionHeader() {
  return (
    <div className="flex items-center gap-4">
      <h2 className="relative text-2xl md:text-3xl lg:text-5xl leading-tight font-semibold">
        Services we&apos;re providing <br /> that derive 99% result
      </h2>
      <Image src="/assets/icons/smile.svg" width={60} height={60} alt="smile" />
    </div>
  );
}

export function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="relative flex flex-col basis-full md:basis-1/2 md:max-w-1/2 justify-between border-2 ">
      <div className="-my-0.5 p-8 md:p-10 lg:p-15 space-y-5">
        <div className="size-16 rounded-full border-2">
          <Image src={icon} width={100} height={100} alt="service-icon" />
        </div>
        <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
        <p className="lg:text-2xl font-medium">{description}</p>
      </div>
      <button className="text-2xl text-left font-medium lg:text-4xl border-t-4 px-8 md:px-10 lg:px-15 py-6">
        <AnimatedButton className="inline-block" asChild>
          <Link href="/">Learn More</Link>
        </AnimatedButton>
      </button>
    </div>
  );
}
