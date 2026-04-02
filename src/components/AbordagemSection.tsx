import { User, Users, Lightbulb, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profissionalImg from "@/assets/doctor-abordagem.png";
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
    gradient: "from-primary/90 to-primary/70",
  },
  {
    icon: <Heart className="w-5 h-5" strokeWidth={2} />,
    title: "Programa de 12 Passos",
    description: "Base sólida para a sobriedade com etapas estruturadas.",
    gradient: "from-primary/80 to-secondary/80",
  },
  {
    icon: <Users className="w-5 h-5" strokeWidth={2} />,
    title: "Terapias em Grupo",
    description: "Sessões que fortalecem o senso de comunidade e pertencimento.",
    gradient: "from-secondary/85 to-secondary/65",
  },
  {
    icon: <Lightbulb className="w-5 h-5" strokeWidth={2} />,
    title: "Inovação em Tratamento",
    description: "Métodos atualizados com as mais recentes pesquisas.",
    gradient: "from-secondary/75 to-primary/75",
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

          {/* Imagem à Direita com balões flutuantes */}
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

              {/* Balões de conversa flutuantes */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] -left-4 md:-left-8 bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-bl-sm shadow-lg text-xs md:text-sm font-medium max-w-[160px]"
              >
                💬 Estamos aqui para ajudar!
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[35%] -right-2 md:-right-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-br-sm shadow-lg text-xs md:text-sm font-medium max-w-[150px]"
              >
                🤝 Atendimento 24h
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[25%] -left-6 md:-left-10 bg-card border border-border text-foreground px-4 py-2 rounded-2xl rounded-bl-sm shadow-lg text-xs md:text-sm font-medium max-w-[170px]"
              >
                ❤️ Tratamento humanizado
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Grid de Abordagens - 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {abordagens.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * index }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 rounded-3xl bg-card border border-border/40 shadow-md hover:shadow-2xl hover:border-primary/30 transition-all duration-400 overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${item.iconBg} opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className={`relative w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                {item.icon}
              </div>
              <h3 className="relative font-display text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbordagemSection;