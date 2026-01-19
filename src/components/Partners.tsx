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
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Planos de Saúde
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">
            Convênios Aceitos
          </h2>
          <p className="text-white/80 mt-3 max-w-md mx-auto">
            Trabalhamos com os principais planos de saúde do Brasil
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradiente esquerdo mais suave */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        {/* Gradiente direito mais suave */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GlowCard 
                glowColor="emerald" 
                customSize 
                className="w-[220px] h-[200px] flex flex-col items-center justify-center gap-3 p-6"
              >
                <div className="w-full h-[120px] flex items-center justify-center p-3 rounded-xl bg-white shadow-sm">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-[100px] max-w-[160px] w-auto h-auto object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground/80 text-center group-hover:text-primary transition-colors line-clamp-2">
                  {partner.name}
                </span>
              </GlowCard>
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
          E muitos outros convênios • <span className="text-primary font-medium">Consulte disponibilidade</span>
        </p>
      </motion.div>
    </section>
  );
};
