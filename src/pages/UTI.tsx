import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Activity, HeartPulse, Stethoscope, Clock, Shield, Users, Phone, MessageCircle, AlertTriangle, CheckCircle, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import uptiQuarto from "@/assets/upti-quarto.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const recursos = [
  { icon: HeartPulse, titulo: "Atenção 24 Horas", descricao: "Equipe multidisciplinar com psiquiatras, enfermeiros e psicólogos oferece cuidados constantes.", cor: "bg-rose-500/10 text-rose-600" },
  { icon: Shield, titulo: "Ambiente Seguro", descricao: "Estrutura adaptada para garantir a segurança dos pacientes em situações de risco.", cor: "bg-emerald-500/10 text-emerald-600" },
  { icon: Activity, titulo: "Tratamento Intensivo", descricao: "Intervenções farmacológicas, psicoterapia e contenção emocional para estabilizar o quadro.", cor: "bg-blue-500/10 text-blue-600" },
  { icon: Stethoscope, titulo: "Gestão de Crises", descricao: "Estabilização de crises psicóticas, episódios maníacos ou depressivos graves.", cor: "bg-violet-500/10 text-violet-600" },
  { icon: Clock, titulo: "Atendimento Imediato", descricao: "Disponibilidade 24 horas para admissões emergenciais em todo o Brasil.", cor: "bg-amber-500/10 text-amber-600" },
  { icon: Users, titulo: "Suporte Familiar", descricao: "Comunicação constante com a família sobre evolução do quadro e orientações.", cor: "bg-orange-500/10 text-orange-600" },
];

const indicacoes = [
  "Síndrome de abstinência alcoólica grave (risco de delirium tremens)",
  "Abstinência de benzodiazepínicos ou opioides",
  "Surtos psicóticos agudos",
  "Ideação suicida com risco iminente",
  "Episódios maníacos ou depressivos graves",
  "Quadros de agitação psicomotora intensa",
  "Pacientes com risco imediato para si ou para os outros",
  "Intoxicação aguda grave",
];

const protocolos = [
  { titulo: "Avaliação de Risco Imediata", descricao: "Triagem completa com psiquiatra em até 30 minutos após admissão." },
  { titulo: "Plano Terapêutico Individual", descricao: "Protocolo personalizado com metas claras e reavaliação contínua." },
  { titulo: "Monitoramento de Sinais Vitais", descricao: "Acompanhamento 24h de pressão, frequência cardíaca, saturação e temperatura." },
  { titulo: "Transição para Internação", descricao: "Após estabilização, encaminhamento para o programa terapêutico mais adequado." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const UTI = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Preciso de informações sobre a UPTI e internação de emergência.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      <div className="relative w-full overflow-hidden pt-24 md:pt-28">
        <img src={uptiQuarto} alt="UPTI - Unidade Psiquiátrica de Tratamento Intensivo" className="w-full h-auto" />
      </div>

      {/* Banner */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-3" />
            <h1 className="font-display text-2xl md:text-4xl font-black text-primary-foreground mb-2">
              UPTI — Unidade Psiquiátrica de Tratamento Intensivo
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
              Cuidados intensivos 24h para pacientes em crise aguda, com monitoramento contínuo e equipe especializada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Estrutura e Recursos
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Infraestrutura completa para estabilização de quadros psiquiátricos graves
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {recursos.map((item, index) => (
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

      {/* Indicações + Protocolos */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {/* Indicações */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Quando a UPTI é Indicada?
              </h2>
              <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-amber-800 text-sm">Situações que exigem cuidados intensivos</span>
                </div>
                <div className="space-y-2.5">
                  {indicacoes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Protocolos */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Nossos Protocolos
              </h2>
              <div className="space-y-3">
                {protocolos.map((item, index) => (
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
              Na UPTI, cada minuto conta. Nossa equipe é treinada para agir com rapidez e precisão, 
              garantindo que o paciente receba o cuidado necessário no momento mais crítico.
            </p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-sm font-medium">Equipe de Psiquiatria — Hospital Rumo Certo</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Emergência */}
      <section className="py-14 md:py-20 bg-destructive">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-2xl md:text-3xl font-black text-destructive-foreground mb-4">
              Emergência Psiquiátrica?
            </h2>
            <p className="text-destructive-foreground/90 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Nossa equipe está disponível 24 horas para atendimento emergencial. Em casos de risco de vida, entre em contato imediatamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-destructive hover:bg-background/90" onClick={handleWhatsApp}>
                <Phone className="w-5 h-5 mr-2" /> Ligar Agora — Emergência
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
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

export default UTI;
