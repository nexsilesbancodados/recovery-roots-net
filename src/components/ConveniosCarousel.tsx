import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// Import logos
import logoDonaSaude from "@/assets/convenios/dona-saude.png";
import logoPHS from "@/assets/convenios/phs-samaritano.png";
import logoPortoSaude from "@/assets/convenios/porto-saude.png";
import logoBradesco from "@/assets/convenios/bradesco-saude.png";
import logoBlue from "@/assets/convenios/blue.png";
import logoIPREF from "@/assets/convenios/ipref.png";
import logoSaoLuiz from "@/assets/convenios/sao-luiz.png";
import logoCarePlus from "@/assets/convenios/careplus.png";
import logoMediservice from "@/assets/convenios/mediservice.png";
import logoFusex from "@/assets/convenios/fusex.png";
import logoSaudeCaixa from "@/assets/convenios/saude-caixa.png";
import logoSelectSaude from "@/assets/convenios/select-saude.png";
import logoItauSaude from "@/assets/convenios/itau-saude.png";
import logoCassi from "@/assets/convenios/cassi.png";
import logoRealGrandeza from "@/assets/convenios/real-grandeza.png";
import logoCabesp from "@/assets/convenios/cabesp.png";

interface Convenio {
  name: string;
  logo: string;
}

const convenios: Convenio[] = [
  { name: "Dona Saúde", logo: logoDonaSaude },
  { name: "PHS Samaritano", logo: logoPHS },
  { name: "Porto Saúde", logo: logoPortoSaude },
  { name: "Bradesco Saúde", logo: logoBradesco },
  { name: "Blue", logo: logoBlue },
  { name: "IPREF", logo: logoIPREF },
  { name: "São Luiz Saúde", logo: logoSaoLuiz },
  { name: "Care Plus", logo: logoCarePlus },
  { name: "Mediservice", logo: logoMediservice },
  { name: "Fusex", logo: logoFusex },
  { name: "Saúde Caixa", logo: logoSaudeCaixa },
  { name: "Select Saúde", logo: logoSelectSaude },
  { name: "Itaú Saúde", logo: logoItauSaude },
  { name: "Cassi", logo: logoCassi },
  { name: "Real Grandeza", logo: logoRealGrandeza },
  { name: "Cabesp", logo: logoCabesp },
];

const ConveniosCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section id="convenios" className="py-8 md:py-12 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Parceiros
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1 mb-2">
            Convênios Aceitos
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Trabalhamos com os principais convênios do Brasil para garantir o melhor atendimento.
          </p>
        </div>

        {/* Carousel - Continuous Scroll */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 items-center">
            {convenios.map((convenio, index) => (
              <div
                key={index}
                className="flex-shrink-0 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 flex items-center justify-center h-16"
              >
                <img
                  src={convenio.logo}
                  alt={convenio.name}
                  className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConveniosCarousel;