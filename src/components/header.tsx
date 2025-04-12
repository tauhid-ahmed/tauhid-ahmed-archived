import Image from "next/image";
import { Container, Section } from "./layout";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ImageDecoration } from "./image-decoration";

const navLinks = [
  { name: "About //", href: "/about" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "Hire", href: "/hire-me" },
];

export function Header() {
  return (
    <Section as="header" className="md:border-b-6 relative" padding="lg">
      <ImageDecoration
        className="right-0 top-0 translate-x-1/3 -translate-y-1/3 w-20 md:w-38"
        src="/assets/icons/octopus-pink.svg"
        width={150}
        height={130}
      />
      <ImageDecoration
        className="left-0 bottom-0 -translate-x-2/5 translate-y-1/4 w-20 md:w-32 hidden md:block"
        src="/assets/icons/octopus-pink.svg"
        width={150}
        height={130}
      />
      <Container size="sm">
        <nav className="border-2 md:border-5 px-3.5 md:px-5 bg-white flex gap-4 justify-between items-center">
          <NavPretty />
          <Logo />
          <NavMenu />
        </nav>
      </Container>
    </Section>
  );
}

function Logo() {
  return (
    <Link className="flex gap-4 items-center" href="/">
      <Image
        src="/assets/icons/star-rounded.svg"
        alt=""
        width={50}
        height={50}
        className="size-8 md:size-12"
      />
      <span className="font-bold text-2xl md:text-4xl">Tauhid</span>
    </Link>
  );
}

function NavMenu() {
  return (
    <ul className="flex gap-4">
      {navLinks.map((link) => (
        <li className="py-3.5 md:py-5 border-l-4 relative" key={link.name}>
          <Link
            className="text-xl md:text-2xl font-medium px-4"
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MenuToggle() {
  return;
}

function NavPretty() {
  return <div className="absolute inset-0"></div>;
}
