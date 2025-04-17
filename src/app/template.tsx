import { Preloader } from "@/components/preloader";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
}
