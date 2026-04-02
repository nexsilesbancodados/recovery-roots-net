import { User, Users, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profissionalImg from "@/assets/abordagem/profissional-feminina.png";

const abordagens = [
  {
    icon: <User className="w-5 h-5" fill="currentColor" strokeWidth={1} />,
    title: "Terapia Individual",
    description: "Abordagem personalizada com TCC e Psicoterapia Psicodinâmica para tratar questões subjacentes.",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-500/15",
  },
  {
    icon: <Heart className="w-5 h-5" fill="currentColor" strokeWidth={1} />,
    title: "Programa de 12 Passos",
    description: "Base sólida para a sobriedade através de etapas estruturadas e apoio comunitário.",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-500/15",
  },
  {
    icon: <Users className="w-5 h-5" fill="currentColor" strokeWidth={1} />,
    title: "Terapias em Grupo",
    description: "Sessões que fortalecem o senso de comunidade com workshops de habilidades de vida.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-500/15",
  },
  {
    icon: <Lightbulb className="w-5 h-5" fill="currentColor" strokeWidth={1} />,
    title: "Inovação em Tratamento",
    description: "Métodos atualizados com as mais recentes pesquisas e inovações terapêuticas.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-500/15",
  },
];

const AbordagemSection = () => {
  return (
    <section id="abordagem" className="py-8 md:py-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Section - Texto à esquerda, Imagem à direita */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8">
          {/* Conteúdo à Esquerda */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossa Abordagem
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-1 mb-4">
              Atendimento Personalizado e Individual
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-5 leading-relaxed">
              No Hospital Rumo Certo, nosso compromisso com a recuperação abrange uma ampla gama de tratamentos especializados. Oferecemos desde terapias individuais personalizadas até a participação no renomado Programa de 12 Passos.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
              Fale com um Especialista
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Imagem à Direita com Balões de Conversa */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Círculos Decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-28 md:h-28 bg-hospital-sky/20 rounded-full blur-sm" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-hospital-terracotta/10 rounded-full" />
            
            {/* Balões de Conversa - Esquerda */}
            <motion.div 
              className="absolute left-0 top-8 md:top-12 z-20 max-w-[140px] md:max-w-[180px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg">
                <p className="text-xs md:text-sm font-medium">Avaliação detalhada individualizada</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-4 md:left-0 top-32 md:top-40 z-20 max-w-[160px] md:max-w-[200px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-muted text-foreground rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg border border-border">
                <p className="text-xs md:text-sm font-medium">Equipe multidisciplinar especializada</p>
              </div>
            </motion.div>

            {/* Balões de Conversa - Direita */}
            <motion.div 
              className="absolute right-0 top-20 md:top-24 z-20 max-w-[140px] md:max-w-[180px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-hospital-sky/90 text-foreground rounded-2xl rounded-br-sm px-4 py-3 shadow-lg">
                <p className="text-xs md:text-sm font-medium">Acompanhamento pós-tratamento</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-0 md:right-4 top-48 md:top-56 z-20 max-w-[150px] md:max-w-[190px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-primary/10 text-foreground rounded-2xl rounded-br-sm px-4 py-3 shadow-lg border border-primary/20">
                <p className="text-xs md:text-sm font-medium">Ambiente terapêutico acolhedor</p>
              </div>
            </motion.div>
            
            {/* Imagem Principal */}
            <div className="relative z-10 px-16 md:px-20 -mt-16 md:-mt-20">
              <img
                src={profissionalImg}
                alt="Profissional de saúde do Hospital Rumo Certo"
                className="w-full max-w-xs md:max-w-sm h-auto object-contain"
              />
              {/* Nuvem/Fumaça branca na parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Grid de Abordagens - 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {abordagens.map((item, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-muted/50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-9 h-9 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center group-hover:scale-110 transition-all mb-2`}>
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbordagemSection;
