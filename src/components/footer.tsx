import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "./layout";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (
    <Section as="footer" className="border-t-4">
      <Container>
        <div className="text-center flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <Logo />
          </div>
          <span className="font-semibold">
            {new Date().getFullYear()} &copy; All rights reserved
          </span>
          <div className="flex-1 flex justify-end gap-6">
            <Link
              href="https://www.linkedin.com/in/tauhidxahmed/"
              target="_blank"
            >
              <CiLinkedin className="size-8" />
            </Link>
            <Link href="https://github.com/tauhid-ahmed" target="_blank">
              <IoLogoGithub className="size-8" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
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
      <span className="font-bold text-2xl uppercase">Tauhid</span>
    </Link>
  );
}
