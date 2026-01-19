import { motion } from "framer-motion";

// Logos baixadas
import bradesco from "@/assets/convenios/bradesco.svg";
import mediservice from "@/assets/convenios/mediservice.svg";
import saoluiz from "@/assets/convenios/saoluiz.svg";
import saudecaixa from "@/assets/convenios/saudecaixa.svg";

interface Partner {
  name: string;
  logo?: string;
  color?: string;
}

const partners: Partner[] = [
  { name: "Bradesco Saúde", logo: bradesco },
  { name: "Cabesp", color: "#2E7D32" },
  { name: "Cassi", color: "#C62828" },
  { name: "GEAP Saúde", color: "#0D47A1" },
  { name: "Gama Saúde", color: "#F57C00" },
  { name: "Mediservice", logo: mediservice },
  { name: "São Luiz", logo: saoluiz },
  { name: "Saúde Caixa", logo: saudecaixa },
  { name: "Porto Saúde", color: "#1565C0" },
  { name: "Saúde Itaú", color: "#FF6F00" },
  { name: "Blue Med", color: "#0288D1" },
  { name: "Care Plus", color: "#2E7D32" },
  { name: "Select Saúde", color: "#7E57C2" },
  { name: "Real Grandeza", color: "#7B1FA2" },
  { name: "PHS Samaritano", color: "#7B1FA2" },
  { name: "Dona Saúde", color: "#00897B" },
  { name: "IPREF", color: "#1976D2" },
  { name: "FUSEX", color: "#424242" },
];

// Componente de logo estilizada para convênios sem imagem
const StyledLogo = ({ name, color }: { name: string; color: string }) => (
  <div className="flex items-center gap-2">
    <div 
      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
    <span 
      className="font-bold text-base whitespace-nowrap"
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
              <div className="bg-white rounded-xl shadow-md px-5 py-3 min-w-[180px] h-[70px] flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-10 w-auto max-w-[140px] object-contain"
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
