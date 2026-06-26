import { SEO } from "@/components/SEO";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, MessageCircle, Shield, FileCheck, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import convenioAtendimento from "@/assets/convenio-atendimento.png";

import bradesco from "@/assets/convenios/bradesco-saude.png";
import cabesp from "@/assets/convenios/cabesp.png";
import careplus from "@/assets/convenios/careplus.png";
import cassi from "@/assets/convenios/cassi.png";
import geap from "@/assets/convenios/geap.png";
import portoSaude from "@/assets/convenios/porto-saude.png";
import itauSaude from "@/assets/convenios/itau-saude.png";
import saudeCaixa from "@/assets/convenios/saude-caixa.png";
import mediservice from "@/assets/convenios/mediservice.png";
import realGrandeza from "@/assets/convenios/real-grandeza.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const convenios = [
  { nome: "Bradesco Saúde", logo: bradesco },
  { nome: "CABESP", logo: cabesp },
  { nome: "Care Plus", logo: careplus },
  { nome: "CASSI", logo: cassi },
  { nome: "GEAP", logo: geap },
  { nome: "Porto Saúde", logo: portoSaude },
  { nome: "Itaú Saúde", logo: itauSaude },
  { nome: "Saúde Caixa", logo: saudeCaixa },
  { nome: "Mediservice", logo: mediservice },
  { nome: "Real Grandeza", logo: realGrandeza },
];

const beneficios = [
  { icon: Shield, titulo: "Cobertura Completa", desc: "Cobertura integral para internação psiquiátrica conforme ANS" },
  { icon: FileCheck, titulo: "Autorização Facilitada", desc: "Equipe especializada cuida de toda documentação necessária" },
  { icon: Clock, titulo: "Processo Ágil", desc: "Orientação rápida sobre carências, coberturas e reembolso" },
  { icon: HeartHandshake, titulo: "Sem Custo Adicional", desc: "Sem necessidade de pagamento extra além do seu plano" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Convenios = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Gostaria de saber se meu convênio é aceito para internação.");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Convênios Aceitos "} description={" Hospital Rumo Certo|Veja a lista de convênios médicos aceitos pelo Hospital Rumo Certo para internação."} path={"/convenios"} />
      <SEO title={"Convênios Aceitos | Hospital Rumo Certo"} description={"Veja a lista de convênios médicos aceitos pelo Hospital Rumo Certo para internação."} path={"/convenios"} />
      <EmergencyBar />
      <Navbar />

      {/* Hero - full image like main page */}
      <div className="relative w-full overflow-hidden pt-28 md:pt-32">
        <img
          src={convenioAtendimento}
          alt="Atendimento com convênio de saúde"
          className="w-full h-auto"
        />
      </div>

      {/* Convênios Parceiros */}
      <section className="py-14 md:py-20 bg-[hsl(215,10%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-2">
            Convênios Parceiros
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">
            Trabalhamos com as melhores operadoras de saúde do país
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
            {convenios.map((convenio, index) => (
              <motion.div
                key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <img src={convenio.logo} alt={convenio.nome} className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
                <span className="text-[10px] md:text-xs text-muted-foreground font-medium text-center leading-tight">
                  {convenio.nome}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            Não encontrou seu convênio?{" "}
            <button onClick={handleWhatsApp} className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80 transition-colors">
              Consulte nossa equipe
            </button>
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-black text-secondary text-center mb-2">
            Vantagens de Usar Seu Convênio
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm max-w-xl mx-auto">
            Facilitamos todo o processo para que você foque apenas na recuperação
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
            {beneficios.map((item, index) => (
              <motion.div
                key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-border/40 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">{item.titulo}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.desc}</p>
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
              Dúvidas Sobre Cobertura?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Nossa equipe está pronta para verificar a cobertura do seu plano e orientar sobre o processo de autorização.
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

export default Convenios;
