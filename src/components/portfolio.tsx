import Image from "next/image";
import { Container, Section } from "./layout";
import { Button } from "./button";
import Link from "next/link";
import { ProjectThumbnail } from "./project-thumbnail";
import { projects } from "@/data";

export function Portfolio() {
  return (
    <Section padding="lg" id="portfolio">
      <Container>
        <div className="space-y-16">
          <SectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Card({
  title,
  images,
  description,
}: {
  title: string;
  images: string[];
  description: string;
}) {
  return (
    <>
      <div className="relative p-14 space-y-6 md:space-y-8">
        <ProjectThumbnail images={images} alt={title} />
        <div className="flex gap-4 flex-col justify-between relative">
          <div className="space-y-6">
            <h3 className="flex gap-2 items-center justify-between text-xl md:text-4xl font-semibold">
              {title}
              <Button
                asChild
                className="bg-black size-10 shrink-0 flex justify-center items-center shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
              >
                <Link href="/">
                  <Image
                    src="/assets/icons/arrow.svg"
                    width={24}
                    height={24}
                    alt="arrow-right"
                  />
                </Link>
              </Button>
            </h3>
            <p className="md:text-xl lg:text-2xl font-medium">{description}</p>
          </div>
        </div>

        <Image
          height={300}
          width={600}
          src="/assets/icons/card-border.svg"
          alt="card-border"
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      </div>
    </>
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
