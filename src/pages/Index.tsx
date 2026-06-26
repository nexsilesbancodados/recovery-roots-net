import { SEO } from "@/components/SEO";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import ConveniosCarousel from "@/components/ConveniosCarousel";
import TratamentosSection from "@/components/TratamentosSection";
import EstruturaSection from "@/components/EstruturaSection";
import AbordagemSection from "@/components/AbordagemSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ProjetosSociaisSection from "@/components/ProjetosSociaisSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Hospital Rumo Certo "} description={" Dependência Química e Saúde Mental|Hospital especializado em dependência química, alcoolismo e saúde mental. Atendimento 24h em São Paulo."} path={"/"} />
      <EmergencyBar />
      <Navbar />
      <HeroSection />
      <div id="sobre">
        <ConveniosCarousel />
      </div>
      <CTABanner />
      <TratamentosSection />
      <EstruturaSection />
      <AbordagemSection />
      <ProjetosSociaisSection />
      <DepoimentosSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
