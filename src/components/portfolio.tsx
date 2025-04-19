import Image from "next/image";
import { Container, Section } from "./layout";
import { Button } from "./button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Portfolio() {
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
        <div className="space-y-2 aspect-video md:max-h-84 relative overflow-hidden">
          {[...images, images[0]].map((image, index) => (
            <motion.div
              className="size-full absolute"
              key={index}
              style={{
                top: `${index * 100}%`,
              }}
              animate={{
                y: `${images.length * -100}%`,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                height={300}
                width={300}
                src={image}
                alt={"title"}
                className="size-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4 justify-between">
          <div className="space-y-4">
            <h3 className="text-xl md:text-4xl font-semibold">{title}</h3>
            <p className="md:text-xl lg:text-2xl font-medium">{description}</p>
          </div>
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

const projects = [
  {
    title: "Centurion",
    images: [
      "/assets/projects/centurion/centurion-1.webp",
      "/assets/projects/centurion/centurion-2.webp",
      "/assets/projects/centurion/centurion-3.webp",
    ],
    description:
      "Product listings – Search & filter UI – React + TypeScript + Motion",
    href: "/",
  },
  {
    title: "Static portfolio",
    images: ["/assets/projects/portfolio.webp"],
    description: "Responsive UI – Animations – Static Next.js build + Motion",
    href: "/",
  },
  {
    title: "Issue tracker",
    images: ["/assets/projects/issue-tracker.webp"],
    description:
      "Fullstack CRUD – Optimistic UI – Next.js App Router + Drizzle ORM",
    href: "/",
  },
  {
    title: "E-commerce",
    images: ["/assets/projects/ecommerce.webp"],
    description:
      "Product listings – Search & filter UI – React + TypeScript + Motion",
    href: "/",
  },
];
