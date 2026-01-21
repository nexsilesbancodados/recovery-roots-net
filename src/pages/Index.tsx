import Header from "@/components/Header";
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
      <Header />
      <div id="sobre">
        <ConveniosCarousel />
      </div>
      <div id="tratamentos">
        <TratamentosSection />
      </div>
      <EstruturaSection />
      <div id="equipe">
        <AbordagemSection />
      </div>
      <DepoimentosSection />
      <ProjetosSociaisSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
