import { SEO } from "@/components/SEO";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Pill, Shield, Clock, Stethoscope, Heart, Activity, Phone, MessageCircle, Droplets, CheckCircle, AlertTriangle, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const etapas = [
  { numero: "01", titulo: "Avaliação Médica Completa", descricao: "Exames clínicos e laboratoriais para planejar a desintoxicação de forma segura.", cor: "bg-blue-500" },
  { numero: "02", titulo: "Protocolo de Desintoxicação", descricao: "Protocolo médico individualizado para manejo dos sintomas de abstinência.", cor: "bg-emerald-500" },
  { numero: "03", titulo: "Monitoramento Contínuo", descricao: "Acompanhamento 24h por enfermagem e médicos para segurança total.", cor: "bg-violet-500" },
  { numero: "04", titulo: "Estabilização e Transição", descricao: "Após a fase aguda, o paciente é preparado para a próxima etapa terapêutica.", cor: "bg-amber-500" },
];

const diferenciais = [
  { icon: Shield, titulo: "Segurança em Primeiro Lugar", descricao: "Protocolos rigorosos para evitar complicações da abstinência.", cor: "bg-emerald-500/10 text-emerald-600" },
  { icon: Stethoscope, titulo: "Equipe Médica 24h", descricao: "Médicos clínicos e psiquiatras disponíveis dia e noite.", cor: "bg-blue-500/10 text-blue-600" },
  { icon: Pill, titulo: "Medicação Adequada", descricao: "Uso criterioso de medicamentos para aliviar sintomas.", cor: "bg-violet-500/10 text-violet-600" },
  { icon: Heart, titulo: "Conforto no Processo", descricao: "Ambiente acolhedor e equipe humanizada.", cor: "bg-rose-500/10 text-rose-600" },
  { icon: Activity, titulo: "Monitoramento de Sinais", descricao: "Acompanhamento constante de sinais vitais.", cor: "bg-amber-500/10 text-amber-600" },
  { icon: Clock, titulo: "Tempo Adequado", descricao: "Respeitamos o tempo necessário de cada organismo.", cor: "bg-orange-500/10 text-orange-600" },
];

const sintomasAbstinencia = [
  "Tremores e sudorese intensa",
  "Ansiedade extrema e insônia",
  "Náuseas, vômitos e dores no corpo",
  "Confusão mental e desorientação",
  "Alucinações visuais ou auditivas",
  "Convulsões (em casos graves)",
  "Taquicardia e hipertensão",
  "Agitação psicomotora intensa",
];

const cuidadosPosDesintox = [
  { titulo: "Avaliação Psiquiátrica", descricao: "Diagnóstico completo de comorbidades para definir o melhor plano terapêutico." },
  { titulo: "Início da Psicoterapia", descricao: "Sessões individuais e em grupo para tratar as causas da dependência." },
  { titulo: "Suporte Nutricional", descricao: "Recuperação nutricional com dieta equilibrada para restaurar o organismo." },
  { titulo: "Planejamento de Longo Prazo", descricao: "Programa de 12 passos e preparo para a reintegração social." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const Desintoxicacao = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Preciso de informações sobre o processo de desintoxicação.");

  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Desintoxicação Médica Segura "} description={" Hospital Rumo Certo|Desintoxicação supervisionada por equipe médica 24h, com protocolo individualizado e seguro."} path={"/desintoxicacao"} />
      <SEO title={"Desintoxicação Médica Segura | Hospital Rumo Certo"} description={"Desintoxicação supervisionada por equipe médica 24h, com protocolo individualizado e seguro."} path={"/desintoxicacao"} />
      <EmergencyBar />
      <Navbar />

      {/* Banner Hero */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Droplets className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-3" />
            <h1 className="font-display text-2xl md:text-4xl font-black text-primary-foreground mb-2">
              Desintoxicação Segura
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-2xl mx-auto mb-6">
              A desintoxicação é o primeiro passo da jornada de recuperação. Realizamos esse processo com segurança, supervisão médica constante e todo o suporte necessário.
            </p>
            <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <MessageCircle className="w-5 h-5 mr-2" /> Falar com Especialista
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Como Funciona o Processo
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Um protocolo seguro e individualizado para cada paciente
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3 md:gap-5">
            {etapas.map((etapa, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="p-4 md:p-6 rounded-xl bg-white border border-border/40 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full ${etapa.cor}`} />
                <div className="text-3xl md:text-4xl font-bold text-primary/15 mb-2">{etapa.numero}</div>
                <h3 className="font-bold text-foreground mb-1 text-sm md:text-lg">{etapa.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{etapa.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Segurança e cuidado em cada etapa do processo
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => (
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

      {/* Sintomas + Pós-Desintoxicação */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {/* Sintomas */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Sintomas de Abstinência
              </h2>
              <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-amber-800 text-sm">Nunca tente desintoxicar em casa</span>
                </div>
                <div className="space-y-2.5">
                  {sintomasAbstinencia.map((sintoma, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground text-xs md:text-sm">{sintoma}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pós */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Após a Desintoxicação
              </h2>
              <div className="space-y-3">
                {cuidadosPosDesintox.map((item, index) => (
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
              A desintoxicação não é apenas limpar o corpo — é o primeiro ato de coragem 
              em direção a uma nova vida. E ninguém precisa passar por isso sozinho.
            </p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-sm font-medium">Equipe Médica — Hospital Rumo Certo</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Desintoxicacao;
