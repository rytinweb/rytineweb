import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Web Design Toronto & Across Canada | Canadian Web Designs",
  description: "Toronto's top-rated web design agency. 180+ five-star reviews across Canada. Custom websites, local SEO & digital marketing that drives real revenue. Free quote — 647-689-6069.",
  icons: {
    icon: "/logos/favicon.png",
    shortcut: "/logos/favicon.png",
    apple: "/logos/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-white text-dark antialiased font-sans`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
