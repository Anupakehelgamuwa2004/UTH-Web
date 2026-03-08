import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTH Web - Premium Web Design & Social Media Marketing",
  description: "Professional web design, development, and social media marketing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
