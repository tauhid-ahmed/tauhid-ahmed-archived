import { Preloader } from "@/components/preloader";

export default function RootTemplate({ children }: any) {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
}
