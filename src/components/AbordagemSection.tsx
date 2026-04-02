import { User, Users, Lightbulb, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profissionalImg from "@/assets/doctor-abordagem.png";
import { openWhatsApp } from "@/lib/contact";
import imgTerapiaIndividual from "@/assets/abordagem/terapia-individual.jpg";
import img12Passos from "@/assets/abordagem/12-passos.jpg";
import imgTerapiaGrupo from "@/assets/abordagem/terapia-grupo.jpg";
import imgInovacao from "@/assets/abordagem/inovacao.jpg";

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
    image: imgTerapiaIndividual,
  },
  {
    icon: <Heart className="w-5 h-5" strokeWidth={2} />,
    title: "Programa de 12 Passos",
    description: "Base sólida para a sobriedade com etapas estruturadas.",
    image: img12Passos,
  },
  {
    icon: <Users className="w-5 h-5" strokeWidth={2} />,
    title: "Terapias em Grupo",
    description: "Sessões que fortalecem o senso de comunidade e pertencimento.",
    image: imgTerapiaGrupo,
  },
  {
    icon: <Lightbulb className="w-5 h-5" strokeWidth={2} />,
    title: "Inovação em Tratamento",
    description: "Métodos atualizados com as mais recentes pesquisas.",
    image: imgInovacao,
  },
];

const AbordagemSection = () => {
  return (
    <section id="abordagem" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 md:mb-10">
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
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-secondary mt-2 mb-4 leading-tight">
              Atendimento Personalizado e Individual
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-5 leading-relaxed">
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
            
            <div className="relative z-10 px-8 md:px-12 pb-16 overflow-hidden">
              <img
                src={profissionalImg}
                alt="Profissional de saúde do Hospital Rumo Certo"
                className="w-full max-w-sm h-auto object-contain drop-shadow-lg mb-[-60px]"
              />
              <div className="absolute bottom-0 left-[-30%] right-[-30%] h-72 bg-gradient-to-t from-background from-20% via-background/98 via-40% to-transparent pointer-events-none" />

              {/* Balões de conversa flutuantes */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] left-2 md:left-4 bg-primary text-primary-foreground px-3 md:px-4 py-2 rounded-2xl rounded-bl-sm shadow-lg text-xs md:text-sm font-medium max-w-[130px] md:max-w-[160px]"
              >
                💬 Estamos aqui para ajudar!
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[28%] right-1 md:right-0 bg-secondary text-secondary-foreground px-3 md:px-4 py-2 rounded-2xl rounded-br-sm shadow-lg text-xs md:text-sm font-medium max-w-[120px] md:max-w-[150px]"
              >
                🤝 Atendimento 24h
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[34%] left-1 md:left-0 bg-card border border-border text-foreground px-3 md:px-4 py-2 rounded-2xl rounded-bl-sm shadow-lg text-xs md:text-sm font-medium max-w-[135px] md:max-w-[170px]"
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
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-colors" />
              
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="relative z-10 font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="relative z-10 text-white/85 text-sm leading-relaxed">
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