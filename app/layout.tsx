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
      <body className="bg-black text-white text-xs lg:text-base ">
        <Nav />
        <main>{children}</main>
        <div className="border-b border-gray-700 px-2 bg-black text-white fixed bottom-0 w-full">
          <p className="text-base flex items-center justify-center gap-2">
            <MdOutlineEmail className="mt-1" />{" "}
            mohammed.lamine.kherfi.ai@gmail.com
          </p>
        </div>
      </body>
    </html>
  );
}
