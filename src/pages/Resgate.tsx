import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, Clock, MapPin, Shield, Ambulance, MessageCircle, Heart, CheckCircle, AlertTriangle, Siren, Lock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import resgateHumanizado from "@/assets/resgate-humanizado.png";
import { openWhatsApp as openWhatsAppUtil, makeCall, PRIMARY_PHONE, PHONE_DISPLAY } from "@/lib/contact";

const diferenciais = [
  { icon: Clock, titulo: "Atendimento 24 Horas", descricao: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, incluindo feriados.", cor: "bg-blue-500/10 text-blue-600" },
  { icon: MapPin, titulo: "Cobertura Nacional", descricao: "Realizamos remoções em todo o território brasileiro com veículos equipados.", cor: "bg-emerald-500/10 text-emerald-600" },
  { icon: Lock, titulo: "Sigilo Absoluto", descricao: "Veículos descaracterizados e equipe treinada para garantir total discrição.", cor: "bg-violet-500/10 text-violet-600" },
  { icon: UserCheck, titulo: "Equipe Especializada", descricao: "Profissionais de saúde experientes em abordagem e transporte de pacientes psiquiátricos.", cor: "bg-amber-500/10 text-amber-600" },
];

const etapasResgate = [
  { numero: "01", titulo: "Contato Inicial", descricao: "Ligue ou envie mensagem. Nossa equipe vai entender a situação e orientar os próximos passos.", cor: "bg-blue-500" },
  { numero: "02", titulo: "Avaliação Remota", descricao: "Colhemos informações sobre o paciente para planejar a abordagem mais adequada.", cor: "bg-emerald-500" },
  { numero: "03", titulo: "Deslocamento da Equipe", descricao: "Enviamos nossa equipe com veículo adequado ao local indicado.", cor: "bg-violet-500" },
  { numero: "04", titulo: "Abordagem Humanizada", descricao: "Nossa equipe realiza a abordagem com respeito, empatia e técnicas não traumáticas.", cor: "bg-amber-500" },
  { numero: "05", titulo: "Transporte Seguro", descricao: "Conduzimos o paciente até nossa unidade com acompanhamento profissional.", cor: "bg-rose-500" },
];

const garantias = [
  { titulo: "Respaldo Legal Completo", descricao: "Todo o processo segue a legislação vigente, com documentação e laudos médicos." },
  { titulo: "Equipe Multidisciplinar", descricao: "Enfermeiros, técnicos e psicólogos acompanham todo o procedimento." },
  { titulo: "Veículos Equipados", descricao: "Ambulâncias com equipamentos de suporte avançado para qualquer emergência." },
  { titulo: "Comunicação com a Família", descricao: "A família é informada em tempo real sobre cada etapa do processo." },
];

const tiposResgate = [
  "Resgate voluntário — com consentimento do paciente",
  "Resgate involuntário — solicitação familiar com laudo médico",
  "Resgate compulsório — determinação judicial",
  "Remoção inter-hospitalar",
  "Resgate em situação de rua",
  "Resgate em locais de uso (cracolândias)",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Resgate = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Preciso de ajuda com resgate/remoção de paciente.");
  const ligarAgora = () => makeCall(PRIMARY_PHONE);

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      <div className="relative w-full overflow-hidden pt-20 md:pt-24">
        <img src={resgateHumanizado} alt="Equipe de resgate humanizado" className="w-full h-auto" />
      </div>

      {/* Banner */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Siren className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-3" />
            <h1 className="font-display text-2xl md:text-4xl font-black text-primary-foreground mb-2">
              Resgate Humanizado 24h
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
              Equipe especializada para resgate e remoção com respeito, empatia e total sigilo em todo o Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Por Que Escolher Nosso Serviço
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Profissionalismo e humanização em cada atendimento
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl ${item.cor} flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-lg">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Como Funciona o Resgate
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Um processo humanizado do início ao fim
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {etapasResgate.map((etapa, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex gap-4 p-4 md:p-6 bg-white rounded-xl border border-border/40 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full ${etapa.cor}`} />
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base ml-2">
                  {etapa.numero}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm md:text-lg">{etapa.titulo}</h3>
                  <p className="text-muted-foreground text-xs md:text-base">{etapa.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Resgate + Garantias */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {/* Tipos */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Tipos de Resgate
              </h2>
              <div className="bg-blue-50 border border-blue-200/50 rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Ambulance className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-800 text-sm">Modalidades atendidas</span>
                </div>
                <div className="space-y-2.5">
                  {tiposResgate.map((tipo, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground text-xs md:text-sm">{tipo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Garantias */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Nossas Garantias
              </h2>
              <div className="space-y-3">
                {garantias.map((item, index) => (
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
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">
            <div className="text-5xl md:text-7xl text-primary/20 font-serif mb-4">"</div>
            <p className="text-foreground text-base md:text-xl leading-relaxed italic mb-6">
              Resgatar uma vida é mais do que transportar um paciente. É devolver esperança 
              a uma família inteira, com respeito e dignidade.
            </p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-sm font-medium">Equipe de Resgate — Hospital Rumo Certo</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Emergência */}
      <section className="py-14 md:py-20 bg-destructive">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-2xl md:text-3xl font-black text-destructive-foreground mb-4">
              Situação de Emergência?
            </h2>
            <p className="text-destructive-foreground/90 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Não espere. Nossa equipe está pronta para ajudar agora mesmo, 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={ligarAgora} className="bg-background text-destructive hover:bg-background/90">
                <Phone className="w-5 h-5 mr-2" /> {PHONE_DISPLAY.main}
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp 24h
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

export default Resgate;
