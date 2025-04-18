import Image from "next/image";
import { Container, Section } from "./layout";
import { ImageDecoration } from "./image-decoration";
import { UnderlineNotation } from "./animation";
import { ResumeViewer } from "./resume-viewer";
import { Button } from "./button";
import Link from "next/link";

export function Intro() {
  return (
    <Section padding="lg" className="relative" id="#about">
      <ImageDecoration
        className="-left-0 -bottom-0  -translate-x-1/2 translate-y-1/2"
        src="/assets/icons/octopus-red.svg"
        width={150}
        height={130}
      />
      <Container>
        <div className="flex md:gap-8 flex-col md:justify-between md:items-center md:flex-row">
          <div className="flex-1 shrink text-center md:text-left space-y-8 order-2 md:order-1">
            <Image
              src="/assets/icons/sun-blue.svg"
              width={145}
              height={145}
              alt="Sun Icon Sky Color"
              className="inline-block size-20 md:size-36"
            />
            {/* <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold">
              I Develop ✍️ Modern, Scalable Web{" "}
              <UnderlineNotation>Applications</UnderlineNotation>.
            </h1> */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold">
              I Build Modern, Scalable Web{" "}
              <UnderlineNotation>Applications</UnderlineNotation>.
            </h1>

            <div className="inline-flex gap-6 mx-auto md:m-0">
              <ResumeViewer />
              <div className="relative">
                <Button
                  className="font-semibold text-lg md:text-2xl border-6 rounded-full px-8 py-4 bg-sky-200"
                  asChild
                >
                  <Link href="/#portfolio">Portfolio</Link>
                </Button>
                <Image
                  src="/assets/icons/paw.svg"
                  width={80}
                  height={40}
                  alt="paw icon"
                  className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-12 h-20"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 shrink-0 flex justify-center md:justify-end order-1 md:order-2">
            <div className="aspect-square w-full relative">
              <Image
                src="/assets/images/frame.svg"
                fill
                alt="Photo Frame"
                className="z-10"
              />
              <div className="p-10 size-full">
                <div className="size-full relative overflow-hidden">
                  <Image
                    src="/assets/images/me.webp"
                    fill
                    alt="Tauhid Ahmed"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
