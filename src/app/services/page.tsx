import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServicesSection from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-white">
        
        {/* Banner */}
        <section className="bg-dark text-white py-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 filter blur-[90px] opacity-35" />
          <div className="relative z-10">
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Capabilities
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">What We Do</h1>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
              We provide high-performance design, frontend engineering, and search positioning systems built for digital growth.
            </p>
          </div>
        </section>

        {/* Reuse the animated Services section component */}
        <ServicesSection />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
