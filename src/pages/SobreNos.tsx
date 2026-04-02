import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Award, Users, Heart, Target, Shield, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import sobreNosLogo from "@/assets/sobre-nos-logo.jpg";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const valores = [
  { icon: Heart, titulo: "Humanização", descricao: "Cada paciente é tratado com dignidade, respeito e compaixão." },
  { icon: Shield, titulo: "Ética e Sigilo", descricao: "Compromisso absoluto com a confidencialidade e princípios éticos." },
  { icon: Target, titulo: "Excelência", descricao: "Busca constante pela melhor prática clínica e atualização contínua." },
  { icon: Users, titulo: "Trabalho em Equipe", descricao: "Abordagem multidisciplinar integrando diferentes especialidades." },
];

const historia = [
  { ano: "2004", titulo: "Fundação", descricao: "Início das atividades com foco em tratamento humanizado." },
  { ano: "2010", titulo: "Expansão", descricao: "Abertura da unidade feminina exclusiva, pioneira na região." },
  { ano: "2015", titulo: "Modernização", descricao: "Novos protocolos e ampliação da equipe multidisciplinar." },
  { ano: "2020", titulo: "Reconhecimento", descricao: "Referência em saúde mental no interior de São Paulo." },
  { ano: "Hoje", titulo: "+3000 Vidas", descricao: "Mais de 3000 pacientes com índice de satisfação superior a 98%." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const SobreNos = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Gostaria de saber mais sobre o Hospital Rumo Certo.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img src={sobreNosLogo} alt="Hospital Rumo Certo" className="w-48 md:w-80 h-auto object-contain rounded-2xl" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Nossa História</span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-secondary mt-2 mb-6">
                Sobre o Hospital Rumo Certo
              </h1>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                Há mais de 20 anos, dedicamo-nos à recuperação de vidas afetadas pela dependência química e transtornos mentais com tratamento humanizado e excelência técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-display text-xl md:text-2xl font-black text-secondary mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Proporcionar tratamento integral e humanizado para pessoas com dependência química e transtornos mentais, promovendo recuperação e reinserção social.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-6 md:p-8 rounded-xl bg-[hsl(215,10%,96%)] border border-border/40">
              <h3 className="font-display text-xl md:text-2xl font-black text-secondary mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Ser referência nacional em saúde mental e dependência química, reconhecidos pela excelência, inovação e resultados transformadores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {valores.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-lg">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Nossa Trajetória
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {historia.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex gap-4 md:gap-6 items-start">
                <div className="w-16 md:w-20 flex-shrink-0 text-right">
                  <span className="font-black text-primary text-sm md:text-lg">{item.ano}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div className="flex-1 pb-4 border-b border-border last:border-0">
                  <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">{item.titulo}</h3>
                  <p className="text-muted-foreground text-xs md:text-base">{item.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-primary-foreground mb-3">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Agende uma visita e conheça pessoalmente nossas instalações e equipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Phone className="w-5 h-5 mr-2" /> Agendar Visita
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="w-5 h-5 mr-2" /> Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SobreNos;
