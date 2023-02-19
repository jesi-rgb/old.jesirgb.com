import Head from "next/head";
import LandingLinkSection from "@/components/LandingPage/LandingLinkSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import ContactSection from "@/components/LandingPage/ContactSection";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Jesús Rascón</title>
      </Head>

      <html id="index">
        <section className="text-white mb-10 md:mt-20 h-screen">
          <HeroSection />
        </section>

        <section id="links">
          <LandingLinkSection />
        </section>

        <section className="my-10 xl:my-56">
          <ContactSection />
        </section>
      </html>
    </>
  );
}
