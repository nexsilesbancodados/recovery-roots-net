import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, ClipboardCheck, Home, Stethoscope, Smile, Calendar, MessageCircle, ArrowRight, UserCheck, Scale, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import grupoApoio from "@/assets/grupo-apoio.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const etapas = [
  { icon: Phone, numero: "01", titulo: "Primeiro Contato", descricao: "Entre em contato 24h. Nossa equipe vai ouvir sua situação com empatia e sigilo absoluto.", detalhes: ["Atendimento humanizado", "Orientação sobre internação", "Esclarecimento sobre convênios", "Agendamento de avaliação"] },
  { icon: ClipboardCheck, numero: "02", titulo: "Avaliação Inicial", descricao: "Avaliação médica e psicológica completa para o plano terapêutico individualizado.", detalhes: ["Anamnese detalhada", "Avaliação psiquiátrica", "Exames laboratoriais", "Definição do plano"] },
  { icon: Home, numero: "03", titulo: "Acolhimento", descricao: "Recepção na unidade mais adequada com todo suporte para adaptação.", detalhes: ["Apresentação das instalações", "Orientação sobre rotina", "Suporte emocional", "Início da desintoxicação"] },
  { icon: Stethoscope, numero: "04", titulo: "Tratamento Intensivo", descricao: "Programa terapêutico completo com atividades diárias e acompanhamento.", detalhes: ["Psicoterapia individual e grupo", "Programa de 12 Passos", "Atividades terapêuticas", "Acompanhamento psiquiátrico"] },
  { icon: Smile, numero: "05", titulo: "Preparação para Alta", descricao: "Consolidação com foco em reinserção social e prevenção de recaídas.", detalhes: ["Prevenção de recaídas", "Orientação familiar", "Acompanhamento ambulatorial", "Grupos de apoio"] },
];

const tiposInternacao = [
  { icon: UserCheck, titulo: "Internação Voluntária", descricao: "Quando o paciente reconhece a necessidade e aceita ser internado por vontade própria.", indicacao: "Pacientes com consciência da doença e motivação para o tratamento.", cor: "bg-emerald-500/10 text-emerald-600" },
  { icon: Scale, titulo: "Internação Involuntária", descricao: "Sem consentimento do paciente, mediante laudo médico e comunicação ao Ministério Público.", indicacao: "Casos de risco para si ou terceiros, quando o paciente não pode decidir.", cor: "bg-amber-500/10 text-amber-600" },
  { icon: Gavel, titulo: "Internação Compulsória", descricao: "Determinada por ordem judicial em casos de reincidência ou maior gravidade.", indicacao: "Determinação judicial após avaliação de autoridades competentes.", cor: "bg-rose-500/10 text-rose-600" },
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

      {/* Hero com imagem */}
      <div className="relative w-full overflow-hidden pt-24 md:pt-28">
        <img src={grupoApoio} alt="Grupo de apoio mútuo" className="w-full h-auto" />
      </div>

      {/* Subtítulo Banner */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-black text-primary-foreground mb-2">
            Como Funciona o Tratamento
          </motion.h1>
          <p className="text-primary-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
            Conheça cada etapa do processo de internação e recuperação no Hospital Rumo Certo
          </p>
        </div>
      </section>

      {/* Etapas do Tratamento - Timeline Visual */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-12">
            Etapas do Tratamento
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Linha vertical da timeline - desktop */}
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            <div className="space-y-6">
              {etapas.map((etapa, index) => (
                <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="relative">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {/* Número/Ícone */}
                    <div className="flex items-start gap-3 md:flex-col md:items-center md:w-20 flex-shrink-0">
                      <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex flex-col items-center justify-center shadow-lg">
                        <etapa.icon className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-[10px] md:text-xs font-bold mt-0.5">{etapa.numero}</span>
                      </div>
                      <h3 className="font-black text-foreground text-base md:hidden">{etapa.titulo}</h3>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 bg-white rounded-xl border border-border/40 p-4 md:p-6 hover:shadow-lg transition-shadow">
                      <h3 className="hidden md:block font-display font-black text-foreground text-xl mb-2">{etapa.titulo}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-4">{etapa.descricao}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {etapa.detalhes.map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] md:text-sm">
                            <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-foreground">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            A Lei 10.216/2001 prevê três modalidades de internação psiquiátrica, cada uma adequada a diferentes situações.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {tiposInternacao.map((tipo, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-xl border border-border/40 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Header colorido */}
                <div className={`p-4 md:p-5 ${tipo.cor.replace('text-', 'bg-').replace('/10', '/5')}`}>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${tipo.cor} flex items-center justify-center mb-3`}>
                    <tipo.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-display font-black text-foreground text-base md:text-lg">{tipo.titulo}</h3>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-muted-foreground text-xs md:text-sm mb-4">{tipo.descricao}</p>
                  <div className="pt-3 border-t border-border/40">
                    <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Indicação</span>
                    <p className="text-xs md:text-sm text-foreground mt-1">{tipo.indicacao}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Dúvidas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { q: "Quanto tempo dura a internação?", a: "A duração varia conforme o caso, geralmente entre 30 a 90 dias. O plano é individualizado e reavaliado periodicamente." },
              { q: "A família pode visitar?", a: "Sim! Temos horários de visita regulares e a família é parte fundamental do tratamento." },
              { q: "O convênio cobre a internação?", a: "Trabalhamos com os principais convênios. Nossa equipe cuida de toda a autorização e burocracia." },
              { q: "O paciente pode usar celular?", a: "O uso de eletrônicos é orientado pela equipe terapêutica, visando o melhor aproveitamento do tratamento." },
            ].map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-xl border border-border/40 p-4 md:p-5">
                <h3 className="font-bold text-foreground text-sm md:text-base mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Pronto para Começar?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Nossa equipe está disponível 24 horas para esclarecer suas dúvidas e orientar sobre o melhor caminho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Phone className="w-5 h-5 mr-2" /> Ligar Agora
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Calendar className="w-5 h-5 mr-2" /> Agendar Avaliação
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

export default ComoFunciona;
