import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Atnurmi | Art, UI/UX & Web Design Studio",
  description: "Elevating brands through high-impact visual storytelling and pixel-perfect digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-background-light dark:bg-background-dark transition-colors duration-300 font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
