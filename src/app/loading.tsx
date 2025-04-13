import { Section, Container } from "@/components/layout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function RootLoading() {
  return (
    <Section>
      <Container>
        <div className="py-52 text-center flex flex-col items-center gap-8">
          <AiOutlineLoading3Quarters size={50} className="animate-spin" />
        </div>
      </Container>
    </Section>
  );
}
