import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | RYTINWEB Web Engineering Delhi",
  description: "Read the Disclaimer of RYTINWEB. We are a remote-first web design & development agency based in Delhi, India.",
  alternates: {
    canonical: "https://rytinweb.in/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="pt-header-h min-h-screen bg-[#0A0A0A] py-16 text-white max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-black mb-6">Disclaimer</h1>
        <div className="text-zinc-400 text-sm leading-relaxed space-y-4 font-light">
          <p>
            The information contained in this website is for general information purposes only. The information is provided by RYTINWEB and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind.
          </p>
          <p>
            Through this website you are able to link to other websites which are not under the control of RYTINWEB. We have no control over the nature, content and availability of those sites.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly. However, RYTINWEB takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
