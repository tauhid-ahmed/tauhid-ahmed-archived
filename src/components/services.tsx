import Image from "next/image";
import { Container, Section } from "./layout";

export default function Services() {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-16 lg:translate-x-8">
          <SectionHeader />
          <div className="md:grid sm:grid-cols-2 md:grid-cols-3">
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
            <div className="col-span-2 border-2 flex flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
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
      <h2 className="text-3xl lg:text-4xl font-semibold">
        Services we&apos;re providing <br /> that derive 99% result
      </h2>
      <Image src="/assets/icons/smile.svg" width={60} height={60} alt="smile" />
    </div>
  );
}

export function Card() {
  return (
    <div className="relative basis-full md:basis-1/2 border-2">
      <div className="-my-0.5 p-8 md:p-10 lg:p-15 space-y-5">
        <div className="size-16 rounded-full border-4"></div>
        <h3 className="text-2xl lg:text-4xl font-bold">User Research</h3>
        <p className="lg:text-2xl font-medium">
          Services we&apos;re providing that derive 99% result
        </p>
      </div>{" "}
      <div className="text-2xl font-medium lg:text-4xl border-t-4 px-8 md:px-10 lg:px-15 py-6">
        Learn More
      </div>
    </div>
  );
}
