import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Building2, UtensilsCrossed, Dumbbell, Shield, Stethoscope } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Quartos Confortáveis",
    description: "Acomodações individuais e compartilhadas, seguras e climatizadas, com monitoramento 24 horas.",
  },
  {
    icon: TreePine,
    title: "Ambiente Terapêutico",
    description: "Áreas verdes amplas em meio à natureza, projetadas para promover paz e bem-estar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrição Especializada",
    description: "Cardápio elaborado por nutricionistas, adaptado às necessidades de cada paciente.",
  },
  {
    icon: Dumbbell,
    title: "Atividades Físicas",
    description: "Programas de exercícios supervisionados que auxiliam na recuperação física e mental.",
  },
  {
    icon: Shield,
    title: "Segurança Integral",
    description: "Monitoramento 24h, equipe de enfermagem e controle de acesso rigoroso.",
  },
  {
    icon: Stethoscope,
    title: "Equipe Multidisciplinar",
    description: "Médicos, psicólogos, enfermeiros e terapeutas trabalhando em conjunto.",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Nossa Estrutura
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ambiente pensado para sua{" "}
              <span className="text-primary">recuperação</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Nossa estrutura foi projetada para proporcionar conforto, segurança e 
              um ambiente propício à cura. Cada detalhe foi pensado para contribuir 
              com o processo de recuperação.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="group flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=400&q=80"
                  alt="Quarto do hospital"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="aspect-square rounded-2xl overflow-hidden shadow-card"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
                  alt="Área de exercícios"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="aspect-square rounded-2xl overflow-hidden shadow-card"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80"
                  alt="Área de meditação"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"
                  alt="Alimentação saudável"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};