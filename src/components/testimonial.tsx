import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container, Section } from "./layout";

export function Testimonial() {
  return (
    <Section padding="lg" className="md:!pb-36">
      <Container>
        <div className="space-y-14 md:space-y-24">
          <SectionHeader />
          <div className="grid gap-14 grid-cols-1 md:grid-cols-[1fr_2rem_1fr]">
            {testimonials.map((testimonial, index) => (
              <Card key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const testimonials = [
  {
    quote:
      "Tauhid brought our interface to life. Clean animations, responsive design, and TypeScript precision — top-tier work.",
    name: "Aria Bennett",
    title: "Design Lead",
    company: "Lunaria Studio, Arcadia",
    className:
      "md:row-start-1 md:col-start-1 md:col-span-2 origin-top-left rotate-3",
    image: "/assets/clients/man-1.webp",
  },
  {
    quote:
      "From Hono to Postgres, Tauhid bridges backend logic and frontend polish effortlessly. Truly full-stack.",
    name: "Kenji Takahashi",
    title: "Senior Engineer",
    company: "NimbusForge, NeoTokyo",
    className:
      "md:row-start-1 md:col-start-2 md:col-span-2 md:translate-y-14 origin-bottom-right -rotate-3",
    image: "/assets/clients/woman-2.webp",
  },
  {
    quote:
      "What impressed us most was the subtlety of his motion design. Framer Motion felt like part of the brand itself.",
    name: "Mira Solène",
    title: "Product Designer",
    company: "Velora, Nouvelle Lune",
    className:
      "row-start-2 md:col-start-1 md:col-span-2 origin-top-left rotate-3",
    image: "/assets/clients/woman-1.webp",
  },
  {
    quote:
      "Tauhid’s stack mastery is insane — Drizzle, Prisma, and Next.js all play like a symphony in his hands.",
    name: "Diego Marquez",
    title: "CTO",
    company: "Aether Systems, Solaria",
    className:
      "md:row-start-2 md:col-start-2 md:col-span-2 md:translate-y-32 origin-bottom-right rotate-3",
    image: "/assets/clients/man-2.webp",
  },
];

function Card({
  quote,
  name,
  title,
  company,
  className,
  image,
}: {
  quote: string;
  name: string;
  title: string;
  company: string;
  className?: string;
  image: string;
}) {
  return (
    <figure
      className={cn(
        "bg-white w-full border-4 p-6 md:px-10 md:py-11 shadow-[8px_8px_0px_rgba(0,0,0,0.4)] space-y-12",
        className
      )}
    >
      <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
        {quote}
      </blockquote>
      <figcaption className="flex items-center space-x-4">
        <div className="border-2 rounded-full shrink-0">
          <Image
            className="w-14 h-14 rounded-full object-cover"
            src={image}
            alt={name}
            width={56}
            height={56}
          />
        </div>
        <div className="text-left space-y-1">
          <div className="md:text-2xl lg:text-3xl font-semibold text-gray-900">
            {name}
          </div>
          <div className="text-md md:text-xl lg:text-2xl">
            {title} at {company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function SectionHeader() {
  return (
    <div className="flex items-center gap-4">
      <h2 className="relative text-2xl md:text-3xl lg:text-5xl leading-tight font-semibold">
        Here&apos;s what my clients colleagues <br /> are saying about my work
      </h2>
      <div className="right-auto">
        <Image
          src="/assets/icons/new.svg"
          alt="underline"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
