import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumerosImpacto from "@/components/NumerosImpacto";
import ConveniosCarousel from "@/components/ConveniosCarousel";
import TratamentosSection from "@/components/TratamentosSection";
import TimelineInternacao from "@/components/TimelineInternacao";
import EstruturaSection from "@/components/EstruturaSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import AbordagemSection from "@/components/AbordagemSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import FAQSection from "@/components/FAQSection";
import ProjetosSociaisSection from "@/components/ProjetosSociaisSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />
      <HeroSection />
      <NumerosImpacto />
      <div id="sobre">
        <ConveniosCarousel />
      </div>
      <TratamentosSection />
      <TimelineInternacao />
      <EstruturaSection />
      <DiferenciaisSection />
      <AbordagemSection />
      <DepoimentosSection />
      <FAQSection />
      <ProjetosSociaisSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
