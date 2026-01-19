import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";

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
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Planos de Saúde
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Convênios Aceitos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Trabalhamos com os principais planos de saúde do Brasil
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-[200px] h-[160px] bg-white rounded-2xl shadow-soft border border-border/50 flex flex-col items-center justify-center gap-3 p-5 hover:shadow-card hover:border-secondary/30 transition-all duration-300">
                <div className="w-full h-[100px] flex items-center justify-center p-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-[80px] max-w-[140px] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors line-clamp-1">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicador de mais convênios */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <p className="text-sm text-muted-foreground">
          E muitos outros convênios • <span className="text-secondary font-semibold">Consulte disponibilidade</span>
        </p>
      </motion.div>
    </section>
  );
};