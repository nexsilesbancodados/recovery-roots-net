import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Heart, Users, Phone, BookOpen, Shield, MessageCircle, AlertTriangle, HandHeart, Brain, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import familiaRecuperacao from "@/assets/familia-recuperacao.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const orientacoes = [
  { icon: Eye, titulo: "Reconheça os Sinais", descricao: "Mudanças de comportamento, isolamento, alterações de humor, problemas financeiros inexplicáveis são sinais de alerta importantes.", cor: "bg-amber-500/10 text-amber-600" },
  { icon: Users, titulo: "Não Enfrente Sozinho", descricao: "A dependência afeta toda a família. Busque apoio profissional e grupos como Al-Anon e Nar-Anon.", cor: "bg-blue-500/10 text-blue-600" },
  { icon: Shield, titulo: "Estabeleça Limites", descricao: "Amar não significa permitir comportamentos destrutivos. Limites claros protegem você e incentivam o tratamento.", cor: "bg-emerald-500/10 text-emerald-600" },
  { icon: Heart, titulo: "Comunicação com Amor", descricao: "Expresse preocupação sem acusações. Use frases como 'Estou preocupado com você' ao invés de culpar.", cor: "bg-rose-500/10 text-rose-600" },
  { icon: Brain, titulo: "Eduque-se sobre a Doença", descricao: "A dependência é uma doença crônica do cérebro, não uma falha de caráter. Entender isso muda tudo.", cor: "bg-violet-500/10 text-violet-600" },
  { icon: AlertTriangle, titulo: "Saiba Quando Intervir", descricao: "Em situações de risco, a internação involuntária pode ser necessária e é prevista em lei.", cor: "bg-orange-500/10 text-orange-600" },
];

const programaFamiliar = [
  { titulo: "Grupos de Família", descricao: "Encontros semanais com psicólogos para troca de experiências e orientação entre familiares." },
  { titulo: "Visitas Orientadas", descricao: "Horários regulares de visitação com orientação da equipe sobre como apoiar a recuperação." },
  { titulo: "Terapia Familiar", descricao: "Sessões com terapeuta para trabalhar a dinâmica familiar e resolver conflitos." },
  { titulo: "Orientação Pós-Alta", descricao: "Acompanhamento da família após a alta para prevenir recaídas e manter a recuperação." },
];

const sinaisAlerta = [
  "Mudanças bruscas de humor ou comportamento",
  "Isolamento social e familiar",
  "Problemas financeiros inexplicáveis",
  "Negligência com aparência e higiene",
  "Mentiras frequentes e comportamento secreto",
  "Queda no desempenho profissional ou escolar",
  "Agressividade ou irritabilidade constante",
  "Perda de interesse em atividades que antes gostava",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

const ApoioFamilia = () => {
  const handleWhatsApp = () => openWhatsAppUtil("Olá! Sou familiar e preciso de orientação sobre como ajudar meu ente querido.");

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      {/* Hero */}
      <div className="relative w-full overflow-hidden pt-28 md:pt-32">
        <img src={familiaRecuperacao} alt="Família celebrando recuperação" className="w-full h-auto" />
      </div>

      {/* Banner */}
      <section className="py-10 md:py-14 bg-[hsl(var(--primary))]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <HandHeart className="w-8 h-8 md:w-10 md:h-10 text-secondary mx-auto mb-3" />
            <h1 className="font-display text-2xl md:text-4xl font-black text-primary-foreground mb-2">
              Apoio à Família
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
              A recuperação do seu ente querido começa com o apoio certo. Estamos aqui para orientar e acolher toda a família.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Orientações */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-3">
            Orientações para Familiares
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-xs md:text-sm max-w-xl mx-auto">
            Como lidar com a dependência de um ente querido de forma saudável e eficaz
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {orientacoes.map((item, index) => (
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

      {/* Sinais de Alerta + Programa */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {/* Sinais */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Sinais de Alerta
              </h2>
              <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-amber-800 text-sm">Fique atento a estes sinais</span>
                </div>
                <div className="space-y-2.5">
                  {sinaisAlerta.map((sinal, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span className="text-foreground text-xs md:text-sm">{sinal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Programa Familiar */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-xl md:text-2xl font-black text-secondary mb-6 text-center md:text-left">
                Nosso Programa Familiar
              </h2>
              <div className="space-y-3">
                {programaFamiliar.map((item, index) => (
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

      {/* Depoimento / Citação */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">
            <div className="text-5xl md:text-7xl text-primary/20 font-serif mb-4">"</div>
            <p className="text-foreground text-base md:text-xl leading-relaxed italic mb-6">
              A dependência não afeta apenas quem usa. Ela transforma toda a dinâmica familiar. 
              Por isso, tratar a família é tão importante quanto tratar o paciente.
            </p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-sm font-medium">Equipe de Psicologia — Hospital Rumo Certo</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              Precisa de Ajuda Agora?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Nossa equipe está disponível 24 horas para orientar famílias sobre internação e como proceder em emergências.
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

export default ApoioFamilia;
