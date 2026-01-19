import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Pill, Users, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const treatments = [
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Tratamento para equilíbrio e bem-estar emocional, afetando diretamente a qualidade de vida de cada indivíduo.",
  },
  {
    icon: Pill,
    title: "Dependência Química",
    description: "Abordagens integradas e personalizadas, reconhecendo que a dependência é uma condição complexa e multifacetada.",
  },
  {
    icon: Heart,
    title: "Dependência Química Feminina",
    description: "Programas específicos para mulheres, reconhecendo os desafios únicos em sua jornada de recuperação.",
  },
  {
    icon: Users,
    title: "Programa de 12 Passos",
    description: "Metodologia reconhecida internacionalmente para apoiar cada passo da jornada de recuperação.",
  },
  {
    icon: Sparkles,
    title: "Terapias Personalizadas",
    description: "Desde terapias individuais até programas de grupo, ajudando a reconstruir vidas e restaurar esperanças.",
  },
  {
    icon: Clock,
    title: "Suporte Contínuo",
    description: "Acompanhamento integral durante todo o processo de tratamento e pós-tratamento.",
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
