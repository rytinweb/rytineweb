import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "RYTINWEB | Premium Web Design & Development Agency",
  description: "Bespoke digital design, custom front-end development, and high-performance SEO systems. Engineered for speed and conversion.",
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
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-white text-dark antialiased font-sans`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
