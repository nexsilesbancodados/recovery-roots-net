import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, MessageCircle, Stethoscope, Brain, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import equipeMedica from "@/assets/equipe-medica.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const especialidades = [
  { icon: Stethoscope, titulo: "Psiquiatras", descricao: "Médicos especialistas em diagnóstico e tratamento de transtornos mentais e dependência química." },
  { icon: Brain, titulo: "Psicólogos", descricao: "Profissionais especializados em psicoterapia individual e em grupo, com diversas abordagens." },
  { icon: Heart, titulo: "Enfermagem 24h", descricao: "Equipe de enfermagem especializada em saúde mental, disponível 24 horas." },
  { icon: Users, titulo: "Terapeutas Ocupacionais", descricao: "Profissionais que desenvolvem atividades terapêuticas para reabilitação e reinserção social." },
];

const diferenciais = [
  "Equipe multidisciplinar integrada",
  "Supervisão médica 24 horas",
  "Profissionais com experiência comprovada",
  "Formação contínua da equipe",
  "Abordagem humanizada e sem julgamentos",
  "Protocolos baseados em evidências científicas",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Equipe = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Gostaria de saber mais sobre a equipe médica do hospital.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      <div className="relative w-full overflow-hidden">
        <img src={equipeMedica} alt="Equipe médica do Hospital Rumo Certo" className="w-full h-auto" />
      </div>

      {/* Especialidades */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {especialidades.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-lg">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
              Nossos Diferenciais
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {diferenciais.map((diferencial, index) => (
                <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex items-center gap-3 p-3 md:p-4 bg-white rounded-xl border border-border/40">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground text-xs md:text-base">{diferencial}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-primary-foreground mb-3">
            Conheça Nossa Equipe
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Agende uma visita para conhecer nossas instalações e conversar com nossa equipe sobre o tratamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Phone className="w-5 h-5 mr-2" /> Agendar Visita
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="w-5 h-5 mr-2" /> Tirar Dúvidas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Equipe;
