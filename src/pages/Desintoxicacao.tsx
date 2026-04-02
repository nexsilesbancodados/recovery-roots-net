import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Pill, Shield, Clock, Stethoscope, Heart, Activity, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const etapas = [
  { numero: "01", titulo: "Avaliação Médica Completa", descricao: "Exames clínicos e laboratoriais para planejar a desintoxicação de forma segura." },
  { numero: "02", titulo: "Protocolo de Desintoxicação", descricao: "Protocolo médico individualizado para manejo dos sintomas de abstinência." },
  { numero: "03", titulo: "Monitoramento Contínuo", descricao: "Acompanhamento 24h por enfermagem e médicos para segurança total." },
  { numero: "04", titulo: "Estabilização", descricao: "Após a fase aguda, o paciente é preparado para a próxima etapa terapêutica." },
];

const diferenciais = [
  { icon: Shield, titulo: "Segurança em Primeiro Lugar", descricao: "Protocolos rigorosos para evitar complicações da abstinência." },
  { icon: Stethoscope, titulo: "Equipe Médica 24h", descricao: "Médicos clínicos e psiquiatras disponíveis dia e noite." },
  { icon: Pill, titulo: "Medicação Adequada", descricao: "Uso criterioso de medicamentos para aliviar sintomas." },
  { icon: Heart, titulo: "Conforto no Processo", descricao: "Ambiente acolhedor e equipe humanizada." },
  { icon: Activity, titulo: "Monitoramento de Sinais", descricao: "Acompanhamento constante de sinais vitais." },
  { icon: Clock, titulo: "Tempo Adequado", descricao: "Respeitamos o tempo necessário para cada paciente." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Desintoxicacao = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Preciso de informações sobre o processo de desintoxicação.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Primeira Etapa</span>
            <h1 className="font-display text-3xl md:text-5xl font-black text-secondary mt-2 mb-6">
              Desintoxicação Segura
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-8">
              A desintoxicação é o primeiro passo da jornada de recuperação. Realizamos esse processo com segurança, supervisão médica constante e todo o suporte necessário.
            </p>
            <Button size="lg" onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90">
              <MessageCircle className="w-5 h-5 mr-2" /> Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Como Funciona o Processo
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3 md:gap-5">
            {etapas.map((etapa, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-4 md:p-6 rounded-xl bg-white border border-border/40 hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary/20 mb-2">{etapa.numero}</div>
                <h3 className="font-bold text-foreground mb-1 text-sm md:text-lg">{etapa.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{etapa.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-lg">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-primary-foreground mb-3">
            Pronto para Dar o Primeiro Passo?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            A desintoxicação é o início de uma nova vida. Entre em contato e nossa equipe vai orientar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Phone className="w-5 h-5 mr-2" /> Ligar Agora
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Desintoxicacao;
