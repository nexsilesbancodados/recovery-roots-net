import { motion } from "framer-motion";

// Logos importadas
import bradescoSaude from "@/assets/convenios/bradesco-saude.png";
import cabesp from "@/assets/convenios/cabesp.png";
import cassi from "@/assets/convenios/cassi.png";
import mediservice from "@/assets/convenios/mediservice.png";
import saoluiz from "@/assets/convenios/saoluiz.png";
import portoSaude from "@/assets/convenios/porto-saude.png";
import realGrandeza from "@/assets/convenios/real-grandeza.png";
import phsSamaritano from "@/assets/convenios/phs-samaritano.png";
import donaSaude from "@/assets/convenios/dona-saude.png";
import ipref from "@/assets/convenios/ipref.png";

interface Partner {
  name: string;
  logo?: string;
  color?: string;
}

const partners: Partner[] = [
  { name: "Bradesco Saúde", logo: bradescoSaude },
  { name: "Cabesp", logo: cabesp },
  { name: "Cassi", logo: cassi },
  { name: "GEAP Saúde", color: "#0D47A1" },
  { name: "Gama Saúde", color: "#F57C00" },
  { name: "Mediservice", logo: mediservice },
  { name: "São Luiz", logo: saoluiz },
  { name: "Saúde Caixa", color: "#005CA9" },
  { name: "Porto Saúde", logo: portoSaude },
  { name: "Saúde Itaú", color: "#FF6F00" },
  { name: "Blue Med", color: "#0288D1" },
  { name: "Care Plus", color: "#2E7D32" },
  { name: "Select Saúde", color: "#7E57C2" },
  { name: "Real Grandeza", logo: realGrandeza },
  { name: "PHS Samaritano", logo: phsSamaritano },
  { name: "Dona Saúde", logo: donaSaude },
  { name: "IPREF", logo: ipref },
  { name: "FUSEX", color: "#424242" },
];

// Componente de logo estilizada para convênios sem imagem
const StyledLogo = ({ name, color }: { name: string; color: string }) => (
  <div className="flex items-center gap-3">
    <div 
      className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-2xl"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
    <span 
      className="font-bold text-xl whitespace-nowrap"
      style={{ color }}
    >
      {name}
    </span>
  </div>
);

export const Partners = () => {
  // Duplicar para efeito infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Convênios Aceitos
          </h2>
          <p className="text-muted-foreground">
            Trabalhamos com os principais planos de saúde
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradiente esquerdo */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        {/* Gradiente direito */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <div className="bg-white rounded-2xl shadow-md px-10 py-8 min-w-[320px] h-[180px] flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-32 w-auto max-w-[280px] object-contain"
                  />
                ) : (
                  <StyledLogo name={partner.name} color={partner.color || "#333"} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
