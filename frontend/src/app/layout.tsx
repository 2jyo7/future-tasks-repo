import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar ";
import Footer from "@/components/Footer ";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col min-h-screen mx-auto justify-center items-center
         bg-gradient-to-r from-purple-400 to-pink-500">
{children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
