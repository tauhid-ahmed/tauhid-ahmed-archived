import Image from "next/image";
import { Container } from "./layout";
import Link from "next/link";
import { ImageDecoration } from "./image-decoration";
import { MobileNav } from "./mobile-nav";
import HeaderAnimation from "./header-animation";
import SectionLink from "./section-link";

export const sections = [
  { name: "About //", section: "about-me" },
  { name: "Portfolio", section: "portfolio" },
  { name: "Hire Me", section: "hire-me" },
];

export function Header() {
  return (
    <header className="md:border-b-6 z-40 py-12 relative md:min-h-[184px]">
      <ImageDecoration
        className="right-0 top-0 translate-x-1/3 -translate-y-1/3 w-20 md:w-38"
        src="/assets/icons/octopus-red.svg"
        width={150}
        height={130}
      />
      <ImageDecoration
        className="left-0 bottom-0 -translate-x-2/5 translate-y-1/4 w-20 md:w-32 hidden md:block"
        src="/assets/icons/octopus-red.svg"
        width={150}
        height={130}
      />
      <HeaderAnimation>
        <Container size="sm">
          <nav className="relative border-2 md:border-5 px-3.5 md:px-5 bg-white flex gap-4 justify-between items-center">
            <NavPretty />
            <Logo />
            <DesktopNav />
            <MobileNav />
          </nav>
        </Container>
      </HeaderAnimation>
    </header>
  );
}

function Logo() {
  return (
    <Link className="flex gap-2 items-center" href="/">
      <Image
        src="/assets/icons/star-rounded.svg"
        alt=""
        width={50}
        height={50}
        className="size-8 md:size-12"
      />
      <span className="font-bold text-2xl md:text-3xl uppercase">Tauhid</span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <ul className="md:flex gap-4 hidden">
      {sections.map((item) => (
        <li className="py-3.5 md:py-5 border-l-4" key={item.name}>
          <SectionLink name={item.name} targetId={item.section} />
        </li>
      ))}
    </ul>
  );
}

function NavPretty() {
  return (
    <div className="absolute inset-0 shadow-[8px_8px_0px_rgba(0,0,0,0.4)] md:shadow-[12px_12px_0px_rgba(0,0,0,0.4)] pointer-events-none">
      <span className="absolute size-3 md:size-4 border-3 md:border-4 block top-0 left-0 -translate-y-1/2 -translate-x-1/2 bg-white"></span>
      <span className="absolute size-3 md:size-4 border-3 md:border-4 block top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white"></span>
      <span className="absolute size-3 md:size-4 border-3 md:border-4 block bottom-0 left-0 translate-y-1/2 -translate-x-1/2 bg-white"></span>
      <span className="absolute size-3 md:size-4 border-3 md:border-4 block bottom-0 right-0 translate-y-1/2 translate-x-1/2 bg-white"></span>
    </div>
  );
}
