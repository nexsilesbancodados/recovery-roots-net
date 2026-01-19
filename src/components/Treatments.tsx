import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Pill, Users, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const treatments = [
  {
    icon: Pill,
    title: "Dependência Química",
    description: "Tratamento especializado para álcool, drogas ilícitas e medicamentos, com desintoxicação segura e acompanhamento contínuo.",
  },
  {
    icon: Brain,
    title: "Transtornos Mentais",
    description: "Cuidado para depressão, ansiedade, bipolaridade, esquizofrenia e outros transtornos psiquiátricos.",
  },
  {
    icon: Heart,
    title: "Transtornos Alimentares",
    description: "Abordagem multidisciplinar para anorexia, bulimia e compulsão alimentar.",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    description: "Suporte para famílias, ajudando a reconstruir vínculos e criar um ambiente favorável à recuperação.",
  },
  {
    icon: Sparkles,
    title: "Terapias Complementares",
    description: "Arteterapia, musicoterapia, meditação e atividades físicas como parte do tratamento integral.",
  },
  {
    icon: Clock,
    title: "Internação 24h",
    description: "Monitoramento médico e de enfermagem 24 horas, garantindo segurança e suporte contínuo.",
  },
];

export const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tratamentos" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossos Tratamentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Tratamentos especializados para cada necessidade
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma abordagem completa e personalizada, combinando as melhores 
            práticas médicas com cuidado humanizado.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                    <treatment.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
