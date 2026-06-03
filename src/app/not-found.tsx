import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-center px-6 pt-header-h">
        <div className="max-w-md space-y-6">
          <h1 className="text-6xl font-black text-white">404</h1>
          <h2 className="text-2xl font-extrabold text-white">Page Not Found</h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            The page you are looking for does not exist or has been moved. Use the links below to find what you need.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-shimmer px-6 py-3 bg-white text-black font-extrabold text-sm rounded-xl hover:bg-zinc-200 transition-all">
              Go Home
            </Link>
            <Link href="/services" className="px-6 py-3 border border-white text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
