import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Building2, UtensilsCrossed, Dumbbell, Shield, Stethoscope } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Quartos Confortáveis",
    description: "Acomodações individuais e compartilhadas, seguras e climatizadas.",
  },
  {
    icon: TreePine,
    title: "Ambiente Terapêutico",
    description: "Áreas verdes amplas em meio à natureza.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrição Especializada",
    description: "Cardápio elaborado por nutricionistas.",
  },
  {
    icon: Dumbbell,
    title: "Atividades Físicas",
    description: "Programas de exercícios supervisionados.",
  },
  {
    icon: Shield,
    title: "Segurança Integral",
    description: "Monitoramento 24h e controle de acesso.",
  },
  {
    icon: Stethoscope,
    title: "Equipe Multidisciplinar",
    description: "Médicos, psicólogos e terapeutas.",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Nossa Estrutura
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Ambiente pensado para sua{" "}
              <span className="text-primary">recuperação</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
              Nossa estrutura foi projetada para proporcionar conforto, segurança e 
              um ambiente propício à cura.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                  className="group flex gap-2 md:gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-2 max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=400&q=80"
                  alt="Quarto do hospital"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                className="aspect-square rounded-lg overflow-hidden shadow-soft"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
                  alt="Área de exercícios"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </motion.div>
            </div>
            <div className="space-y-2 pt-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                className="aspect-square rounded-lg overflow-hidden shadow-soft"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80"
                  alt="Área de meditação"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"
                  alt="Alimentação saudável"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
