import { motion } from "framer-motion";

const partners = [
  { name: "Cabesp", color: "#2E7D32" },
  { name: "Cassi", color: "#C62828" },
  { name: "Real Grandeza", color: "#7B1FA2" },
  { name: "GEAP Saúde", color: "#1565C0" },
  { name: "Dona Saúde", color: "#00897B" },
  { name: "Gama Saúde", color: "#F57C00" },
  { name: "PHS Samaritano", color: "#7B1FA2" },
  { name: "Select Saúde", color: "#7E57C2" },
  { name: "Porto Saúde", color: "#1565C0" },
  { name: "Saúde Itaú", color: "#FF6F00" },
  { name: "Bradesco Saúde", color: "#C62828" },
  { name: "Blue Med", color: "#0288D1" },
  { name: "IPREF", color: "#1976D2" },
  { name: "Blue Med Consciente", color: "#0097A7" },
  { name: "São Luiz", color: "#1565C0" },
  { name: "Care Plus", color: "#2E7D32" },
  { name: "Mediservice", color: "#1565C0" },
  { name: "FUSEX", color: "#424242" },
  { name: "Saúde Caixa", color: "#0D47A1" },
];

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
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <div
                className="bg-white rounded-xl shadow-md px-6 py-4 min-w-[160px] h-[80px] flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <span
                  className="font-bold text-lg whitespace-nowrap"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
