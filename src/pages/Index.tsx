import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

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
      <EmergencyBar />
      <Navbar />
      <HeroSection />
      <div id="sobre">
        <ConveniosCarousel />
      </div>
      <TratamentosSection />
      <EstruturaSection />
      <AbordagemSection />
      <DepoimentosSection />
      <ProjetosSociaisSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
