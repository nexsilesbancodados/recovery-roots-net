import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { Treatments } from "@/components/Treatments";
import { RescueService } from "@/components/RescueService";
import { Infrastructure } from "@/components/Infrastructure";
import { Team } from "@/components/Team";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useGSAP } from "@/hooks/useGSAP";

const Index = () => {
  // Initialize smooth scroll
  useSmoothScroll();
  
  // Initialize GSAP
  useGSAP();

  useEffect(() => {
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
    
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero - Primeira Impressão Cinematográfica */}
        <Hero />

        {/* Convênios - Logo após o Hero com Parallax */}
        <Partners />

        {/* Manifesto - Filosofia de Cuidado com Scroll Reveal */}
        <Manifesto />

        {/* Sobre - Institucional */}
        <About />

        {/* Tratamentos de Elite - Efeito Pinning */}
        <Treatments />

        {/* Resgate 24h - Destaque */}
        <RescueService />

        {/* Infraestrutura - Horizontal Scroll */}
        <Infrastructure />

        {/* Equipe Médica - Staggered Grid Editorial */}
        <Team />

        {/* Diferenciais */}
        <Features />

        {/* Galeria */}
        <Gallery />

        {/* Depoimentos - Prova Social */}
        <Testimonials />

        {/* Contato - Concierge de Admissão */}
        <CTA />
      </main>

      {/* Footer - Rodapé Elegante */}
      <Footer />

      {/* Chat Widget - Assistente Virtual com Glow Dourado */}
      <ChatWidget />
    </div>
  );
};

export default Index;
