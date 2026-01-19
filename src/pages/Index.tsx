import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Treatments } from "@/components/Treatments";
import { RescueService } from "@/components/RescueService";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { ParallaxSection, ParallaxBackground } from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero - Primeira Impressão */}
        <Hero />

        {/* Convênios - Logo após o Hero */}
        <ParallaxSection speed={0.15} opacity>
          <Partners />
        </ParallaxSection>

        {/* Grupo 1: Institucional - Quem Somos */}
        <ParallaxBackground>
          <ParallaxSection speed={0.1}>
            <About />
          </ParallaxSection>
        </ParallaxBackground>

        {/* Grupo 2: Serviços - O Que Fazemos */}
        <ParallaxSection speed={0.12} opacity>
          <Treatments />
        </ParallaxSection>

        {/* Destaque: Serviço de Resgate 24h */}
        <ParallaxSection speed={0.08}>
          <RescueService />
        </ParallaxSection>

        {/* Grupo 3: Estrutura - Nossa Infraestrutura */}
        <ParallaxBackground>
          <ParallaxSection speed={0.1}>
            <Features />
          </ParallaxSection>
          <ParallaxSection speed={0.15} opacity>
            <Gallery />
          </ParallaxSection>
        </ParallaxBackground>

        {/* Grupo 4: Credibilidade - Prova Social */}
        <ParallaxSection speed={0.1} opacity>
          <Testimonials />
        </ParallaxSection>

        {/* Grupo 5: Conversão - Contato */}
        <ParallaxSection speed={0.08}>
          <CTA />
        </ParallaxSection>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
