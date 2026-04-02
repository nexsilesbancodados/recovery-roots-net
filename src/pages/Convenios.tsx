import PageLayout from "@/components/PageLayout";
import { Phone, MessageCircle, CheckCircle, Shield, FileCheck, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import convenioAtendimento from "@/assets/convenio-atendimento.png";

// Importar logos dos convênios
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
  {
    icon: Shield,
    titulo: "Cobertura Completa",
    desc: "Cobertura integral para internação psiquiátrica conforme ANS",
  },
  {
    icon: FileCheck,
    titulo: "Autorização Facilitada",
    desc: "Equipe especializada cuida de toda documentação necessária",
  },
  {
    icon: Clock,
    titulo: "Processo Ágil",
    desc: "Orientação rápida sobre carências, coberturas e reembolso",
  },
  {
    icon: HeartHandshake,
    titulo: "Sem Custo Adicional",
    desc: "Sem necessidade de pagamento extra além do seu plano",
  },
];

import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Convenios = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Gostaria de saber se meu convênio é aceito para internação.");
  };

  return (
    <PageLayout>
      {/* Hero with Overlay */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={convenioAtendimento}
          alt="Atendimento com convênio de saúde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.6)] to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 md:pb-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-3"
            >
              Convênios & Planos de Saúde
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-2xl"
            >
              Internação Coberta pelo Seu Convênio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/80 mt-4 max-w-xl text-sm md:text-base"
            >
              Aceitamos os principais planos de saúde do Brasil. Nossa equipe cuida de toda a burocracia para você.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Logos dos Convênios */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Convênios Parceiros
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">
            Trabalhamos com as melhores operadoras de saúde do país
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {convenios.map((convenio, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border/50 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <img
                  src={convenio.logo}
                  alt={convenio.nome}
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                />
                <span className="text-xs text-muted-foreground font-medium text-center">
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
      <section className="py-14 md:py-20 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Vantagens de Usar Seu Convênio
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm max-w-xl mx-auto">
            Facilitamos todo o processo para que você foque apenas na recuperação
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.titulo}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(215,55%,25%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Dúvidas Sobre Cobertura?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Nossa equipe está pronta para verificar a cobertura do seu plano e orientar sobre o processo de autorização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Convenios;
