import { Container, Section } from "./layout";

export default function Services() {
  return (
    <Section padding="lg">
      <Container>
        <div className="space-y-14 sm:translate-x-6">
          <SectionHeader />
          <div className="sm:flex border-4 sm:border-l-transparent sm:border-r-transparent max-w-md mx-auto sm:max-w-none">
            <div className="basis-1/3 sm:border-r-4">
              <div className="p-6 sm:px-0 md:py-8 lg:py-10 border-b-4">
                <div className="text-3xl font-medium">39</div>
                <div>Projects</div>
              </div>
              <div className="p-6 sm:px-0 md:py-8 lg:py-10 border-b-4">
                <div className="text-3xl font-medium">100k+</div>
                <div>Granted</div>
              </div>
            </div>
            <div className="sm:flex flex-wrap basis-2/3">
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
    <h2 className="text-4xl md:text-5xl font-semibold text-sky-600">
      Services we&apos;re providing that derive 99% result
    </h2>
  );
}

export function Card() {
  return (
    <div className="relative basis-1/2 sm:border-r-4">
      <div className="-my-0.5 p-6 md:p-8 lg:p-10 space-y-2">
        <div className="size-14 rounded-full border-4"></div>
        <h3 className="text-4xl font-bold">User Research</h3>
        <p>Services we&apos;re providing that derive 99% result</p>
      </div>{" "}
      <div className="text-4xl px-6 md:px-8 lg:px-10 py-4 border-t-4 border-b-4 -mb-1">
        Learn More
      </div>
    </div>
  );
}
