import Image from "next/image";
import { Container, Section } from "./layout";
import { ImageDecoration } from "./image-decoration";

export function Intro() {
  return (
    <Section padding="lg" className="relative">
      <ImageDecoration
        className="-left-0 -bottom-0  -translate-x-1/2 translate-y-1/2"
        src="/assets/icons/octopus-pink.svg"
        width={150}
        height={130}
      />
      <Container>
        <div className="flex md:gap-8 flex-col md:justify-between md:items-center md:flex-row">
          <div className="flex-1 text-center md:text-left space-y-4">
            <Image
              src="/assets/icons/sun-pink.svg"
              width={145}
              height={145}
              alt="Sun Icon Sky Color"
              className="inline-block size-20 md:size-36"
            />
            <h1 className="text-[42px] lg:text-6xl xl:text-[80px] leading-tight font-semibold">
              I develop ✍️ top notch websites
            </h1>
            <div className="relative w-fit mx-auto md:m-0">
              <button className="font-semibold text-2xl border-6 rounded-full px-14 py-4 bg-sky-200">
                See Portfolio
              </button>
              <Image
                src="/assets/icons/paw.svg"
                width={80}
                height={40}
                alt="paw icon"
                className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-12 h-20"
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/assets/icons/placeholder.png"
              width={500}
              height={500}
              alt="Sun Icon Sky Color"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
