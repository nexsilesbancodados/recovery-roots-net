import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumerosImpacto from "@/components/NumerosImpacto";
import CTABanner from "@/components/CTABanner";
import ConveniosCarousel from "@/components/ConveniosCarousel";
import TratamentosSection from "@/components/TratamentosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import EstruturaSection from "@/components/EstruturaSection";
import AbordagemSection from "@/components/AbordagemSection";
import TimelineInternacao from "@/components/TimelineInternacao";
import DepoimentosSection from "@/components/DepoimentosSection";
import ProjetosSociaisSection from "@/components/ProjetosSociaisSection";
import FAQSection from "@/components/FAQSection";
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
      <CTABanner />
      <TratamentosSection />
      <DiferenciaisSection />
      <EstruturaSection />
      <AbordagemSection />
      <TimelineInternacao />
      <ProjetosSociaisSection />
      <DepoimentosSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
