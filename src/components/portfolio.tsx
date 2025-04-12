import Image from "next/image";
import { Container, Section } from "./layout";

export default function Portfolio() {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-10">
          <SectionHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Card() {
  return (
    <div className="relative max-w-2xl mx-auto p-12 lg:px-14 lg:py-10 space-y-4 md:space-y-6 ">
      <div className="relative">
        <Image
          height={300}
          width={300}
          src="/assets/projects/issue-tracker.webp"
          alt="card-border"
          className="size-full object-cover aspect-video md:max-h-84"
        />
      </div>
      <div className="">
        <h3 className="text-xl md:text-3xl font-semibold">Portfolio design</h3>
        <p className="text-lg font-medium">
          UI design - User research - webflow develop
        </p>
      </div>

      <Image
        height={300}
        width={600}
        src="/assets/icons/card-border.svg"
        alt="card-border"
        className="absolute inset-0 size-full object-cover pointer-events-none"
      />
    </div>
  );
}

function SectionHeader() {
  return (
    <h2 className="text-[40px] flex justify-center items-center lg:text-6xl xl:text-[80px] leading-tight font-semibold">
      <div className="relative inline-flex md:justify-center md:items-center">
        My&nbsp;
        <span className="relative inline-block">
          Portfolio&nbsp;&nbsp;
          <Image
            src="/assets/icons/underline.svg"
            fill
            alt="underline"
            className="absolute top-1/2 translate-y-1/2"
          />
        </span>
        <Image
          src="/assets/icons/sun-blue.svg"
          width={120}
          height={120}
          alt="underline"
          className="size-14 md:size-24 md:absolute md:left-full"
        />
      </div>
    </h2>
  );
}
