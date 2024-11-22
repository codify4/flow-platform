import { Navbar } from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-works";
import Testimonials from "@/components/landing/testimonials";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 my-24 px-4">
        <Hero />
      </section>
      <section id="features" className="py-24 mt-64 lg:mt-36 flex items-center justify-center">
        <Features />
      </section>
      {/* <section id="how-it-works" className="py-24">
        <HowItWorks />
      </section> */}
      <section className="py-24">
        <Testimonials />
      </section>
      <section className="py-24">
        <Cta />
      </section>
      <Footer />
    </main>
  );
}