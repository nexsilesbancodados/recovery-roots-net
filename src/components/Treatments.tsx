import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Pill, Users, Sparkles, Clock, ArrowRight } from "lucide-react";

const treatments = [
  {
    icon: Brain,
    title: "Transtornos Mentais",
    description: "Tratamento especializado para depressão, ansiedade, bipolaridade, esquizofrenia e outros transtornos psiquiátricos.",
    features: ["Psiquiatria 24h", "Psicoterapia Individual", "Medicação Controlada"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Pill,
    title: "Dependência Química",
    description: "Programa completo de desintoxicação e reabilitação para dependentes de drogas ilícitas e medicamentos.",
    features: ["Desintoxicação Segura", "TCC", "Prevenção de Recaídas"],
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Sparkles,
    title: "Alcoolismo",
    description: "Tratamento especializado para dependência alcoólica, com protocolo médico para abstinência segura.",
    features: ["Desintoxicação Médica", "Terapia de Grupo", "Ressocialização"],
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Heart,
    title: "Tratamento Feminino",
    description: "Unidade exclusiva para mulheres, com abordagem sensível às particularidades femininas.",
    features: ["Ambiente Acolhedor", "Equipe Feminina", "Suporte à Maternidade"],
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    icon: Users,
    title: "Programa de 12 Passos",
    description: "Metodologia mundialmente reconhecida que promove recuperação através do autoconhecimento.",
    features: ["Grupos Terapêuticos", "Apadrinhamento", "Comunidade de Apoio"],
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Clock,
    title: "Acompanhamento Pós-Alta",
    description: "Suporte contínuo após a internação para garantir a manutenção da sobriedade.",
    features: ["Consultas de Retorno", "Grupos de Apoio", "Orientação Familiar"],
    color: "from-teal-500/20 to-teal-600/10",
  },
];

export const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tratamentos" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Nossos Tratamentos
          </motion.span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Tratamentos Especializados com{" "}
            <span className="text-secondary">Resultados Comprovados</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Cada paciente recebe um plano de tratamento individualizado, elaborado por nossa 
            equipe multidisciplinar, combinando ciência médica e acolhimento humanizado.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-elevated hover:-translate-y-2 transition-all duration-500">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${treatment.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <treatment.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {treatment.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {treatment.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
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
          <p className="text-white/70 mb-6">
            Precisa de orientação? Nossa equipe está pronta para ajudar você a escolher o melhor caminho.
          </p>
          <a 
            href="https://wa.me/5511955931301?text=Olá! Gostaria de saber mais sobre os tratamentos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Fale com nossa equipe
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};