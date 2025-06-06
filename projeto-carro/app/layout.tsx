import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/Components";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in the wolrd by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative">
          <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
