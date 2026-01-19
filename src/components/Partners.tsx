import { motion } from "framer-motion";

// Logos importadas - apenas convênios com logo real
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
  logo: string;
}

// Apenas convênios com logo real para visual mais profissional
const partners: Partner[] = [
  { name: "Bradesco Saúde", logo: bradescoSaude },
  { name: "Cabesp", logo: cabesp },
  { name: "Cassi", logo: cassi },
  { name: "Mediservice", logo: mediservice },
  { name: "São Luiz", logo: saoluiz },
  { name: "Porto Saúde", logo: portoSaude },
  { name: "Real Grandeza", logo: realGrandeza },
  { name: "PHS Samaritano", logo: phsSamaritano },
  { name: "Dona Saúde", logo: donaSaude },
  { name: "IPREF", logo: ipref },
];

export const Partners = () => {
  // Duplicar para efeito infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 gradient-soft border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Planos de Saúde
          </p>
          <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
            Convênios Aceitos
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradiente esquerdo */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Gradiente direito */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-scroll-left">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <div className="bg-white border border-border/40 rounded-xl px-8 py-5 min-w-[200px] h-[100px] flex items-center justify-center hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 w-auto max-w-[160px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
