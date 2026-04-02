import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, Clock, MapPin, Shield, Ambulance, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import resgateHumanizado from "@/assets/resgate-humanizado.png";
import { openWhatsApp as openWhatsAppUtil, makeCall, PRIMARY_PHONE, PHONE_DISPLAY } from "@/lib/contact";

const diferenciais = [
  { icon: Clock, titulo: "Atendimento 24 Horas", descricao: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, incluindo feriados." },
  { icon: MapPin, titulo: "Cobertura Nacional", descricao: "Realizamos remoções em todo o território brasileiro com veículos equipados." },
  { icon: Shield, titulo: "Sigilo Absoluto", descricao: "Veículos descaracterizados e equipe treinada para garantir total discrição." },
  { icon: Ambulance, titulo: "Equipe Especializada", descricao: "Profissionais de saúde experientes em abordagem e transporte de pacientes psiquiátricos." },
];

const etapasResgate = [
  { numero: "01", titulo: "Contato Inicial", descricao: "Ligue ou envie mensagem. Nossa equipe vai entender a situação e orientar os próximos passos." },
  { numero: "02", titulo: "Avaliação Remota", descricao: "Colhemos informações sobre o paciente para planejar a abordagem mais adequada." },
  { numero: "03", titulo: "Deslocamento da Equipe", descricao: "Enviamos nossa equipe com veículo adequado ao local indicado." },
  { numero: "04", titulo: "Abordagem Humanizada", descricao: "Nossa equipe realiza a abordagem com respeito, empatia e técnicas não traumáticas." },
  { numero: "05", titulo: "Transporte Seguro", descricao: "Conduzimos o paciente até nossa unidade com acompanhamento profissional durante todo o trajeto." },
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

      <div className="relative w-full overflow-hidden">
        <img src={resgateHumanizado} alt="Equipe de resgate humanizado" className="w-full h-auto" />
      </div>

      {/* Diferenciais */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Por Que Escolher Nosso Serviço
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
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
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Como Funciona o Resgate
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {etapasResgate.map((etapa, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex gap-4 p-4 md:p-6 bg-white rounded-xl border border-border/40">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
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

      {/* CTA Emergência */}
      <section className="py-14 md:py-20 bg-destructive">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-destructive-foreground mb-4">
            Situação de Emergência?
          </h2>
          <p className="text-destructive-foreground/90 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Não espere. Nossa equipe está pronta para ajudar agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={ligarAgora} className="bg-background text-destructive hover:bg-background/90">
              <Phone className="w-5 h-5 mr-2" /> {PHONE_DISPLAY.main}
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/10">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp 24h
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Resgate;
