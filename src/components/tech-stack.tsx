const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Zod",
  "Node.js",
  "Express",
  "Hono",
  "tRPC",
  "Drizzle ORM",
  "Prisma",
  "PostgreSQL",
  "JWT",
  "REST API",
  "MVC Architecture",
  "Responsive Design",
  "Git & GitHub",
  "Vercel",
  "CI/CD",
];

export default function TechStack() {
  return (
    <section className="bg-black text-white py-10 overflow-hidden relative">
      <div className="flex whitespace-nowrap w-max animate-marquee">
        {technologies.map((tech, i) => (
          <span key={i} className="text-xl md:text-4xl font-semibold mx-5">
            {tech}
          </span>
        ))}
        {technologies.map((tech, i) => (
          <span
            key={`dup-${i}`}
            className="text-xl md:text-4xl font-semibold mx-5"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
