import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Lenis } from "@/components/lenis";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Particles } from "@/components/particle";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tauhid",
  description: "Tauhid Ahmed Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-9Q3P6PP0LB" />
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Analytics />
        <Particles />
        <Lenis>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Lenis>
        <SpeedInsights />
      </body>
    </html>
  );
}
