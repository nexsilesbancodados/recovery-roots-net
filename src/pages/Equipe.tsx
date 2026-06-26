import { SEO } from "@/components/SEO";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, MessageCircle, Stethoscope, Brain, Heart, Users, GraduationCap, Award, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import equipeMedica from "@/assets/equipe-medica.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const especialidades = [
  { icon: Stethoscope, titulo: "Psiquiatras", descricao: "Médicos especialistas em diagnóstico e tratamento de transtornos mentais e dependência química.", cor: "bg-blue-500/10 text-blue-600" },
  { icon: Brain, titulo: "Psicólogos", descricao: "Profissionais especializados em psicoterapia individual e em grupo, com diversas abordagens.", cor: "bg-violet-500/10 text-violet-600" },
  { icon: Heart, titulo: "Enfermagem 24h", descricao: "Equipe de enfermagem especializada em saúde mental, disponível 24 horas.", cor: "bg-rose-500/10 text-rose-600" },
  { icon: Users, titulo: "Terapeutas Ocupacionais", descricao: "Profissionais que desenvolvem atividades terapêuticas para reabilitação e reinserção social.", cor: "bg-emerald-500/10 text-emerald-600" },
  { icon: GraduationCap, titulo: "Assistentes Sociais", descricao: "Suporte na reintegração social e familiar, mediando conflitos e orientando direitos.", cor: "bg-amber-500/10 text-amber-600" },
  { icon: Award, titulo: "Conselheiros em Dependência", descricao: "Profissionais com vivência e formação no programa de 12 passos.", cor: "bg-orange-500/10 text-orange-600" },
];

const diferenciais = [
  { titulo: "Equipe Multidisciplinar Integrada", descricao: "Reuniões de equipe semanais para discussão de cada caso clínico." },
  { titulo: "Supervisão Médica 24 Horas", descricao: "Psiquiatras e enfermeiros disponíveis em tempo integral." },
  { titulo: "Profissionais com Experiência Comprovada", descricao: "Média de 10+ anos de experiência em saúde mental." },
  { titulo: "Formação Contínua", descricao: "Atualização constante em congressos e especializações." },
];

const principios = [
  "Abordagem humanizada e sem julgamentos",
  "Protocolos baseados em evidências científicas",
  "Respeito à individualidade de cada paciente",
  "Ética profissional em todas as condutas",
  "Comunicação transparente com familiares",
  "Compromisso com a recuperação integral",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Equipe = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Gostaria de saber mais sobre a equipe médica do hospital.");

  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Nossa Equipe Multidisciplinar "} description={" Hospital Rumo Certo|Psiquiatras, psicólogos, enfermeiros e terapeutas dedicados ao tratamento humanizado."} path={"/equipe"} />
      <SEO title={"Nossa Equipe Multidisciplinar | Hospital Rumo Certo"} description={"Psiquiatras, psicólogos, enfermeiros e terapeutas dedicados ao tratamento humanizado."} path={"/equipe"} />
      <EmergencyBar />
      <Navbar />

      <div className="relative w-full overflow-hidden pt-28 md:pt-32">
        <img src={equipeMedica} alt="Equipe médica do Hospital Rumo Certo" className="w-full h-auto" />
      </div>

      {/* Banner */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-3" />
            <h1 className="font-display text-2xl md:text-4xl font-black text-primary-foreground mb-2">
              Nossa Equipe
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
              Profissionais dedicados e especializados em saúde mental, prontos para oferecer o melhor cuidado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Uma equipe completa para cuidar de cada aspecto da recuperação
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {especialidades.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${item.cor} flex items-center justify-center mb-3`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-lg">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais + Princípios */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {/* Diferenciais */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Nossos Diferenciais
              </h2>
              <div className="space-y-3">
                {diferenciais.map((item, index) => (
                  <div key={index} className="bg-white border border-border/40 rounded-xl p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{item.titulo}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">{item.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Princípios */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Princípios da Equipe
              </h2>
              <div className="bg-emerald-50 border border-emerald-200/50 rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-emerald-800 text-sm">Valores que guiam nosso trabalho</span>
                </div>
                <div className="space-y-2.5">
                  {principios.map((principio, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground text-xs md:text-sm">{principio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">
            <div className="text-5xl md:text-7xl text-primary/20 font-serif mb-4">"</div>
            <p className="text-foreground text-base md:text-xl leading-relaxed italic mb-6">
              Cada profissional aqui carrega não apenas conhecimento técnico, mas um compromisso 
              genuíno com a vida de cada paciente que cruza nossas portas.
            </p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-sm font-medium">Direção Clínica — Hospital Rumo Certo</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Equipe;
