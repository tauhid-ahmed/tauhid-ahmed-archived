import { Container, Section } from "./layout";
import Image from "next/image";

export default function Newsletter() {
  return (
    <Section padding="lg">
      <Container>
        <div className="text-center bg-white border-2 p-8 lg:p-12">
          <h2>Let&apos;s start designing your project</h2>
          <p>
            Want to see how to transform your brand into a unique style. sent us
            a message
          </p>
          <div className="relative w-fit mx-auto md:m-0">
            <button className="font-semibold text-xl border-4 rounded-full px-12 py-2 bg-sky-200">
              Send me message
            </button>
            <Image
              src="/assets/icons/paw.svg"
              width={80}
              height={40}
              alt="paw icon"
              className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-12 h-20"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
