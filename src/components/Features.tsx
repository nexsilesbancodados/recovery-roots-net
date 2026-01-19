import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Building2, UtensilsCrossed, Dumbbell } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Quartos Individuais e Compartilhados",
    description: "Acomodações seguras, limpas e confortáveis, com monitoramento 24 horas e equipe de enfermagem.",
  },
  {
    icon: TreePine,
    title: "Ambiente Terapêutico",
    description: "Áreas verdes amplas em meio à natureza, projetadas para promover paz, reflexão e bem-estar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrição Especializada",
    description: "Cardápio elaborado por nutricionistas, com dietas adaptadas às necessidades de cada paciente.",
  },
  {
    icon: Dumbbell,
    title: "Atividades Físicas",
    description: "Programas de exercícios supervisionados que auxiliam na recuperação física e mental.",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="estrutura" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nossa Estrutura
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Ambiente pensado para sua recuperação
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
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
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
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
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80"
                  alt="Quarto do hospital"
                  className="w-full h-full object-cover"
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
                  className="w-full h-full object-cover"
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
                  className="w-full h-full object-cover"
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
                  className="w-full h-full object-cover"
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
