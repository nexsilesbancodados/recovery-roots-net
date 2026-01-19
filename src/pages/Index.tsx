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
        {/* Hero - Primeira Impressão */}
        <Hero />

        {/* Convênios - Logo após o Hero */}
        <Partners />

        {/* Grupo 1: Institucional - Quem Somos */}
        <About />

        {/* Grupo 2: Serviços - O Que Fazemos */}
        <Treatments />

        {/* Grupo 3: Estrutura - Nossa Infraestrutura */}
        <Features />
        <Gallery />

        {/* Grupo 4: Credibilidade - Prova Social */}
        <Testimonials />

        {/* Grupo 5: Conversão - Contato */}
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
