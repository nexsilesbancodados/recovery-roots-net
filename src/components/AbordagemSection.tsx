import { User, Users, Lightbulb, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profissionalImg from "@/assets/abordagem/profissional-feminina.png";
import { openWhatsApp } from "@/lib/contact";

const destaques = [
  "Avaliação detalhada individualizada",
  "Equipe multidisciplinar especializada",
  "Acompanhamento pós-tratamento",
  "Ambiente terapêutico acolhedor",
];

const abordagens = [
  {
    icon: <User className="w-5 h-5" strokeWidth={2} />,
    title: "Terapia Individual",
    description: "Abordagem personalizada com TCC e Psicoterapia Psicodinâmica.",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
  },
  {
    icon: <Heart className="w-5 h-5" strokeWidth={2} />,
    title: "Programa de 12 Passos",
    description: "Base sólida para a sobriedade com etapas estruturadas.",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
  {
    icon: <Users className="w-5 h-5" strokeWidth={2} />,
    title: "Terapias em Grupo",
    description: "Sessões que fortalecem o senso de comunidade e pertencimento.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: <Lightbulb className="w-5 h-5" strokeWidth={2} />,
    title: "Inovação em Tratamento",
    description: "Métodos atualizados com as mais recentes pesquisas.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
];

const AbordagemSection = () => {
  return (
    <section id="abordagem" className="py-10 md:py-14 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          {/* Conteúdo à Esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossa Abordagem
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-2 mb-5 leading-tight">
              Atendimento Personalizado e Individual
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              No Hospital Rumo Certo, nosso compromisso com a recuperação abrange uma ampla gama de tratamentos especializados. Oferecemos desde terapias individuais personalizadas até a participação no renomado Programa de 12 Passos.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-6">
              {destaques.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" strokeWidth={0} />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              onClick={() => openWhatsApp("Olá! Gostaria de falar com um especialista.")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 rounded-xl px-6 py-5 shadow-lg"
            >
              Fale com um Especialista
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Imagem à Direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background shape */}
            <div className="absolute bottom-0 right-[5%] w-[80%] h-[75%] bg-gradient-to-t from-primary/8 via-primary/4 to-transparent rounded-t-[40%] z-0" />
            
            <div className="relative z-10 px-8 md:px-12">
              <img
                src={profissionalImg}
                alt="Profissional de saúde do Hospital Rumo Certo"
                className="w-full max-w-sm h-auto object-contain drop-shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Grid de Abordagens - 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {abordagens.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-1.5">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbordagemSection;