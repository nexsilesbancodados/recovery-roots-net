import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Pill, Users, Sparkles, Clock, ArrowRight } from "lucide-react";

const treatments = [
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Tratamento para equilíbrio e bem-estar emocional, afetando diretamente a qualidade de vida de cada indivíduo.",
    features: ["Ansiedade e Depressão", "Transtornos de Humor", "Acompanhamento Psicológico"],
  },
  {
    icon: Pill,
    title: "Dependência Química",
    description: "Abordagens integradas e personalizadas, reconhecendo que a dependência é uma condição complexa e multifacetada.",
    features: ["Desintoxicação Segura", "Tratamento Integral", "Prevenção de Recaídas"],
  },
  {
    icon: Heart,
    title: "Dependência Feminina",
    description: "Programas específicos para mulheres, reconhecendo os desafios únicos em sua jornada de recuperação.",
    features: ["Ambiente Exclusivo", "Suporte Especializado", "Cuidado Humanizado"],
  },
  {
    icon: Users,
    title: "Programa de 12 Passos",
    description: "Metodologia reconhecida internacionalmente para apoiar cada passo da jornada de recuperação.",
    features: ["Grupos de Apoio", "Mentoria Individual", "Comunidade Terapêutica"],
  },
  {
    icon: Sparkles,
    title: "Terapias Integrativas",
    description: "Desde terapias individuais até programas de grupo, ajudando a reconstruir vidas e restaurar esperanças.",
    features: ["Terapia Ocupacional", "Arte-terapia", "Meditação e Yoga"],
  },
  {
    icon: Clock,
    title: "Suporte Contínuo",
    description: "Acompanhamento integral durante todo o processo de tratamento e pós-tratamento.",
    features: ["Atendimento 24h", "Pós-tratamento", "Suporte Familiar"],
  },
];

export const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tratamentos" className="py-28 relative overflow-hidden">
      {/* Background decorativo transparente */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6"
          >
            Nossos Tratamentos
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Tratamentos especializados para{" "}
            <span className="text-primary">cada necessidade</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Oferecemos uma abordagem completa e personalizada, combinando as melhores 
            práticas médicas com cuidado humanizado para sua recuperação.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 p-8 hover:shadow-elevated hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/40 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500">
                    <treatment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {treatment.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <a 
                  href="#contato" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 mb-4">
            Não sabe qual tratamento é ideal para você ou seu familiar?
          </p>
          <a 
            href="https://wa.me/5511955931301?text=Olá! Gostaria de saber mais sobre os tratamentos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Fale com nossa equipe
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
