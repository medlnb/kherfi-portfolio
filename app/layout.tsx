import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MdOutlineEmail } from "react-icons/md";
import "@styles/globals.css";
import Nav from "@components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Lamine Kherfi",
  description: "Mohammed Lamine Kherfi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white text-xs lg:text-base">
        <Nav />
        <main className="h-svh md:w-[75rem] mx-auto">{children}</main>
      </body>
    </html>
  );
}
