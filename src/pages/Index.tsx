import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Treatments } from "@/components/Treatments";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Features />
        <Gallery />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
