import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Heart, Shield, Target, Users, Phone, MessageCircle, Award, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import sobreNosLogo from "@/assets/sobre-nos-logo.jpg";
import bannerHospital from "@/assets/banner-hospital.jpg";
import areaVerde from "@/assets/estrutura/area-verde.jpg";
import instalacoes from "@/assets/estrutura/instalacoes.jpg";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const valores = [
  { icon: Heart, titulo: "Humanização", descricao: "Cada paciente é tratado com dignidade, respeito e compaixão." },
  { icon: Shield, titulo: "Ética e Sigilo", descricao: "Compromisso absoluto com a confidencialidade e princípios éticos." },
  { icon: Target, titulo: "Excelência", descricao: "Busca constante pela melhor prática clínica e atualização contínua." },
  { icon: Users, titulo: "Trabalho em Equipe", descricao: "Abordagem multidisciplinar integrando diferentes especialidades." },
];

const numeros = [
  { valor: "+3.000", label: "Vidas Transformadas" },
  { valor: "20+", label: "Anos de Experiência" },
  { valor: "98%", label: "Satisfação dos Pacientes" },
  { valor: "24h", label: "Atendimento Ininterrupto" },
];

const historia = [
  { ano: "2004", titulo: "Fundação", descricao: "Início das atividades com foco em tratamento humanizado." },
  { ano: "2010", titulo: "Expansão", descricao: "Abertura da unidade feminina exclusiva, pioneira na região." },
  { ano: "2015", titulo: "Modernização", descricao: "Novos protocolos e ampliação da equipe multidisciplinar." },
  { ano: "2020", titulo: "Reconhecimento", descricao: "Referência em saúde mental no interior de São Paulo." },
  { ano: "Hoje", titulo: "+3000 Vidas", descricao: "Índice de satisfação superior a 98% entre pacientes e famílias." },
];

const pilares = [
  "Equipe multidisciplinar com mais de 40 profissionais",
  "Protocolos baseados em evidências científicas",
  "Ambiente terapêutico em meio à natureza",
  "Programa de 12 Passos adaptado",
  "Suporte familiar contínuo durante o tratamento",
  "Acompanhamento pós-alta para prevenção de recaídas",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const SobreNos = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Gostaria de saber mais sobre o Hospital Rumo Certo.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      {/* Hero com imagem */}
      <div className="relative w-full overflow-hidden">
        <img src={bannerHospital} alt="Hospital Rumo Certo - Vista aérea" className="w-full h-auto" />
      </div>

      {/* Números de Impacto */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {numeros.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-secondary">{item.valor}</div>
                <div className="text-primary-foreground/80 text-xs md:text-sm mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - Logo + Texto */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl" />
                <img src={sobreNosLogo} alt="Hospital Rumo Certo" className="relative w-48 md:w-72 h-auto object-contain rounded-2xl shadow-lg" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center md:text-left">
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Nossa História</span>
              <h1 className="font-display text-3xl md:text-4xl font-black text-secondary mt-2 mb-5">
                Sobre o Hospital Rumo Certo
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                Há mais de 20 anos, o Hospital Rumo Certo dedica-se à recuperação de vidas afetadas pela dependência química e transtornos mentais. Nossa missão é oferecer tratamento humanizado, com excelência técnica e acolhimento genuíno.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Localizado em Cabreúva, interior de São Paulo, contamos com uma infraestrutura completa em meio à natureza — o ambiente ideal para a recuperação física e emocional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl md:text-2xl font-black text-secondary mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Proporcionar tratamento integral e humanizado para pessoas com dependência química e transtornos mentais, promovendo recuperação, dignidade e reinserção social.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Target className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-display text-xl md:text-2xl font-black text-secondary mb-3">Nossa Visão</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Ser referência nacional em saúde mental e dependência química, reconhecidos pela excelência, inovação terapêutica e resultados transformadores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {valores.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 text-sm md:text-lg">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares + Imagem */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center md:text-left mb-6">
                O Que Nos Diferencia
              </h2>
              <div className="space-y-3">
                {pilares.map((pilar, index) => (
                  <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="flex items-start gap-3 p-3 bg-[hsl(215,10%,97%)] rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{pilar}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3">
              <img src={areaVerde} alt="Área verde do hospital" className="rounded-xl w-full h-40 md:h-56 object-cover" />
              <img src={instalacoes} alt="Instalações do hospital" className="rounded-xl w-full h-40 md:h-56 object-cover mt-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-10">
            Nossa Trajetória
          </h2>
          <div className="max-w-3xl mx-auto">
            {historia.map((item, index) => (
              <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex gap-4 md:gap-6 items-start mb-6 last:mb-0">
                <div className="w-16 md:w-20 flex-shrink-0 text-right">
                  <span className="font-black text-primary text-sm md:text-lg">{item.ano}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                  {index < historia.length - 1 && <div className="w-0.5 h-full bg-primary/20 min-h-[40px]" />}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">{item.titulo}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{item.descricao}</p>
                </div>
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
              Conheça Nossa Estrutura
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Agende uma visita e conheça pessoalmente nossas instalações, equipe e metodologia de tratamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Phone className="w-5 h-5 mr-2" /> Agendar Visita
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="w-5 h-5 mr-2" /> Falar com Especialista
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

export default SobreNos;
