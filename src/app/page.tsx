import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RYTINWEB | Web Development Agency Delhi NCR | India",
  description: "RYTINWEB is a premier custom website development agency based in Delhi, India. We engineer high-performance Next.js architectures and design premium visual systems for Indian businesses in Delhi NCR, Noida, and Gurugram.",
  alternates: {
    canonical: "https://rytinweb.in",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-header-h">
        <Hero />
        <GoogleReviews />
        <Services />
        <Process />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
