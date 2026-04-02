import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Activity, HeartPulse, Stethoscope, Clock, Shield, Users, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import uptiQuarto from "@/assets/upti-quarto.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const recursos = [
  { icon: HeartPulse, titulo: "Atenção 24 Horas", descricao: "Equipe multidisciplinar com psiquiatras, enfermeiros e psicólogos oferece cuidados constantes." },
  { icon: Shield, titulo: "Ambiente Seguro", descricao: "Estrutura adaptada para garantir a segurança dos pacientes em situações de risco." },
  { icon: Activity, titulo: "Tratamento Intensivo", descricao: "Intervenções farmacológicas, psicoterapia e contenção emocional para estabilizar o quadro." },
  { icon: Stethoscope, titulo: "Gestão de Crises", descricao: "Estabilização de crises psicóticas, episódios maníacos ou depressivos graves." },
  { icon: Clock, titulo: "Atendimento Imediato", descricao: "Disponibilidade 24 horas para admissões emergenciais em todo o Brasil." },
  { icon: Users, titulo: "Suporte Familiar", descricao: "Comunicação constante com a família sobre evolução do quadro e orientações." },
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

      <div className="relative w-full overflow-hidden">
        <img src={uptiQuarto} alt="UPTI - Unidade Psiquiátrica de Tratamento Intensivo" className="w-full h-auto" />
      </div>

      {/* Sobre a UPTI */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Cuidados Intensivos</span>
            <h1 className="font-display text-2xl md:text-4xl font-black text-secondary mt-2 mb-6">
              UPTI — Unidade Psiquiátrica de Tratamento Intensivo
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4">
              A UPTI é voltada para pacientes com transtornos mentais graves em crise aguda, que requerem monitoramento contínuo e cuidados intensivos.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Oferece um nível de cuidado especializado que vai além da internação convencional, garantindo suporte necessário para recuperação ou estabilização.
            </p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Estrutura e Recursos
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {recursos.map((item, index) => (
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

      {/* Indicações */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-8">
              Quando a UPTI é Indicada?
            </h2>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-border/40">
              <ul className="space-y-3">
                {indicacoes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-destructive">
        <div className="container mx-auto px-4 text-center">
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
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default UTI;
