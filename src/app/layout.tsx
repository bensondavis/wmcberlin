import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar/Appbar";
import Footer from "@/components/Footer/Footer";
import Circle from "@/components/Circle/Circle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WMC Berlin",
  description: "World Malayalee Council",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
      <Circle radius="60vh" color="#F8F5FE" className={"circle"} />
        <Footer />
      </body>
    </html>
  );
}
