import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, ClipboardCheck, Home, Stethoscope, Smile, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import grupoApoio from "@/assets/grupo-apoio.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const etapas = [
  { icon: Phone, numero: "01", titulo: "Primeiro Contato", descricao: "Entre em contato 24h. Nossa equipe vai ouvir sua situação com empatia e sigilo absoluto.", detalhes: ["Atendimento humanizado", "Orientação sobre tipos de internação", "Esclarecimento sobre convênios", "Agendamento de avaliação"] },
  { icon: ClipboardCheck, numero: "02", titulo: "Avaliação Inicial", descricao: "Avaliação médica e psicológica completa para o plano terapêutico individualizado.", detalhes: ["Anamnese detalhada", "Avaliação psiquiátrica", "Exames laboratoriais", "Definição do plano"] },
  { icon: Home, numero: "03", titulo: "Acolhimento", descricao: "Recepção na unidade mais adequada com todo suporte para adaptação.", detalhes: ["Apresentação das instalações", "Orientação sobre rotina", "Suporte emocional", "Início da desintoxicação"] },
  { icon: Stethoscope, numero: "04", titulo: "Tratamento Intensivo", descricao: "Programa terapêutico completo com atividades diárias e acompanhamento médico.", detalhes: ["Psicoterapia individual e grupo", "Programa de 12 Passos", "Atividades terapêuticas", "Acompanhamento psiquiátrico"] },
  { icon: Smile, numero: "05", titulo: "Preparação para Alta", descricao: "Consolidação do tratamento com foco em reinserção social e prevenção de recaídas.", detalhes: ["Prevenção de recaídas", "Orientação familiar", "Acompanhamento ambulatorial", "Grupos de apoio"] },
];

const tiposInternacao = [
  { titulo: "Internação Voluntária", descricao: "Quando o paciente reconhece a necessidade e aceita ser internado.", indicacao: "Pacientes com consciência da doença e motivação para o tratamento." },
  { titulo: "Internação Involuntária", descricao: "Sem consentimento do paciente, mediante laudo médico e comunicação ao MP.", indicacao: "Casos de risco para si ou terceiros." },
  { titulo: "Internação Compulsória", descricao: "Determinada por ordem judicial em casos de maior gravidade.", indicacao: "Determinação judicial após avaliação de autoridades." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const ComoFunciona = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Gostaria de entender como funciona o processo de internação.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      <div className="relative w-full overflow-hidden">
        <img src={grupoApoio} alt="Grupo de apoio mútuo" className="w-full h-auto" />
      </div>

      {/* Etapas */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Etapas do Tratamento
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {etapas.map((etapa, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-white border border-border/40 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 flex items-start gap-3">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <etapa.icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-primary/20 md:hidden">{etapa.numero}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="hidden md:block text-xs font-bold text-primary/50">ETAPA {etapa.numero}</span>
                    <h3 className="font-bold text-foreground text-sm md:text-xl">{etapa.titulo}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3 text-xs md:text-base">{etapa.descricao}</p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {etapa.detalhes.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] md:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Internação */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Tipos de Internação
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-2xl mx-auto">
            A Lei 10.216/2001 prevê três modalidades de internação psiquiátrica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {tiposInternacao.map((tipo, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-4 md:p-6 rounded-xl bg-white border border-border/40 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground mb-2 text-sm md:text-lg">{tipo.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3">{tipo.descricao}</p>
                <div className="pt-3 border-t border-border">
                  <span className="text-[10px] md:text-xs font-medium text-primary uppercase">Indicação:</span>
                  <p className="text-xs md:text-sm text-foreground mt-1">{tipo.indicacao}</p>
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
            Pronto para Começar?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Nossa equipe está disponível 24 horas para esclarecer suas dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Phone className="w-5 h-5 mr-2" /> Ligar Agora
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Calendar className="w-5 h-5 mr-2" /> Agendar Avaliação
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ComoFunciona;
