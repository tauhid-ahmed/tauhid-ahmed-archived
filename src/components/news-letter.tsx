import { Container, Section } from "./layout";
import Image from "next/image";

export default function Newsletter() {
  return (
    <Section padding="lg">
      <Container>
        <div className="text-center bg-white border-4 px-10 py-20 lg:p-24 shadow-[12px_12px_0px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-medium">
            Let&apos;s start designing your project
          </h2>
          <p className="text-sm md:text-xl lg:text-3xl max-w-2xl mx-auto mt-5">
            Want to see how to transform your brand into a unique style. sent us
            a message
          </p>
          <div className="relative w-fit mx-auto mt-8 lg:mt-12">
            <button className="font-semibold md:text-xl lg:text-2xl border-4 rounded-full px-6 py-2 bg-sky-200">
              Send me message
            </button>
            <Image
              src="/assets/icons/paw.svg"
              width={80}
              height={40}
              alt="paw icon"
              className="absolute right-0 bottom-0 translate-x-8 translate-y-6 w-10 h-16"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
