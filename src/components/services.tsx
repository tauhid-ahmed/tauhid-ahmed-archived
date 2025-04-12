import Image from "next/image";
import { Container, Section } from "./layout";

export default function Services() {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-16 lg:translate-x-8">
          <SectionHeader />
          <div className="md:grid sm:grid-cols-2 md:grid-cols-3">
            <div className="max-md:border-2 max-md:-mb-1">
              <div className="py-10 max-md:border-2 md:border-t-4">
                <div>39</div>
                <span>Projects</span>
              </div>
              <div className="py-10 max-md:border-2  md:border-t-4">
                <div>39</div>
                <span>Projects</span>
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
      <h2 className="text-2xl md:text-xl font-semibold">
        Services we&apos;re providing <br /> that derive 99% result
      </h2>
      <Image src="/assets/icons/smile.svg" width={40} height={40} alt="smile" />
    </div>
  );
}

export function Card() {
  return (
    <div className="relative basis-full md:basis-1/2 border-2">
      <div className="-my-0.5 p-6 md:p-8 lg:p-10 space-y-2">
        <div className="size-14 rounded-full border-4"></div>
        <h3 className="text-4xl font-bold">User Research</h3>
        <p>Services we&apos;re providing that derive 99% result</p>
      </div>{" "}
      <div className="text-2xl font-medium md:text-4xl border-t-4 px-6 md:px-8 lg:px-10 py-4">
        Learn More
      </div>
    </div>
  );
}
