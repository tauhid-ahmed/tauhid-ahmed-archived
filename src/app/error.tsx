"use client";
import { Button } from "@/components/button";
import { Section, Container } from "@/components/layout";

export default function RootError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Section>
      <Container>
        <div className="py-36 text-center flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">{error.name}</h1>
          <h2 className="text-6xl font-bold">{error.message}</h2>
          <Button
            className="border-4 px-8 py-2 font-semibold text-xl"
            onClick={reset}
          >
            Reset
          </Button>
        </div>
      </Container>
    </Section>
  );
}
