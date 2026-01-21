import PageLayout from "@/components/PageLayout";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  "Cobertura completa para internação psiquiátrica",
  "Sem necessidade de pagamento adicional",
  "Processo de autorização facilitado",
  "Equipe especializada em documentação",
  "Orientação sobre carências e coberturas",
  "Suporte para reembolso quando necessário",
];

const Convenios = () => {
  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de saber se meu convênio é aceito para internação."
    );
    window.open(`https://wa.me/5511955931301?text=${mensagem}`, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Convênios
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Planos de Saúde Aceitos
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Trabalhamos com os principais convênios médicos do país para facilitar 
              o acesso ao tratamento que você ou seu familiar precisa.
            </p>
            <Button size="lg" onClick={openWhatsApp} className="bg-primary hover:bg-primary/90">
              <MessageCircle className="w-5 h-5 mr-2" />
              Verificar Meu Convênio
            </Button>
          </div>
        </div>
      </section>

      {/* Logos dos Convênios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Nossos Convênios Parceiros
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {convenios.map((convenio, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={convenio.logo}
                  alt={convenio.nome}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Não encontrou seu convênio? Entre em contato conosco para verificar.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Benefícios de Usar Seu Convênio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Dúvidas Sobre Cobertura?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para verificar a cobertura do seu plano 
            e orientar sobre o processo de autorização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Convenios;