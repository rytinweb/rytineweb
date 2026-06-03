import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | RYTINWEB Web Engineering Delhi",
  description: "Read the Terms & Conditions of RYTINWEB. We are a remote-first web design & development agency based in Delhi, India.",
  alternates: {
    canonical: "https://rytinweb.in/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A] py-16 text-white max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-black mb-6">Terms & Conditions</h1>
        <div className="text-zinc-400 text-sm leading-relaxed space-y-4 font-light">
          <p>
            Welcome to RYTINWEB. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          <p>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          </p>
          <p>
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
