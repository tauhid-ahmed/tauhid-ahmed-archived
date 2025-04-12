import { Section } from "./layout";

export default function TechStack() {
  return (
    <Section className="bg-black p-10 text-white z-10">
      {["Next.js", "Tailwind", "TypeScript", "React", "Node.js", "Express"].map(
        (tech) => (
          <span
            key={tech}
            className="text-xl md:text-5xl font-medium px-4 lg:px-10"
          >
            {tech}
          </span>
        )
      )}
    </Section>
  );
}
