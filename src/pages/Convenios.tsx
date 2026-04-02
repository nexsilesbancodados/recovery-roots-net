import PageLayout from "@/components/PageLayout";
import { Phone, MessageCircle, CheckCircle, Shield, FileText, Clock, HeartHandshake, BadgeCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import convenioAtendimento from "@/assets/convenio-atendimento.png";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

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
  { icon: Shield, titulo: "Cobertura Completa", desc: "Internação psiquiátrica coberta integralmente pelo seu plano de saúde" },
  { icon: FileText, titulo: "Documentação Facilitada", desc: "Nossa equipe cuida de toda a burocracia e autorização junto ao convênio" },
  { icon: Clock, titulo: "Atendimento Ágil", desc: "Processo rápido de verificação e autorização para início imediato" },
  { icon: HeartHandshake, titulo: "Sem Custos Extras", desc: "Sem necessidade de pagamento adicional além da cobertura do plano" },
  { icon: BadgeCheck, titulo: "Orientação Completa", desc: "Esclarecemos carências, coberturas e direitos do seu plano" },
  { icon: HelpCircle, titulo: "Suporte ao Reembolso", desc: "Auxílio completo para casos de reembolso quando necessário" },
];

const etapas = [
  { numero: "01", titulo: "Entre em Contato", desc: "Ligue ou envie mensagem informando seu convênio" },
  { numero: "02", titulo: "Verificação", desc: "Confirmamos a cobertura e orientamos sobre o processo" },
  { numero: "03", titulo: "Autorização", desc: "Cuidamos de toda documentação junto à operadora" },
  { numero: "04", titulo: "Início do Tratamento", desc: "Internação autorizada, sem preocupações burocráticas" },
];

const Convenios = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Gostaria de saber se meu convênio é aceito para internação.");
  };

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={convenioAtendimento} 
          alt="Atendimento com convênio de saúde"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
        <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="text-secondary font-semibold text-xs uppercase tracking-[0.2em]">
              Convênios e Planos de Saúde
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Seu plano cobre o tratamento
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-md">
              Aceitamos os principais convênios do Brasil. Nossa equipe cuida de toda a documentação para você.
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="mt-6 bg-secondary text-primary hover:bg-secondary/90 rounded-xl font-bold shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Verificar Cobertura
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Logos dos Convênios */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Planos Aceitos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">
              Nossos Convênios Parceiros
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Trabalhamos com as principais operadoras de saúde do Brasil para facilitar seu acesso ao tratamento.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {convenios.map((convenio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border/50 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={convenio.logo}
                  alt={convenio.nome}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xs text-muted-foreground font-medium text-center">{convenio.nome}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-10 text-sm">
            Não encontrou seu convênio?{" "}
            <button onClick={handleWhatsApp} className="text-primary font-semibold hover:underline">
              Consulte nossa equipe
            </button>
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, hsl(215 30% 97%) 0%, hsl(210 35% 95%) 50%, hsl(215 20% 98%) 100%)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Passo a Passo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">
              Como Funciona
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg transition-shadow"
              >
                <span className="font-display text-4xl font-bold text-primary/15">{etapa.numero}</span>
                <h3 className="font-display text-base font-bold text-foreground mt-2 mb-1">{etapa.titulo}</h3>
                <p className="text-muted-foreground text-sm">{etapa.desc}</p>
                {index < etapas.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3 text-primary/30 text-xl">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Vantagens
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2">
              Benefícios de Usar Seu Convênio
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <beneficio.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{beneficio.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Dúvidas Sobre Cobertura?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para verificar a cobertura do seu plano 
              e orientar sobre o processo de autorização. Atendimento 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-white/30 text-white hover:bg-white/10 rounded-xl font-bold">
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
