import { Button } from "@/components/button";
import { Container, Section } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

export default function RootNotFound() {
  return (
    <Section>
      <Container>
        <div className="py-28 text-center flex flex-col items-center gap-8">
          <Image
            src="/assets/icons/octopus-red.svg"
            width={100}
            height={100}
            alt="red octopus"
            className="size-32 lg:size-44"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Page not found 404
          </h1>
          <Button asChild>
            <Link
              className="border-4 px-8 py-2 font-semibold text-xl shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
              href="/"
            >
              Back to home
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
