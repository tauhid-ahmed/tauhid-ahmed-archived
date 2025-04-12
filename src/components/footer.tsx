import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "./layout";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (
    <Section as="footer">
      <Container>
        <div className="text-center flex items-center">
          <div className="flex-1">
            <Logo />
          </div>
          <span className="font-medium">
            {new Date().getFullYear()} &copy; All rights reserved
          </span>
          <div className="flex-1 flex justify-end gap-4">
            <Link href="https://www.linkedin.com/in/tauhidxahmed/">
              <CiLinkedin size={20} />
            </Link>
            <Link href="https://github.com/tauhid-ahmed">
              <IoLogoGithub size={20} />
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
        className="size-8"
      />
      <span className="font-bold text-xl md:text-2xl">Tauhid</span>
    </Link>
  );
}
