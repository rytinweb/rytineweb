import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Awards from "@/components/Awards";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
        <Awards />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
