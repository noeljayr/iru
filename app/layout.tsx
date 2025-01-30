import type { Metadata } from "next";
import "@/css/globals.css";
import "@fontsource/manrope/200.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Immediate Response Unit",
  description:
    "Immediate Response Unit is a security company that provides security services to businesses and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
