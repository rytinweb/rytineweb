import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RYTINWEB Web Engineering Delhi",
  description: "Read the Privacy Policy of RYTINWEB. We are a remote-first web design & development agency based in Delhi, India.",
  alternates: {
    canonical: "https://rytinweb.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A] py-16 text-white max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-black mb-6">Privacy Policy</h1>
        <div className="text-zinc-400 text-sm leading-relaxed space-y-4 font-light">
          <p>
            Your privacy is highly important to us. RYTINWEB respects your personal details and complies with industry standards.
          </p>
          <p>
            This Privacy Policy document outlines the types of personal information that is received and collected by RYTINWEB and how it is used.
          </p>
          <p>
            If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at info.rytinweb@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
